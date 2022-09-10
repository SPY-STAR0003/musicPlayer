import Player from "./player";
import PlayList from "./playList";

const App : React.FC = () => {

  return (
    <div className={"container mx-auto"}>
      <Player />
      <PlayList />
    </div>  
  )
}

export default App;
