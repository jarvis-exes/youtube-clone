import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import axios from "axios";
import { YOUTUBE_API_URL } from "../../utils/constants";
import type { HomePageVideos } from "../../Types";
import { parseData } from "../../utils";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const getSearchPageVideos = createAsyncThunk(
  "youtubeApp/searchPageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos, searchTerm },
    } = getState() as RootState;

    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );

    const parsedData: HomePageVideos[] = await parseData(items);

    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);
