
import { DVD } from './DVD';
import audio from './hongKong97.mp3'
function App() {
  return (
    <div>
      <audio src={audio} autoplay></audio>
      <DVD />
    </div>
  );
}

export default App;
