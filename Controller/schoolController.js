import schoolService from "../Services/schoolService.js";

export const listSchool = async(req, res) => {
    const {latitude , longitude} = req.query;

    if(!latitude || !longitude) return res.status(400).send("Please provide latitude and longitude");

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);

    if (lat > 90 || lat < -90 || lng > 180 || lng < -180) {
    return res.status(400).json({ error: "Invalid latitude or longitude range" });
    }

     if (isNaN(lat) || isNaN(lng)) {
        return res.status(400).json({ error: "Invalid coordinates" });
    }
    try {
        const result = await schoolService.getNearestSchool(lat, lng);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}

export const addSchool = async(req, res) => {
    const {name, address, latitude, longitude} = req.body;
    if(!name || !address || !latitude || !longitude) return res.status(400).send("Please provide name, address, latitude and longitude");

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lng)) {
        return res.status(400).json({ error: "Latitude and longitude must be numbers" });
    }

    if (lat > 90 || lat < -90 || lng > 180 || lng < -180) {
        return res.status(400).json({ error: "Invalid latitude or longitude range" });
    }


    try {

        const id = await schoolService.addSchool(name, address, latitude, longitude);

        return res.status(201).json({
        message: "School added successfully",
        id,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}