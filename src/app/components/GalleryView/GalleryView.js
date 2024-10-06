import Image from "next/image";
import styles from "./GalleryView.module.css";
import React, { useEffect, useState } from "react";

const GalleryView = ({ folderName, interval = 3500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lineWidth, setLineWidth] = useState([]);
  const [dataImages, setDataImages] = useState([]);
  const [resetLines, setResetLines] = useState(false);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('/api/getPhotos');
        const data = await response.json();
        
        if (data.success) {
          const images = data.files[folderName] || [];
          setDataImages(images);
        } else {
          console.error("Failed to load files.");
        }
      } catch (error) {
        console.error("An error occurred while fetching files.", error);
      }
    };

    fetchFiles();
  }, [folderName]);

  useEffect(() => {
    let timer;
    if (isHovered && dataImages.length > 0) {
      setLineWidth(100 / dataImages.length);

      timer = setTimeout(() => {
        if (currentIndex === dataImages.length - 1) {
          setCurrentIndex(0);
          setResetLines(true);
        } else {
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setResetLines(false);
        }
      }, interval);
    }

    return () => clearTimeout(timer);
  }, [isHovered, currentIndex, interval, dataImages]);

  if (!dataImages || dataImages.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div
      className={styles.gallery_layout}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.gallery_div}>
        <Image
          src={`/images/deptos/${folderName}/${dataImages[currentIndex]}`}
          alt={`Property image ${currentIndex + 1}`}
          width={500}
          height={300}
          className={"imageShowed"}
        />
      </div>

      <div className={styles.gallery_lines}>
        {dataImages.map((_, index) => (
          <div key={index} className={styles.line}>
            <div
              className={styles.line_fill}
              style={{
                animationDuration: `${interval}ms`,
                animationPlayState:
                  index === currentIndex && isHovered ? "running" : "paused",
                width: resetLines ? "0%" : index === currentIndex ? "100%" : "0%",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryView;
