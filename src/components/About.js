import React,{useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext' //here we are using context which we can directly change the state  and example is below

const About = () => {
    const a=useContext(noteContext)
    useEffect(() => {
        a.update();
        // eslint-disable-next-line 
    }, [])
    
  return (
    <div>This is about {a.state.name} and he is in Class {a.state.class}</div>
  )
}

export default About