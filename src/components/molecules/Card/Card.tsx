import React, { useRef, useState } from "react";
import styles from "./Card.module.scss";
import Title from "../../atoms/Title/Title";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import playIcon from "../../../assets/play.png";
import { EVariant } from "../../../types/enums";

interface CardProps {
  mediaSrc: string;
  thumbnailSrc?: string;
  isVideo?: boolean;
  title: string;
  subtitle: string;
  variant?: EVariant;
}

const Card: React.FC<CardProps> = ({
  mediaSrc,
  thumbnailSrc,
  isVideo = false,
  title,
  subtitle,
  variant = EVariant.Variant1,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={`${styles.card} ${styles[`card--${variant}`]}`}>
      {isVideo ? (
        <div className={styles.card__videoContainer}>
          {!isPlaying && thumbnailSrc && (
            <img
              src={thumbnailSrc}
              alt="thumbnail"
              className={styles.card__thumbnail}
              onClick={handlePlay}
            />
          )}
          <video
            ref={videoRef}
            src={mediaSrc}
            width="100%"
            height={200}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            controls
            style={{ display: isPlaying ? "block" : "none" }}
          />
          {!isPlaying && (
            <img
              src={playIcon}
              alt="play"
              className={styles.card__playIcon}
              onClick={handlePlay}
            />
          )}
        </div>
      ) : (
        <img src={mediaSrc} alt="media-src" className={styles.card__media} />
      )}
      <Title title={title} variant={variant} as="h6" />
      <Subtitle subtitle={subtitle} variant={variant} as="p" />
    </div>
  );
};

export default Card;
