
// componenets
import Header from "./header";
import PlayerBtns from "./playerBtns";
import Progress from "./progress";
import SongInfo from "./songInfo";

// assets
import { Musics } from "../../assets/musics";
import { useState, useRef, EventHandler } from "react";


const Player : React.FC = () => {

    const playBtn = useRef<HTMLAudioElement>(null);
    const [musics, setMusics] = useState(Musics);
    const [currentMusic, setCurrentMusic] = useState(Musics[0]);
    const [musicTime, setMusicTime] = useState({
        duration : null,
        currentTime : null
    })

    const timeUpdateHandler = (e : any) => {
        console.log(e)
        let duration = e.target.duration
        let currentTime = e.target.currentTime
        setMusicTime({...musicTime, duration, currentTime})
    }

    return (
        <div className={"grid-col-9 relative text-white flex flex-col items-center"}>
            <Header text="پخش کننده موسیقی" />
            <SongInfo currentMusic={currentMusic}  />
            <Progress width="w-1/3" duration={musicTime.duration} currentTime={musicTime.currentTime} />
            <PlayerBtns currentMusic={currentMusic} audioTag={playBtn}/>
            <audio onTimeUpdate={timeUpdateHandler} ref={playBtn} src={currentMusic.src} >
                
            </audio>
        </div>
    )
}

export default Player;