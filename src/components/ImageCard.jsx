import styles from "./ImageCard.module.css";
const ImageCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <img src={data.url} alt="Carousel Image" />
      <p>Album ID : {data.albumId}</p>
      <p>Image ID : {data.id}</p>
      <p>Title : {data.title}</p>
    </div>
  );
};

export default ImageCard;
