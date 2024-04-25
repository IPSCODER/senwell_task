import React, { useEffect, useState } from 'react'
import "./folder.css"
import { useNavigate, useParams } from 'react-router-dom';

import axios from "axios"

const Folder = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [selectedFile, setSelectedFile] = useState(null);
  const [images,setImages] = useState([])
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("file",selectedFile)
    await axios.put(`http://localhost:5000/upload/${localStorage.getItem("email")}/${id}`,formData)
    .then((resp) => {
    if (resp.status == 200) {
      setSelectedFile(null)
    }
  }
  )
    .catch((err) => console.log(err))
  };

  useEffect(()=>{
    axios.post("http://localhost:5000/getImages",{useremail:localStorage.getItem("email"),foldername:id})
    .then((resp) => setImages(resp.data))
    .catch((err) => console.log(err))
  },[selectedFile])
    

    
  return (
    <section className='folder-section' >
      {/* { addM && <AddFolder folderName={folderName} setFolderName={setFolderName} folderAdd={folderAdd} addF={setAddM} title="Image" />} */}
      <div className='add-img' >
      <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 18V6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      <form onSubmit={handleSubmit} >
      <input type="file" className='image-input' onChange={handleFileChange} />
    {selectedFile && <button type='submit' className='upload-img-btn'  >Upload</button>}
      </form>
</div>
{images?.map((i) =>(
  <div className='image' onClick={() =>{navigate("/image",{state:`http://localhost:5000/images/${i.path}`})}} key={i._id} >
    <img src={`http://localhost:5000/images/${i.path}`} alt="" />
  </div>
))}


        
    </section>
  )
}

export default Folder