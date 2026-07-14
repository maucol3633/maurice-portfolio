import designAlbums from "../data/designAlbums";
import "../styles/GraphicDesign.css";

function GraphicDesign() {

  return (
    <div className="design-gallery">

      {designAlbums.map((album) => (

        <section className="design-category" key={album.id}>

          <h2>{album.name}</h2>

          <div className="line"></div>

          <div className="design-grid">

            {album.images.map((image) => (

              <img
                key={image.id}
                src={image.image}
                alt={image.title}
              />

            ))}

          </div>

        </section>

      ))}

    </div>
  );
}

export default GraphicDesign;