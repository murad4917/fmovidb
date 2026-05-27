import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoArrowDownCircle } from "react-icons/io5";
import styles from "./MovieCard.module.css";
 const Image_Base_URL = "https://image.tmdb.org/t/p/w500";
function MovieCard({ movie }) {
  let genres = ["Action", "Adventure", "Thriller"];
  return (
    <div className={styles.CardWrapper}>
      {/* poster image */}
      <img
        className={styles.PosterImage}
        src= {`${Image_Base_URL}${movie?.poster_path}`}
        alt="poster image"
      />

      {/* hover card */}
      <div className={styles.HoverCard}>
        {/* image  */}
        <img
          className={styles.HoverImage}
          src= {`${Image_Base_URL}${movie?.poster_path}`}
          alt="hover image"
        />

        {/* badge */}
        <div className={styles.Badge}>Recently added</div>

        {/* button row */}
        <div className={styles.ButtonRow}>
          <FaCirclePlay
            className={styles.CircleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.CircleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.CircleButton}
            color="white"
            size={40}
          />
          <IoArrowDownCircle
            className={`${styles.CircleButton} ${styles.CircleButtonSmall}`}
            color="white"
            size={40}
          />
        </div>
        {/* metadata row */}
        <div className={styles.MetadataRow}>
          <span className={styles.MetadataItem}>U/A 16+</span>
          <span className={styles.MetadataItem}>Movie</span>
          <span className={styles.MetadataItem}>HD</span>
        </div>
        {/* genres */}
        <div className={styles.Genres}>
          {genres.map((g, index) => (
            <span key={index}>
              {g}
              {index < genres.length - 1 && (
                <span className={styles.GenreSeparator}>• </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
