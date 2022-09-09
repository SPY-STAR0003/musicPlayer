// libraries
import PN from "persian-number";

interface ProgressProps {
    width: string,
    currentTime : string | null,
    duration : string | null,
}

const Progress : React.FC<ProgressProps> = ({width, currentTime, duration}) => {

    const timeFormatter = (value : string|null) => {
        let time = Number(value)
        let minutes = Math.floor(time/60)
        let seconds = Math.floor(time - Math.floor(minutes*60))
        return `${minutes > 9 ? PN.convertEnToPe(minutes) : `${PN.convertEnToPe(0)}${PN.convertEnToPe(minutes)}`} : ${seconds > 9 ? PN.convertEnToPe(seconds) : `${PN.convertEnToPe(0)}${PN.convertEnToPe(seconds)}`}`
    }

    return (
        <div className={"flex items-center space-x-reverse space-x-4"}>
            <span dir="ltr">
                {timeFormatter(duration)}
            </span>
            <div className={"flex relative w-96 h-4 bg-slate-100 items-center rounded-md transition hover:scale-y-[1.1] cursor-pointer"}>
                <div className={`absolute left-0 top-0 ${width} h-full bg-sky-300 rounded-md`}></div>
            </div>
            <span dir="ltr">
                {timeFormatter(currentTime)}
            </span>
        </div>
    )
}

export default Progress;





