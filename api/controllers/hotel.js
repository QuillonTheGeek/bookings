import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

//  UPDATE HOTEL
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

// DELETE HOTEL
export const deleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    next(err);
  }
};

//  GET HOTEL
export const specificHotel = async (req, res, next) => {
  try {
    const specificHotel = await Hotel.findById(req.params.id);
    res.status(200).json(specificHotel);
  } catch (err) {
    next(err);
  }
};
//  GET HOTEL BY CITY
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
//  GET ALL HOTEL
export const AllHotel = async (req, res, next) => {
  try {
    const AllHotel = await Hotel.find();
    res.status(200).json(AllHotel);
  } catch (err) {
    next(err);
  }
};
