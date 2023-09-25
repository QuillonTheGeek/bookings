import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  AllRoom,
  createRoom,
  deletedRoom,
  specificRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";

const router = express.Router();
// CREATE
router.post("/:hotelId", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//UPDATE ROOM AVAILABILITY
router.put("/availability/:id", updateRoomAvailability);

// DELETE
router.delete("/:id/:hotelId", verifyAdmin, deletedRoom);

// GET
router.get("/:id", specificRoom);

// GET ALL
router.get("/", AllRoom);

export default router;
