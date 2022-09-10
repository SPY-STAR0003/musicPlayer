
// react
import {useState} from "react";

// assets
import PlayListItems from "./musicsPlayList";
import ShowPlayListBtn from "./showPlayListBtn";


const PlayList : React.FC = () => {

    const [ showPlayList, setShowPlayList ] = useState<boolean>(true)

    return (
        <>
            {
                showPlayList && <PlayListItems setShowPlayList={setShowPlayList} showPlayList={showPlayList} />
            }
            <ShowPlayListBtn setShowPlayList={setShowPlayList} showPlayList={showPlayList} />
        </>
    )
}

export default PlayList;