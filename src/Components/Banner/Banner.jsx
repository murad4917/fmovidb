import React, { useEffect, useState } from "react";
import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";
import MovieInstance from "../../Utility/MovieInstance";
import requests from "../../Utility/request_url";
const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [BannerImage, setBannerImage] = useState([]);
  useEffect(() => {
    const fetchBannerImage = async () => {
      const request = await MovieInstance.get(requests.fetchNetflixOriginals);
      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
    };
    fetchBannerImage();
  }, []);

  function truncateString(str, num) {
    return str?.length > num ? str.substr(0, num-1) + "..." : str;
  }

  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${BANNER_BASE}${BannerImage?.backdrop_path})`,
      }}
    >
      {/* netflix image */}
      <img
        className={styles.logoImg}
        src={NetflixBannerLogo}
        alt="Netflix_Logo"
      />

      {/* title */}
      <h1 className={styles.title}>{BannerImage?.name || BannerImage?.title || BannerImage?.original_name}</h1>

      {/* description */}
      <h1 className={styles.description}>
        {truncateString(BannerImage?.overview, 150)}
      </h1>

      {/* buttons */}
      <div className={styles.buttonContainer}>
        <button className={styles.Button}>
          {" "}
          <Play size={30} />
          Play
        </button>
        <button className={styles.Button}>
          {" "}
          <Info size={30} />
          More Info
        </button>
      </div>
      {/* fade effect */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
}

export default Banner;
