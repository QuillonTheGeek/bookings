import express from "express";
import {
  AllHotel,
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  specificHotel,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE

// router.post("/", async (req, res) => {
//   const newHotel = new Hotel(req.body);
//   try {
//     const savedHotel = await newHotel.save();
//     res.status(200).json(savedHotel);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/find/:id", specificHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

// GET ALL
router.get("/", AllHotel);

export default router;
