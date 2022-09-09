import Player from "./player";
import PlayList from "./playList";

const App : React.FC = () => {

  return (
    <div className={"container"}>
      <Player />
      <PlayList />
    </div>  
  )
}

export default App;
