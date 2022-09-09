
// assets
import { LeftChevron, RightChevron } from "../../assets/icons/reactIconly";


interface PlayerBtnsProps {
}

const PlayerBtns : React.FC<PlayerBtnsProps> = () => {

    return (
        <div className={"flex space-x-reverse space-x-6 items-center my-4"}>
            <div>
                <RightChevron color="white" classes={"w-8 h-8 hover:scale-[1.2] cursor-pointer transition"} />
            </div>
            <div className={"border-4 rounded-full border-gray-300 transition hover:scale-[1.1] cursor-pointer"}>
                <RightChevron color="white" classes={"w-16 h-16"} />
            </div>
            <div>
                <LeftChevron color="white" classes={"w-8 h-8 hover:scale-[1.2] cursor-pointer transition"} />
            </div>
        </div>
    )
}

export default PlayerBtns;

