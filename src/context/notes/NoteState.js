import { useState } from "react";
import NoteContext from "./noteContext"; 


const NoteState=(props)=>{
  const host='http://localhost:5000'
   const notesInital=[]
    const [notes, setnotes] = useState(notesInital)
    
    
    //FetchNotess the fetch was browsed from google i.e,. fetch with header

    const getNotes=async()=>{
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',  
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4OGI2MTFhMWM4MjNhNDEzOTIzY2NkIn0sImlhdCI6MTY1MzEyNzU1MH0.a4ao-q4-xaaMv1PCDFGhl_X4m6DhyWA86LsgOTFoUgM'  
        },
    
      });
      const json=await response.json();
      setnotes(json);
    }
    




    //AddNote

    const addNote=async(title,description,tag)=>{
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4OGI2MTFhMWM4MjNhNDEzOTIzY2NkIn0sImlhdCI6MTY1MzEyNzU1MH0.a4ao-q4-xaaMv1PCDFGhl_X4m6DhyWA86LsgOTFoUgM'  
        },
    
        body: JSON.stringify({title,description,tag}) 
      });
      
      const note= await response.json();
      setnotes(notes.concat(note));
    }


    //DeleteNote
    const deleteNote=async (id)=>{
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',  
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4OGI2MTFhMWM4MjNhNDEzOTIzY2NkIn0sImlhdCI6MTY1MzEyNzU1MH0.a4ao-q4-xaaMv1PCDFGhl_X4m6DhyWA86LsgOTFoUgM'  
        },
      });
        const json=await response.json();
        console.log(json);
        const newNotes=notes.filter((note)=>{return note._id !== id})
        setnotes(newNotes)
    }



    //EditNote
    const editNote=async (id,title,description,tag)=>{
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',  
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4OGI2MTFhMWM4MjNhNDEzOTIzY2NkIn0sImlhdCI6MTY1MzEyNzU1MH0.a4ao-q4-xaaMv1PCDFGhl_X4m6DhyWA86LsgOTFoUgM'  
        },
        body: JSON.stringify({id,title,description}) 
      })

      let newNotes=JSON.parse(JSON.stringify(notes))
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id===id){
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
          break;
        }
        setnotes(newNotes)
      }
      const json= await response.json();
    }


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;