import { useState, useEffect } from "react";
import "../styles/DesignManager.css";

function ManageDesigns() {

  const [designs, setDesigns] = useState([]);
  const [albums, setAlbums] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [albumId, setAlbumId] = useState("");
  const [message, setMessage] = useState("");
  const [editingDesign, setEditingDesign] = useState(null);

  useEffect(() => {
  loadDesigns();
  loadAlbums();
}, []);

  const loadAlbums = () => {
  fetch(
    "http://localhost/maurice-portfolio/api/get_albums.php"
  )

  .then(res => res.json())
  .then(data => {
    setAlbums(data);

    if (data.length > 0) {
      setAlbumId(data[0].id);
    }
  });

};

  const loadDesigns = () => {
    fetch(
      "http://localhost/maurice-portfolio/api/get_designs.php"
    )
    .then(res => res.json())
    .then(data => {
      setDesigns(data);
    });
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("album_id", albumId);
    formData.append("title", title);
    formData.append("description", description);

    const response = await fetch(
      "http://localhost/maurice-portfolio/api/upload_image.php",
      {
        method:"POST",
        body:formData
      }
    );

    const data = await response.json();
    setMessage(data.message);
    loadDesigns();
  };

  const deleteDesign = (id) => {
    const formData = new FormData();
    formData.append("id", id);

    fetch(
      "http://localhost/maurice-portfolio/api/delete_design.php",
      {
        method:"POST",
        body:formData
      }
    )
    .then(() => {
      loadDesigns();
    });
  };

  return (
    <section className="design-manager">

      <h1>
        Manage Designs
      </h1>

      <div className="upload-box">

        <input
          type="text"
          placeholder="Design Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          placeholder="Design Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />
        <select
  value={albumId}
  onChange={(e) => setAlbumId(e.target.value)}
>

  {albums.map((album) => (

    <option
      key={album.id}
      value={album.id}
    >
      {album.name}
    </option>

  ))}

</select>

        <input
          type="file"
          onChange={(e)=>setImage(e.target.files[0])}
        />

        <button onClick={uploadImage}>
          Upload Design
        </button>

        <p>
          {message}
        </p>

      </div>

      <div className="design-grid">

  {designs.map((design)=>(

    <div 
      className="design-card"
      key={design.id}
    >

      <img
        src={`http://localhost/maurice-portfolio/uploads/designs/${design.image_name}`}
        alt={design.title}
      />


      <h3>
        {design.title}
      </h3>


      <p>
        {design.description}
      </p>


      <div className="design-card-buttons">

        <button>
          Edit
        </button>


        <button
          onClick={()=>deleteDesign(design.id)}
        >
          Delete
        </button>

      </div>


    </div>

  ))}

</div>

    </section>
  );
}

export default ManageDesigns;