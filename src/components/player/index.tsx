
// componenets
import Header from "./header";
import PlayerBtns from "./playerBtns";
import Progress from "./progress";
import SongInfo from "./songInfo";

// assets
import { Musics } from "../../assets/musics";
import { useState } from "react";


const Player : React.FC = () => {

    const [musics, setMusics] = useState(Musics)
    const [currentMusic, setCurrentMusic] = useState(Musics[0])

    return (
        <div className={"grid-col-9 relative text-white flex flex-col items-center"}>
            <Header text="پخش کننده موسیقی" />
            <SongInfo currentMusic={currentMusic}  />
            <Progress width="w-1/3" />
            <PlayerBtns />
        </div>
    )
}

export default Player;