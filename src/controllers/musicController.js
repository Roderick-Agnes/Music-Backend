import axios from "axios";
import { options } from "./../libs/constant";
import { data } from "./../api/data";

// get Genres
// 1 genre co nhieu playlist
// 1 playlist co nhieu track

const musicController = {
  getGenres: async (req, res) => {
    const newOptions = {
      ...options,
      url: options.url + "/home",
      params: { region: "VN" },
    };

    // const { data } = await axios.request(newOptions);

    return res.status(200).json({
      data: data.genres,
    });
  },

  // get track list with playlist Id
  getPlaylist: async (req, res) => {
    const playlistId = req.params.playlistId || "37i9dQZF1DWVbRrSFENdgA";

    const newOptions = {
      ...options,
      url: options.url + "/playlist/contents",
      params: { playlistId },
    };

    // const { data } = await axios.request(newOptions);

    return res.status(200).json({
      data: data.playlistTracks,
    });
  },

  // find Track on SoundCloud
  // find by Track ID, track share URL, track name, ...
  getTrack: async (req, res) => {
    const trackId = req.params.trackId || "4CUvVaAYuXtvYURLFz7EIL";

    const newOptions = {
      ...options,
      url: options.url + "/track/download/soundcloud",
      params: { track: trackId },
    };

    // const { data } = await axios.request(newOptions);

    return res.status(200).json({
      data: data.track,
    });
  },
};
export default musicController;
