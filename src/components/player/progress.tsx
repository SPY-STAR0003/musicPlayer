
interface ProgressProps {
    width: string,
}

const Progress : React.FC<ProgressProps> = ({width}) => {

    return (
        <div className={"flex items-center space-x-reverse space-x-4"}>
            <span>
                زمان پایان
            </span>
            <div className={"flex relative w-96 h-4 bg-slate-100 items-center rounded-md transition hover:scale-y-[1.1] cursor-pointer"}>
                <div className={`absolute left-0 top-0 ${width} h-full bg-sky-300 rounded-md`}></div>
            </div>
            <span>
                زمان شروع
            </span>
        </div>
    )
}

export default Progress;





