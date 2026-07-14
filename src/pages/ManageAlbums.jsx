import { useState, useEffect } from "react";
import "../styles/ManageAlbums.css";

function ManageAlbums(){
  const [albums,setAlbums] = useState([]);
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [message,setMessage] = useState("");
  const [editingAlbum,setEditingAlbum] = useState(null);

  useEffect(()=>{
    loadAlbums();
  },[]);

  const loadAlbums = async()=>{
    const response = await fetch(
      "http://localhost/maurice-portfolio/api/get_albums.php"
    );

    const data = await response.json();
    setAlbums(data);
  };

  const createAlbum = async()=>{
    const formData = new FormData();
    formData.append("name",name);
    formData.append("description",description);

    const response = await fetch(
      "http://localhost/maurice-portfolio/api/create_album.php",
      {
        method:"POST",
        body:formData
      }
    );

    const data = await response.json();
    setMessage(data.message);

    setName("");
    setDescription("");
    loadAlbums();
  };

  const editAlbum = (album)=>{
    setEditingAlbum(album);
    setName(album.name);
    setDescription(album.description);
  };

  const updateAlbum = async()=>{
    const formData = new FormData();
    formData.append("id",editingAlbum.id);
    formData.append("name",name);
    formData.append("description",description);

    const response = await fetch(
      "http://localhost/maurice-portfolio/api/update_album.php",
      {
        method:"POST",
        body:formData
      }
    );

    const data = await response.json();
    setMessage(data.message);
    setEditingAlbum(null);
    setName("");
    setDescription("");
    loadAlbums();
  };

  const deleteAlbum = async(id)=>{
    const formData = new FormData();
    formData.append("id",id);

    const response = await fetch(
      "http://localhost/maurice-portfolio/api/delete_album.php",
      {
        method:"POST",
        body:formData
      }
    );

    const data = await response.json();
    setMessage(data.message);
    loadAlbums();
  };

return (
<section className="manage-albums">

<h1>
Manage Albums
</h1>
<div className="album-form">

<h2>
{editingAlbum ? "Edit Album" : "Create New Album"}
</h2>

<input
type="text"
placeholder="Album Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<textarea
placeholder="Album Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<button
onClick={editingAlbum ? updateAlbum : createAlbum}

>
{editingAlbum ? "Update Album" : "Create Album"}
</button>

<p>
{message}
</p>
</div>

<div className="album-list">

<h2>
Existing Albums
</h2>

{albums.map((album)=>(
<div
className="album-card"
key={album.id}
>

<h3>
{album.name}
</h3>

<p>
{album.description}
</p>

<button
onClick={()=>editAlbum(album)}
>
Edit
</button>

<button
onClick={()=>deleteAlbum(album.id)}
>

Delete
</button>
</div>
))}

</div>
</section>
);
}

export default ManageAlbums;