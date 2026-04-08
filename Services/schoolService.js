import db from "../config/db.js";

const getNearestSchool = async(userLat,userLng) => {
    const query = `
    SELECT *,
    ROUND(
        (
            6371 * ACOS(
                LEAST(1,
                    COS(RADIANS(?)) * COS(RADIANS(latitude)) *
                    COS(RADIANS(longitude) - RADIANS(?)) +
                    SIN(RADIANS(?)) * SIN(RADIANS(latitude))
                )
            )
        ), 2
    ) AS distance
    FROM schools
    ORDER BY distance ASC;
  `;

  const [row] = await db.query(query, [userLat, userLng, userLat]);
  return row;
}

const addSchool = async (name, address, latitude, longitude ) => {

    const query = `
            INSERT INTO schools (name, address, latitude, longitude)
            VALUES (?, ?, ?, ?)
        `;

    const [result] = await db.query(query, [
        name,
        address,
        latitude,
        longitude,
    ]);

    return result.insertId;
};

const schoolService = {
    getNearestSchool,
    addSchool
};

export default schoolService;