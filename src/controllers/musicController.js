import axios from "axios";
import { options } from "./../libs/constant";

// get Genres
// 1 genre co nhieu playlist
// 1 playlist co nhieu track

const musicController = {
  getTopTrack: async (req, res) => {
    const newOptions = {
      ...options,
      url: options.url + "/chart/tracks/top",
      params: { region: "VN" },
    };
    try {
      const { data } = await axios.request(newOptions);

      return res.status(200).json({
        data,
      });
    } catch (error) {
      console.log("Not fetch top track :))");
      return res.status(500).json({
        error: error,
      });
    }
  },
  getTopArtists: async (req, res) => {
    const newOptions = {
      ...options,
      url: options.url + "/chart/artists/top",
      params: { region: "VN" },
    };
    try {
      const { data } = await axios.request(newOptions);

      return res.status(200).json({
        data,
      });
    } catch (error) {
      console.log("Not fetch top artists: ");
      return res.status(500).json({
        error: error,
      });
    }
  },
  getTopAlbums: async (req, res) => {
    const newOptions = {
      ...options,
      url: options.url + "/chart/albums/top",
      params: { region: "VN" },
    };
    try {
      const { data } = await axios.request(newOptions);

      return res.status(200).json({
        data,
      });
    } catch (error) {
      console.log("Not fetch top albums");
      return res.status(500).json({
        error: error,
      });
    }
  },

  getGenres: async (req, res) => {
    const newOptions = {
      ...options,
      url: options.url + "/home",
      params: { region: "VN" },
    };

    try {
      const { data } = await axios.request(newOptions);

      return res.status(200).json({
        data,
      });
    } catch (error) {
      console.log("Not fetch Genres");
      return res.status(500).json({
        error: error,
      });
    }
  },

  // get track list with playlist Id
  getPlaylist: async (req, res) => {
    const playlistId = req.params.playlistId || "37i9dQZF1DWVbRrSFENdgA";

    const newOptions = {
      ...options,
      url: options.url + "/playlist/contents",
      params: { playlistId },
    };
    try {
      const { data } = await axios.request(newOptions);

      return res.status(200).json({
        data,
      });
    } catch (error) {
      console.log("Not fetch playlist with id: " + playlistId);
      return res.status(500).json({
        error: error,
      });
    }
  },

  // find Track on SoundCloud
  // find by Track ID, track share URL, track name, ...
  getTrack: async (req, res) => {
    console.log("trackId: ", req.params.trackId);
    const trackId = req.params.trackId;

    const newOptions = {
      ...options,
      url: options.url + "/track/download/soundcloud",
      params: { track: trackId },
    };

    try {
      const { data } = await axios.request(newOptions);

      return res.status(200).json({
        data,
      });
    } catch (error) {
      console.log("Not fetch track with id: " + trackId);
      return res.status(500).json({
        error: error,
      });
    }
  },
};
export default musicController;
