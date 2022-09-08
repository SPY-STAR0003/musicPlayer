import { LeftChevron, RightChevron } from "../../assets/icons/reactIconly";


const Player : React.FC = () => {

    return (
        <div className={"grid-col-9 flex flex-col items-center"}>
            <h1 className={"text-3xl font-bold p-8"}> پخش کننده موسیقی </h1>
            <div className="flex items-center justify-center rounded-full border-2 w-72 h-72 mb-4">
                {/* <img src={} alt={} /> */}
                <p> Picture Album </p>
            </div>
            <div className={"font-semibold text-xl mt-2"}>
                <p> Song Name </p>
            </div>
            <div className={"font-light text-base my-3"}>
                <p> Artist </p>
            </div>
            <div className={"flex items-center space-x-reverse space-x-4"}>
                <span>
                    زمان پایان
                </span>
                <div className={"flex relative w-96 h-4 bg-slate-100 items-center rounded-md transition hover:scale-y-[1.1] cursor-pointer"}>
                    <div className="absolute left-0 top-0 w-1/3 h-full bg-sky-300 rounded-md"></div>
                </div>
                <span>
                    زمان شروع
                </span>
            </div>
            <div className={"flex space-x-reverse space-x-6 items-center my-4"}>
                <div>
                    <RightChevron classes={"w-8 h-8 hover:scale-[1.2] cursor-pointer transition"} />
                </div>
                <div className={"border-4 rounded-full border-gray-300 transition hover:scale-[1.1] cursor-pointer"}>
                    <RightChevron classes={"w-16 h-16"} />
                </div>
                <div>
                    <LeftChevron classes={"w-8 h-8 hover:scale-[1.2] cursor-pointer transition"} />
                </div>
            </div>
        </div>
    )
}

export default Player;