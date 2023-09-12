import "./Gallery.css";
import GALLERYDATA from "../../../api/gallery-data";
import GenButton from "../button";

export default function Gallery() {
  const gallery = GALLERYDATA.map((item) => {
    return (
      <div className="gallery--content" key={item.id}>
        <img src={item.galleryImageSrc} className="gallery--image" />

        <h3 className="gallery--title">{item.galleryName}</h3>
        <p className="gallery--description">{item.galleryDescription}</p>
        <div className="gallery--btn">
          {" "}
          <GenButton label="Order Now" backgroundColor="rgb(14, 132, 14)" />
        </div>
      </div>
    );
  });
  return (
    <>
      <section className="gallery--wrapper">
        <h1 className="gallery--header">
          Our <span>Gallery</span>
        </h1>
        <div className="gallery--container">{gallery}</div>
      </section>
    </>
  );
}
