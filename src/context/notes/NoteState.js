import { useState } from "react";
import NoteContext from "./noteContext"; 


const NoteState=(props)=>{
    const s1={
        "name":"ashwin",
        "class":"ECM"
    }
    const [state, setstate] = useState(s1)
    const update=()=>{

        setTimeout(() => {
            setstate({
                "name":"Larry",
                "class":"ECE"
            })
        }, 1000);
    }
    
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;