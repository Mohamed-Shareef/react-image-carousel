import { useEffect } from "react";
import Header from "../components/Header";
import { useState } from "react";
import ImageContainer from "../components/ImageContainer";
import SelectContainer from "../components/SelectContainer";

const CarouselPage = () => {
  const [currentAlbumId, setCurrentAlbumId] = useState(1);
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setImageData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleAlbumIdChange = (albumId) => {
    setCurrentAlbumId(+albumId);
  };

  const filteredData = imageData.filter(
    (image) => image.albumId === currentAlbumId
  );

  return (
    <main>
      <Header />
      <SelectContainer handleChange={handleAlbumIdChange} />
      {filteredData.length > 0 && <ImageContainer data={filteredData} />}
    </main>
  );
};

export default CarouselPage;
