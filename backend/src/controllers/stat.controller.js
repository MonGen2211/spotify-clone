import { Song } from "../models/song.model.js";
import { User } from "../models/user.model.js";
import { Album } from "../models/album.model.js";

export const getStats = async (req, res, next) => {
  try {
    // const totalSongs = await Song.countDocuments();
    // const totalUsers = await User.countDocuments();
    // const totalAlbum = await Album.countDocuments();

    const [totalSongs, totalUsers, totalAlbum, uniqueArtist] =
      await Promise.all([
        Song.countDocuments(),
        User.countDocuments(),
        Album.countDocuments(),

        Song.aggregate([
          {
            $unionWith: {
              coll: "albums",
              pipeline: [],
            },
          },

          {
            $group: {
              _id: "$artist",
            },
          },

          {
            $count: "count",
          },
        ]),
      ]);

    res.status(200).json({
      totalSongs,
      totalUsers,
      totalAlbum,
      totalArtists: uniqueArtist[0]?.length || 0,
    });
  } catch (error) {
    console.log("Error in stat controller:", error);
    next(error);
  }
};
