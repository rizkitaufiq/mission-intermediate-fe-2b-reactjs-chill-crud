import { create } from "zustand";
import Suzume from "../../assets/images/beranda/content/suzume.png";
import jurasicWorld from "../../assets/images/beranda/content/jurassic-world.png";
import Sonic from "../../assets/images/beranda/content/sonic.png";
import allOfUsAreDead from "../../assets/images/beranda/content/all-of-us-are-dead.png";
import bigHero6 from "../../assets/images/beranda/content/big-hero-6.png";

const topRating = create(() => ({
  movies: [
    {
      poster: Suzume,
      status: "Episode Baru",
    },

    {
      poster: jurasicWorld,
      status: "",
    },

    {
      poster: Sonic,
      status: "",
    },

    {
      poster: allOfUsAreDead,
      status: "",
    },

    {
      poster: bigHero6,
      status: "",
    },
  ],
}));

export default topRating;
