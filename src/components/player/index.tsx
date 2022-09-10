
// componenets
import Header from "./header";
import PlayerBtns from "./playerBtns";
import Progress from "./progress";
import SongInfo from "./songInfo";

// assets
import { Musics } from "../../assets/musics";
import { useState, useRef } from "react";
import { useAppSelector } from "../../hooks/redux";


const Player : React.FC = () => {

    const playBtn = useRef<HTMLAudioElement>(null);
    const [musics, setMusics] = useState(Musics);
    const [musicTime, setMusicTime] = useState({
        duration : null,
        currentTime : null,
    })
    const [progressBarWidth, setProgressBarWidth] = useState<string>("")

    const currentMusic = useAppSelector(state => state.player.currentMusic)

    const timeUpdateHandler = (e : any) => {
        let duration = e.target.duration
        let currentTime = e.target.currentTime
        setMusicTime({...musicTime, duration, currentTime})
        setProgressBarWidth(`${currentTime/duration * 100}%`)
    }

    return (
        <div className={"grid-col-9 relative text-white flex flex-col items-center"}>
            <Header text="پخش کننده موسیقی" />
            <SongInfo />
            <Progress width={progressBarWidth} duration={musicTime.duration} currentTime={musicTime.currentTime} audioTag={playBtn} />
            <PlayerBtns audioTag={playBtn}/>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={playBtn} src={currentMusic.src} >
                
            </audio>
        </div>
    )
}

export default Player;