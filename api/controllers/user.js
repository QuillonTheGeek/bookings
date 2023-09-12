import User from "../models/User.js";

//  UPDATE User
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

// DELETE User
export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    next(err);
  }
};

//  GET User
export const specificUser = async (req, res, next) => {
  try {
    const specificUser = await User.findById(req.params.id);
    res.status(200).json(specificUser);
  } catch (err) {
    next(err);
  }
};
//  GET ALL User
export const AllUser = async (req, res, next) => {
  try {
    const AllUser = await User.find();
    res.status(200).json(AllUser);
  } catch (err) {
    next(err);
  }
};
