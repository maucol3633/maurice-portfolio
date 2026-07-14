import { useState, useEffect } from "react";
import "../styles/GraphicDesign.css";

function GraphicDesign() {
  
  const [albums, setAlbums] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  
  
  useEffect(() => {
    fetch("http://localhost/maurice-portfolio/api/get_album_designs.php")
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
      });
  }, []);

  return (
    <section className="graphic-design">

      <div className="graphic-header">
        <h1>Graphic Design Portfolio</h1>

        <p>
          A collection of branding, logo design, apparel graphics,
          marketing materials, digital artwork, UI/UX design,
          and creative projects developed throughout my freelance career.
        </p>
      </div>

      {/* Professional Partnerships */}

      <div className="clients-section">

        <h2>Professional Design Partnerships</h2>

        <p className="clients-intro">
          Over the years I've partnered with sports organizations,
          businesses, entrepreneurs, and community organizations to
          create professional branding, apparel, promotional graphics,
          social media content, and digital marketing materials.
        </p>

        <div className="clients-grid">

          <div className="client-card">
            The Basketball League (TBL)
          </div>

          <div className="client-card">
            Ontario Hockey League (OHL)
          </div>

          <div className="client-card">
            Pro Boxer Jermoine Royster
          </div>

          <div className="client-card">
            Social Media influencers 
          </div>

          <div className="client-card">
            Small Businesses
          </div>

          <div className="client-card">
            Entrepreneurs
          </div>

          <div className="client-card">
            Community Organizations
          </div>

          <div className="client-card">
            Athletic Programs
          </div>

          <div className="client-card">
            AND MORE!
          </div>

        </div>

      </div>

      {/* Albums */}

      {albums.map((album) => (

        <div
          className="album-section"
          key={album.id}
        >

          <h2>{album.name}</h2>

          <p>{album.description}</p>

          <div className="design-gallery">

            {album.images.map((design) => (

              <div
                className="gallery-card"
                key={design.id}
              >

                <img
                src={`http://localhost/maurice-portfolio/uploads/designs/${encodeURIComponent(design.image_name)}`}
                alt={design.title}
                onClick={() => setSelectedImage(design)}/>  

                <h3>{design.title}</h3>

                <p>{design.description}</p>

              </div>
            ))}
          </div>
        </div>
      ))}

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
        src={`http://localhost/maurice-portfolio/uploads/designs/${encodeURIComponent(selectedImage.image_name)}`}
        alt={selectedImage.title}
      />

      <h2>{selectedImage.title}</h2>

      <p>{selectedImage.description}</p>

    </div>

  </div>

)}
    </section>
  );
}
export default GraphicDesign;