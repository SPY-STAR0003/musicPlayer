import { useAppSelector } from "../../hooks/redux"

interface MusicProps {
    name : string,
    src: string,
    artist : string,
    cover : string
}

interface SongInfoProps {
    currentMusic : MusicProps
}

const SongInfo : React.FC<SongInfoProps> = ({currentMusic}) => {

    const isPlaying = useAppSelector(state => state.player.isPlaying)

    return (
        <>
            {
                currentMusic.cover
                ? <img className={"fixed top-0 left-0 w-full h-full blur-md brightness-50 -z-50"} src={currentMusic.cover} alt={""} />
                : null
            }
            <div className={`relative group flex items-center justify-center rounded-full w-72 h-72 mb-4`}>
                <div className={`${isPlaying && "animate-ping"} absolute border-2 w-full h-full rounded-full`}></div>
                <img className={`group-hover:scale-125 z-10 rounded-full border-2 transition`} src={currentMusic.cover} alt={currentMusic.name} />
            </div>
            <div className={"font-semibold text-xl mt-2"}>
                <p> {currentMusic.name} </p>
            </div>
            <div className={"font-light text-base my-3"}>
                <p> {currentMusic.artist} </p>
            </div>
        </>
    )
}

export default SongInfo;