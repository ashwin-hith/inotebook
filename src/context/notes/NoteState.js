import { useState } from "react";
import NoteContext from "./noteContext"; 


const NoteState=(props)=>{
   const notesInital=[
    {
        "_id": "628937123dd5e41967176389",
        "user": "6288b611a1c823a413923ccd",
        "title": "My Title",
        "description": "i want to fix this bug",
        "tag": "this is about dabba programming",
        "date": "2022-05-21T19:01:38.465Z",
        "__v": 0
      },
      {
        "_id": "6289cc59ea4e85ef58964fc8",
        "user": "6288b611a1c823a413923ccd",
        "title": "python ",
        "description": "lets learn python programming in 30 minutes",
        "tag": "you will master python once u complete this course",
        "date": "2022-05-22T05:38:33.665Z",
        "__v": 0
      },
      {
        "_id": "6289cc59ea4e85ef58964fc8",
        "user": "6288b611a1c823a413923ccd",
        "title": "My Title",
        "description": "lets learn python programming in 30 minutes",
        "tag": "you will master python once u complete this course",
        "date": "2022-05-22T05:38:33.665Z",
        "__v": 0
      },
      {
        "_id": "6289cc59ea4e85ef58964fc8",
        "user": "6288b611a1c823a413923ccd",
        "title": "programming",
        "description": "lets learn python programming in 30 minutes",
        "tag": "you will master python once u complete this course",
        "date": "2022-05-22T05:38:33.665Z",
        "__v": 0
      },
      {
        "_id": "6289cc59ea4e85ef58964fc8",
        "user": "6288b611a1c823a413923ccd",
        "title": "My Title",
        "description": "lets learn python programming in 30 minutes",
        "tag": "you will master python once u complete this course",
        "date": "2022-05-22T05:38:33.665Z",
        "__v": 0
      }
   ]
    const [notes, setnotes] = useState(notesInital)
    return(
        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;