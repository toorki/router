import React from 'react'
import { useState } from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap';


const AddMovie = ({add}) => {
   
    const [show, setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);

    const [id, setId]=useState("")
    const [title, setTitle]=useState("")
    const [rate, setRate]=useState(0)
    const [description, setDescription]=useState("")
    const [posterUrl, setPosturUrl]=useState("")
    const [trailer, setTrailer]=useState("")

    const handleId=(e)=>{setId(e.target.value)}
    const handleTitle=(e)=>{setTitle(e.target.value)}
    const handleRate=(e)=>{setRate(e.target.value)}
    const handleDescription=(e)=>{setDescription(e.target.value)}
    const handlePostureUrl=(e)=>{setPosturUrl(e.target.value)}
    const handleTrailer=(e)=>{setTrailer(e.target.value)}

    const addNewMovie=()=>{
        let newMovie={
            id:id,
            title:title,
            rate:rate,
            description:description,
            posterUrl:posterUrl,
            trailer:trailer,

        }; add(newMovie)
    }
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>Add A New Movie</Button>
        
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
          
        Id
        <FormControl onChange={(e)=>handleId(e)} placeholder="ID"/>
        Title 
        <FormControl onChange={(e)=>handleTitle(e)} placeholder="Title"/>
        Rate
        <FormControl onChange={(e)=>handleRate(e)} placeholder="Rate"/>
        Description
        <FormControl onChange={(e)=>handleDescription(e)} placeholder="Description"/>
        PostureUrl
        <FormControl onChange={(e)=>handlePostureUrl(e)} placeholder="PostureUrl"/>
        Trailer
        <FormControl onChange={(e)=>handleTrailer(e)} placeholder="Trailer"/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewMovie} onChange={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  )
}

export default AddMovie