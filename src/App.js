
import { useEffect, useState } from 'react';
import { DVD } from './DVD';
import audio from './hongKong97.mp3'
function App() {
  const [cancion,setCancion]=useState(null)
  const [click, setClick]=useState(false)
  useEffect(()=>{
    const aux=document.getElementById("audio")
    setCancion(aux)
  },[cancion])
  function play(){
    cancion?.play()
    setClick(true)
  }
  return (
    <div onClick={play}>
      <audio style={{display:"none"}}id="audio" src={audio} controls></audio>
      <DVD click={click}/>
      
    </div>
  );
}

export default App;
