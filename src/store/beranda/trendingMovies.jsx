import { create } from "zustand";
import theTomorrowWar from "../../assets/images/beranda/content/the-tomorrow-war.png";
import Quantumania from "../../assets/images/beranda/content/quantumania.png";
import guardiansOfTheGalaxy from "../../assets/images/beranda/content/guardians-of-the-galaxy.png";
import aManCalledOtto from "../../assets/images/beranda/content/a-man-called-otto-2.png";
import littleMermaid from "../../assets/images/beranda/content/little-mermaid.png";

const trendingMovies = create(() => ({
  movies: [
    {
      poster: theTomorrowWar,
      trending: "Top 10",
    },

    {
      poster: Quantumania,
      trending: "Top 10",
    },

    {
      poster: guardiansOfTheGalaxy,
      trending: "Top 10",
    },

    {
      poster: aManCalledOtto,
      trending: "Top 10",
    },

    {
      poster: littleMermaid,
      trending: "Top 10",
    },
  ],
}));

export default trendingMovies;
