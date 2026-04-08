import { Router } from "express";
import { listSchool, addSchool } from "../Controller/schoolController.js";

const route = Router();


route.post("/addSchool", addSchool);

route.get("/listSchool", listSchool);

export default route;