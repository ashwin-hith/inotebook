import { useState } from "react";
import NoteContext from "./noteContext"; 


const NoteState=(props)=>{
   const notesInital=[
    {
        "_id": "628937123dd5ae41967176389",
        "user": "6288b611a1c823as413923ccd",
        "title": "Python",
        "description": "Lets learch python programming from beginning and lets Ace this programming language by studying all the topics related to the programming",
        "tag": "this is about dabba programming",
        "date": "2022-05-21T19:01:38.465Z",
        "__v": 0
      },
      {
        "_id": "6289cc59ea4e85efa58964fc8",
        "user": "6288bd611a1c823a413923ccd",
        "title": "JAVA",
        "description": "I will teach you how to make the adriod softwares in the java programming so lets learn andriod development from scratch",
        "tag": "you will master python once u complete this course",
        "date": "2022-05-22T05:38:33.665Z",
        "__v": 0
      },
      {
        "_id": "6289acc59ea4e85ef58964fc8",
        "user": "6288b611ad1c823a413923ccd",
        "title": "C++",
        "description": "Let's ace DATA STRUCTURES AND ALGORITHMS in C++ by end of the sem you will complete solve all the problems related to the problem solving",
        "tag": "you will master python once u complete this course",
        "date": "2022-05-22T05:38:33.665Z",
        "__v": 0
      },
      {
        "_id": "6289cc59eaa4e85ef58964fc8",
        "user": "6288b611ag1c823a413923ccd",
        "title": "Kotlin",
        "description": "I don't know for what it is been used this programing so let's learn this programming language for the additional use.",
        "tag": "you will master python once u complete this course",
        "date": "2022-05-22T05:38:33.665Z",
        "__v": 0
      },
      {
        "_id": "6289cac59eaa4e85ef58964fc8",
        "user": "6288b611av1c823a413923ccd",
        "title": "JavaScript",
        "description": "Let's master JavaScript and crate cool web development pages and also lets Become MERN STACK ",
        "tag": "you will master python once u complete this course",
        "date": "2022-05-22T05:38:33.665Z",
        "__v": 0
      }
   ]
    const [notes, setnotes] = useState(notesInital)
    
    
    //AddNote
    const addNote=(title,description,tag)=>{
      console.log("adding a new note");
      const note={
        "_id": "6289cac59ea4ade85ef58964fc8",
        "user": "6288b611av1c823a413923ccd",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-05-22T05:38:33.665Z",
        "__v": 0
      };
      setnotes(notes.concat(note));
    }
    //DeleteNote
    const deleteNote=(id)=>{
        const newNote= notes.filter((note)=>{return note._id!==id})
        setnotes(newNote)
    }
    //EditNote
    const editNote=()=>{}


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;