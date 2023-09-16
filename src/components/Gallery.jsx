import { useState } from "react";
import "/src/styles/Gallery.css";
import GALLERYDATA from "../../api/gallery-data";
import GenButton from "./button";
import { FaTimes } from "react-icons/fa";
export default function Gallery() {
  const [file, setFile] = useState(null);

  const gallery = GALLERYDATA.map((file) => {
    return (
      <div className="gallery--content" key={file.id}>
        <img
          src={file.galleryImageSrc}
          alt={file.galleryName}
          className="gallery--image"
        />

        <h3 className="gallery--title">{file.galleryName}</h3>
        <p className="gallery--description">{file.galleryDescription}</p>
        <div className="gallery--btn">
          <GenButton
            label="View"
            backgroundColor="rgb(14, 132, 14)"
            handleClick={(event) => {
              setFile(file);
              event.preventDefault();
            }}
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <section className="gallery--wrapper" style={{ position: "relative" }}>
        <h1 className="gallery--header">
          Our <span>Gallery</span>
        </h1>
        <div className="gallery--container">
          {gallery}

          <div
            className="gallery--popup--container"
            style={{
              display: file ? "block" : "none"
            }}
            onClick={() => setFile(null)}
          >
            <div
              className="gallery--popup--content"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                width: "80%",
                height: "50%",
                backgroundColor: "#fff",
                padding: "5px",
              }}
            >
              {" "}
              <div
                className="popup--image--box"
                style={{ height: "40%", width: "100%", overflow: "hidden" }}
              >
                {" "}
                <img
                  src={file?.galleryImageSrc}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <h3 className="gallery--title">{file?.galleryName}</h3>
              <p className="gallery--description">{file?.galleryDescription}</p>
              <button
                className="popup--close--icon"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  fontSize: "20px",
                  color: "green",
                  border: "none",
                  padding: "5px",
                  borderBottomLeftRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setFile(null);
                }}
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
