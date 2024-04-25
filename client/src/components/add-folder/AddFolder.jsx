import React, { useEffect, useRef } from 'react'
import "./add-folder.css"

const AddFolder = ({folderName,setFolderName,folderAdd,addF,title}) => {

    const reactNode = useRef(null)


    useEffect(() =>{

        const handleNode = (event) =>{
            if (!reactNode.current.contains(event.target)) {
                addF(false)
            }
        }
        document.addEventListener("mousedown",handleNode)

        return () =>{
            document.removeEventListener("mousedown",handleNode)
        }



    },[])

  return (
    <section className='add-folder' >
        <div className="add-section" ref={reactNode} >
            <h4>Add {title}</h4>
            <input type='text' placeholder={`Enter ${title} Name`} value={folderName} onChange={(e) =>{setFolderName(e.target.value)}} />
            <button onClick={folderAdd} >Add</button>
        </div> 
    </section>
  )
}

export default AddFolder