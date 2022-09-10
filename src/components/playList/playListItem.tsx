import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setCurrentMusic } from "../../store/slices/player";
import { Musics, MusicsProps } from "../../assets/musics";

interface PlayListItemProps {
    item : MusicsProps,
    showPlayListInfo : boolean
}

const PlayListItem : React.FC<PlayListItemProps> = ({item, showPlayListInfo}) => {

    const dispatch = useAppDispatch();
    const currentMusic = useAppSelector(state => state.player.currentMusic)

    const changeMusicHandler = (music : MusicsProps) => {
        let filteredMusic = Musics.filter((item : MusicsProps) => item.id === music.id);
        dispatch(setCurrentMusic(filteredMusic[0]))
    }

    return (
        <div
            key={item.id}
            onClick={() => changeMusicHandler(item)}
            className={`
                ${currentMusic.id === item.id && "bg-stone-600"} 
                ${showPlayListInfo ? "lg:rounded-2xl" : "lg:rounded-full"} 
                flex items-center lg:justify-between p-4 hover:bg-stone-800 transition cursor-pointer
                lg:h-auto h-32
            `}
        >
            <div className={`${showPlayListInfo && "lg:w-1/3"}`}>
                <img className={`rounded-full lg:h-auto lg:w-auto h-24 w-24`} src={item.cover} alt={item.name} />
            </div>
            <div className={`${!showPlayListInfo&&"lg:hidden"} animate-showToRight lg:w-2/3 p-2 pr-6 space-y-1`}>
                <p className={`text-lg font-semibold`}> {item.name} </p>
                <p className={`text-sm text-gray-300`}> {item.artist} </p>
            </div>
        </div>
    )
}

export default PlayListItem;