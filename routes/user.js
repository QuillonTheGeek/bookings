import express from "express";
import {
  AllUser,
  deleteUser,
  specificUser,
  updateUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// AUTHENICATE USER
router.get("/checkauthenication", verifyToken, (req, res, next) => {
  res.send("Hello User! You are logged in");
});

// CHECK USER ACCESS
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Hello user you are logged in and can delete your account");
});
// CHECK ADMIN ACCESS
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello user you are logged in as admin and can delete any account");
});

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, specificUser);

// GET ALL
router.get("/", verifyAdmin, AllUser);
export default router;
