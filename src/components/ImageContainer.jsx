import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import styles from "./ImageContainer.module.css";
const ImageContainer = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((index) => (index - 1 < 0 ? data.length - 1 : index - 1));
  };

  const handleNext = () => {
    setCurrentIndex((index) => (index + 1 === data.length ? 0 : index + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <button onClick={handlePrevious}>Previous</button>
      {data.map((image, index) => (
        <div
          key={image.url}
          style={{ display: `${currentIndex === index ? "block" : "none"}` }}
        >
          <ImageCard data={image} />
        </div>
      ))}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ImageContainer;
