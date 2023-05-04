import { Router } from "express";
import {
  getAstronauts,
  addAstronaut,
  updateAstronaut,
  deleteAstronaut,
} from "../controllers/astronauts";

const router: Router = Router();

router.get("/astronauts", getAstronauts);

router.post("/add-astronaut", addAstronaut);

router.put("/edit-astronaut/:id", updateAstronaut);

router.delete("/delete-astronaut/:id", deleteAstronaut);

export default router;
