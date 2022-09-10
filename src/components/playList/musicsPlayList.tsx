
// react
import {useState} from "react";

// assets
import { Musics, MusicsProps } from "../../assets/musics";
import PlayListItem from "./playListItem";


const PlayListItems : React.FC = () => {

    const [showPlayListInfo, setShowPlayListInfo] = useState<boolean>(false)

    return (
        <div onMouseLeave={() => setShowPlayListInfo(false)} onMouseEnter={() => setShowPlayListInfo(true)} className={`${showPlayListInfo?"w-1/5 rounded-2xl":"w-1/12 rounded-full"} animate-showToRight transition fixed left-0 top-0 m-12 p-2 h-auto space-y-3 text-white bg-stone-900/50 overflow-auto-scroll`}>
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