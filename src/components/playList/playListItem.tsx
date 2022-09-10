import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setCurrentMusic } from "../../store/slices/player";
import { Musics, MusicsProps } from "../../assets/musics";

interface PlayListItemProps {
    item : MusicsProps,
    showPlayListInfo : boolean
}


    const dispatch = useAppDispatch();
    const currentMusic = useAppSelector(state => state.player.currentMusic)

    const changeMusicHandler = (music : MusicsProps) => {
        let filteredMusic = Musics.filter((item : MusicsProps) => item.id === music.id);
        // console.log(filteredMusic[0])
        dispatch(setCurrentMusic(filteredMusic[0]))
    }

    return (
        <div onClick={() => changeMusicHandler(item)} className={`${currentMusic.id === item.id && "bg-stone-600"} flex items-center justify-between p-4 rounded-2xl hover:bg-stone-800 transition cursor-pointer`} key={item.id}>
            <div className={`${showPlayListInfo&&"w-1/3"}`}>
                <img className={`rounded-full`} src={item.cover} alt={item.name} />
            </div>
            <div className={`${!showPlayListInfo&&"hidden"} animate-showToRight w-2/3 p-2 pr-6 space-y-1`}>
                <p className={`text-lg font-semibold`}> {item.name} </p>
                <p className={`text-sm text-gray-300`}> {item.artist} </p>
            </div>
        </div>
    )
}

export default PlayListItem;