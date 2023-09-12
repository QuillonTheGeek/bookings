import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

//CREATE ROOM

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

// UPDATED ROOM
export const updateRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

// DELETE ROOM
export const deletedRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted");
  } catch (err) {
    next(err);
  }
};
//  GET Room
export const specificRoom = async (req, res, next) => {
  try {
    const specificRoom = await Room.findById(req.params.id);
    res.status(200).json(specificRoom);
  } catch (err) {
    next(err);
  }
};
//  GET ALL Room
export const AllRoom = async (req, res, next) => {
  try {
    const AllRoom = await Room.find();
    res.status(200).json(AllRoom);
  } catch (err) {
    next(err);
  }
};
