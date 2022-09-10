
// assets
import { LeftChevron, RightChevron } from "../../assets/icons/reactIconly";
import { Musics, MusicsProps } from "../../assets/musics";

// react
import { RefObject } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setCurrentMusic, setIsPlaying } from "../../store/slices/player";
import { PauseSvg } from "../../assets/icons/icon";

interface PlayerBtnsProps {
    audioTag : RefObject<HTMLAudioElement>,
}

const PlayerBtns : React.FC<PlayerBtnsProps> = ({audioTag}) => {


    const {isPlaying, currentMusic} = useAppSelector(state => state.player)
    const dispatch = useAppDispatch()

    const startMusic = () => {
        if (isPlaying) {
            audioTag.current?.pause();
            dispatch(setIsPlaying());
        } else {
            audioTag.current?.play();
            dispatch(setIsPlaying());
        }
    }

    const changeSong = async (dir : string) => {
        const musicIndex : number = Musics.findIndex((item : MusicsProps) => item.id === currentMusic.id)

        if (dir === "next") {
            musicIndex === Musics.length - 1
            ? dispatch(setCurrentMusic(Musics[0]))
            : dispatch(setCurrentMusic(Musics[musicIndex + 1]))
        }

        if (dir === "prev") {
            musicIndex === 0
            ? dispatch(setCurrentMusic(Musics[Musics.length - 1]))
            : dispatch(setCurrentMusic(Musics[musicIndex - 1]))
        }

        if (isPlaying) {
            audioTag.current?.setAttribute("autoplay", "autoplay")
        } else {
            audioTag.current?.removeAttribute("autoplay")
        }
    }

    return (
        <div className={"flex space-x-reverse space-x-6 items-center my-4"}>
            <div onClick={() => changeSong("next")}>
                <RightChevron color="white" classes={"w-8 h-8 hover:scale-[1.2] cursor-pointer transition"} />
            </div>
            <div onClick={startMusic} className={"border-4 rounded-full border-gray-300 transition hover:scale-[1.1] cursor-pointer"}>
                {
                    isPlaying
                    ? <PauseSvg color="white" classes={"w-8 h-8 m-4"} />
                    : <RightChevron color="white" classes={"w-16 h-16"} />
                }
            </div>
            <div onClick={() => changeSong("prev")}>
                <LeftChevron color="white" classes={"w-8 h-8 hover:scale-[1.2] cursor-pointer transition"} />
            </div>
        </div>
    )
}

export default PlayerBtns;

