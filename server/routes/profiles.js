import express from "express";
import { Profile } from "../models/profile.js";

const router = express.Router();

// router.get("/", (_, res) => {
//   // debugger;
//   Profile.find()
//     .then((profiles) => res.json(profiles))
//     .catch((err) => res.status(404));
// });

router.get("/", async (_, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(404).json({ error: "Profiles not found" });
  }
});

// router.patch("/", (req, res) => {
//   res.json("patch works");
// });
router.patch("/:profileId", async (req, res) => {
  const { profileId } = req.params;
  const updateData = req.body;

  try {
    // Find the profile by ID and update it
    const updatedProfile = await Profile.findByIdAndUpdate(
      profileId,
      updateData,
      { new: true }
    );

    // If no profile is found, send a 404 response
    if (!updatedProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    // Send the updated profile as the response
    res.json(updatedProfile);
  } catch (err) {
    // Handle any errors and send a 500 response
    res
      .status(500)
      .json({ error: "An error occurred while updating the profile" });
  }
});

router.post("/", (req, res) => {
  res.json("post works");
});

router.delete("/:profileId", (req, res) => {
  res.json(`Profile ${req.params.profileId} was deleted`);
});

export const profiles = router;
