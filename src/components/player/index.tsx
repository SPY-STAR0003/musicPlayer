
// componenets
import Header from "./header";
import PlayerBtns from "./playerBtns";
import Progress from "./progress";
import SongInfo from "./songInfo";

// assets
import { Musics, MusicsProps } from "../../assets/musics";
import { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setCurrentMusic, setIsPlaying } from "../../store/slices/player";


const Player : React.FC = () => {

    const playBtn = useRef<HTMLAudioElement>(null);
    const [musicTime, setMusicTime] = useState({
        duration : null,
        currentTime : null,
    })
    const [progressBarWidth, setProgressBarWidth] = useState<string>("")

    const {isPlaying, currentMusic} = useAppSelector(state => state.player)
    const dispatch = useAppDispatch()

    const timeUpdateHandler = (e : any) => {

        let duration = e.target.duration
        let currentTime = e.target.currentTime
        setMusicTime({...musicTime, duration, currentTime})

        if (duration === currentTime) {
            const musicIndex : number = Musics.findIndex((item : MusicsProps) => item.id === currentMusic.id)

            musicIndex === Musics.length - 1
            ? dispatch(setCurrentMusic(Musics[0]))
            : dispatch(setCurrentMusic(Musics[musicIndex + 1]))

            if (isPlaying) {
                playBtn.current?.setAttribute("autoplay", "autoplay")
            } else {
                playBtn.current?.removeAttribute("autoplay")
            }
        }

        setProgressBarWidth(`${currentTime/duration * 100}%`)
    }

    return (
        <div className={"relative w-full h-screen text-white flex flex-col items-center justify-center"}>
            {/* <Header text="پخش کننده موسیقی" /> */}
            <SongInfo />
            <Progress width={progressBarWidth} duration={musicTime.duration} currentTime={musicTime.currentTime} audioTag={playBtn} />
            <PlayerBtns audioTag={playBtn}/>
            <audio 
                onLoadedMetadata={timeUpdateHandler} 
                onTimeUpdate={timeUpdateHandler} 
                ref={playBtn} 
                src={currentMusic.src}
            ></audio>
        </div>
    )
}

export default Player;