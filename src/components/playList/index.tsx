
// react
import {useState} from "react";

// assets
import { Musics, MusicsProps } from "../../assets/musics";

const PlayList : React.FC = () => {

    const [showPlayList, setShowPlayList] = useState<boolean>(false)

    return (
        <div onMouseLeave={() => setShowPlayList(false)} onMouseEnter={() => setShowPlayList(true)} className={`${showPlayList?"w-1/5":"w-1/12"} transition fixed left-0 top-0 m-12 p-2 h-auto rounded-2xl space-y-3 text-white bg-stone-900 overflow-y-auto`}>
            {
                Musics.map((item : MusicsProps , index : number) => {
                    return (
                        <div className={`flex items-center justify-between p-4 rounded-2xl hover:bg-stone-700 transition cursor-pointer`} key={index}>
                            <div className={`${showPlayList&&"w-1/3"}`}>
                                <img className={`rounded-full`} src={item.cover} alt={item.name} />
                            </div>
                            <div className={`${!showPlayList&&"hidden"} animate-showToRight w-2/3 p-2 pr-6 space-y-1`}>
                                <p className={`text-lg font-semibold`}> {item.name} </p>
                                <p className={`text-sm text-gray-300`}> {item.artist} </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PlayList;