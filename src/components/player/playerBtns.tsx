
// assets
import { LeftChevron, RightChevron } from "../../assets/icons/reactIconly";

// react
import { RefObject } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setIsPlaying } from "../../store/slices/player";
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

    return (
        <div className={"flex space-x-reverse space-x-6 items-center my-4"}>
            <div>
                <RightChevron color="white" classes={"w-8 h-8 hover:scale-[1.2] cursor-pointer transition"} />
            </div>
            <div onClick={startMusic} className={"border-4 rounded-full border-gray-300 transition hover:scale-[1.1] cursor-pointer"}>
                {
                    isPlaying
                    ? <PauseSvg color="white" classes={"w-8 h-8 m-4"} />
                    : <RightChevron color="white" classes={"w-16 h-16"} />
                }
            </div>
            <div>
                <LeftChevron color="white" classes={"w-8 h-8 hover:scale-[1.2] cursor-pointer transition"} />
            </div>
        </div>
    )
}

export default PlayerBtns;

