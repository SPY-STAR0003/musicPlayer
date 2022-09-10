// libraries
import PN from "persian-number";

interface ProgressProps {
    width: string,
    currentTime : string | null,
    duration : string | null,
    audioTag : any
}

const Progress : React.FC<ProgressProps> = ({width, currentTime, duration, audioTag}) => {

    const timeFormatter = (value : string|null) => {
        let time = Number(value)
        let minutes = Math.floor(time/60)
        let seconds = Math.floor(time - Math.floor(minutes*60))
        return `${minutes > 9 ? PN.convertEnToPe(minutes) : `${PN.convertEnToPe(0)}${PN.convertEnToPe(minutes)}`} : ${seconds > 9 ? PN.convertEnToPe(seconds) : `${PN.convertEnToPe(0)}${PN.convertEnToPe(seconds)}`}`
    }

    const increaseTimeHandler = (e : any) => {
        console.log(e.clientX , e.target.offsetLeft, e.target.offsetWidth)
        audioTag.current.currentTime = (e.clientX - e.target.offsetLeft) / e.target.offsetWidth * audioTag.current.duration
    }

    const decreaseTimeHandler = (e : any) => {
        e.stopPropagation();
        audioTag.current.currentTime = (e.clientX - e.target.parentElement.offsetLeft) / e.target.parentElement.offsetWidth * audioTag.current.duration
    }

    return (
        <div className={"flex items-center space-x-reverse space-x-4"}>
            <span dir="ltr">
                {timeFormatter(duration)}
            </span>
            <div id="1" onClick={increaseTimeHandler} className={"flex relative sm:w-96 w-60 h-2 bg-slate-100 z-0 items-center rounded-md transition hover:scale-y-[2] cursor-pointer"}>
                <div id="2" onClick={decreaseTimeHandler} style={{width : width}} className={`absolute left-0 top-0 z-10 h-full bg-stone-600 rounded-md`}></div>
            </div>
            <span dir="ltr">
                {timeFormatter(currentTime)}
            </span>
        </div>
    )
}

export default Progress;





