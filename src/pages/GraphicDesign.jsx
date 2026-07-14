import { useState } from "react";
import designAlbums from "../data/designAlbums";
import "../styles/GraphicDesign.css";

function GraphicDesign() {

  const [selectedImage, setSelectedImage] = useState(null);


  return (
    <section className="graphic-design">

      <div className="graphic-header">
        <h1>Graphic Design</h1>
        <p>
          A collection of branding, marketing, and creative design projects.
        </p>
      </div>


      {designAlbums.map((album) => (

        <div className="album-section" key={album.id}>

          <h2>{album.name}</h2>

          <div className="album-line"></div>


          <div className="design-gallery">

            {album.images.map((image) => (

              <div 
                className="gallery-card" 
                key={image.id}
                onClick={() => setSelectedImage(image)}
              >

                <img
                  src={image.image}
                  alt={image.title}
                />

              </div>

            ))}

          </div>

        </div>

      ))}



      {/* LIGHTBOX */}

      {selectedImage && (

        <div 
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <div 
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>


            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />


          </div>

        </div>

      )}

    </section>
  );
}

export default GraphicDesign;