
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

    return (
        <>
            {
                currentMusic.cover
                ? <img className={"fixed top-0 left-0 w-full h-full blur-md brightness-50 -z-50"} src={currentMusic.cover} alt={""} />
                : null
            }
            <div className={`flex items-center justify-center rounded-full w-72 h-72 mb-4`}>
                <img className="rounded-full border-2 outline outline-2 outline-offset-2 outline-gray-300 transition hover:scale-105" src={currentMusic.cover} alt={currentMusic.name} />
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