import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import AddFolder from "../../components/add-folder/AddFolder";
import axios from "axios";

const Home = () => {
  
  const [addF, setAddF] = useState(false);
  const [isFolderCreated, setIsFolderCreated] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [folderNames, setFolderNames] = useState([]);

  const getFolders = async () => {
    try {
      await axios
        .post("https://senwell-task.onrender.com/folders/allFolders", {
          body: { email: localStorage.getItem("email") },
        })
        .then((resp) => {
          setFolderNames(resp?.data);
          return true
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
     getFolders();
    
  }, [isFolderCreated]);

  // useEffect(() => {
  //   const fetchData = async() => {
  //     const resp = await getFolders();
  //     if(resp){
  //       setIsFolderCreated(false)
  //     }
  //     localStorage.getItem("email") ? navigate("/") : navigate("/auth");
  //   }
  //   fetchData();
  // }, [isFolderCreated]);

  const folderAdd = async () => {
    if (folderName.length == 0) {
      alert("Insert Folder Name");
    } else {
      try {
        await axios
          .post("https://senwell-task.onrender.com/folders/createFolders", {
            body: {
              email: localStorage.getItem("email"),
              foldername: folderName,
            },
          })
          .then(() => setIsFolderCreated(prev => !prev))
          .catch((e) => console.log(e));
      } catch (err) {
        console.log(err);
      }
    }
    setAddF(false);
    setFolderName("");
  };

  const folderDelete = async (foldername) => {
    try {
      await axios.post("https://senwell-task.onrender.com/folders/deleteFolder", {
        useremail: localStorage.getItem("email"),
        foldername: foldername,
      }).then((resp) =>{
        if (resp.status == 201) {
          setIsFolderCreated(prev => !prev)
        }
      })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="home-section">
      {addF && (
        <AddFolder
          folderName={folderName}
          setFolderName={setFolderName}
          folderAdd={folderAdd}
          addF={setAddF}
          title={"folder"}
        />
      )}
      <div
        className="add-button"
        onClick={() => {
          setAddF(true);
        }}
      >
        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M6 12H18"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M12 18V6"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      {folderNames?.map((i, index) => (
        <div key={i._id}>
          <Link to={`/folder/${i.foldername}`} className="folder">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect width="24" height="24" fill="white"></rect>{" "}
                <path
                  d="M3 6.47214C3 6.16165 3.07229 5.85542 3.21115 5.57771L4 4H9L10 6H20C20.5523 6 21 6.44772 21 7V9V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V9V6.47214Z"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M4 20H20C20.5523 20 21 19.5523 21 19V11C21 9.89543 20.1046 9 19 9H5C3.89543 9 3 9.89543 3 11V19C3 19.5523 3.44772 20 4 20Z"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <h4 className="folder-name">{i.foldername}</h4>
          </Link>
          <button
            className="folder-delete"
            onClick={() => {
              folderDelete(i.foldername);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
};

export default Home;
