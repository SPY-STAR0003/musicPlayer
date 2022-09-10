
// react
import {useState} from "react";

// assets
import { Musics, MusicsProps } from "../../assets/musics";
import PlayListItem from "./playListItem";

interface PlayListItemProps {
    setShowPlayList : any,
    showPlayList : boolean
}

const PlayListItems : React.FC<PlayListItemProps> = ({setShowPlayList, showPlayList}) => {

    const [showPlayListInfo, setShowPlayListInfo] = useState<boolean>(false)

    const mouseLeaveHandler = () => {
        if (window.innerWidth > 1024) {
            setShowPlayListInfo(!showPlayListInfo)
        }
    }

    return (
        <div
        onMouseLeave={mouseLeaveHandler} 
        onMouseEnter={mouseLeaveHandler} 
        className={`
            ${showPlayListInfo?"xl:w-1/5 lg:w-1/4 lg:rounded-2xl":"xl:w-1/12 lg:w-[11%] lg:rounded-full"}
            animate-showToRight transition fixed left-0 top-0 lg:m-12 p-2 z-50
            h-full lg:h-auto w-full space-y-3 text-white lg:bg-stone-900/50 bg-stone-900 overflow-y-auto
        `}>
            <div onClick={() => setShowPlayList(false)} className={"lg:hidden fixed bottom-0 left-0 w-full h-12 flex items-center justify-center bg-stone-800 cursor-pointer"}>
                <span className="text-lg font-bold left-0">
                    بستن لیست پخش
                </span>
            </div>
            {
                Musics.map((item : MusicsProps, index : number) => {
                    return (
                        <PlayListItem
                            key={index}
                            showPlayListInfo={showPlayListInfo}
                            item={item}
                        />
                    )
                })
            }
        </div>
    )
}

export default PlayListItems;