
// react
import { Menu } from "../../assets/icons/reactIconly";


interface ShowPlayListBtnProps {
    setShowPlayList : any,
    showPlayList : boolean
}

const ShowPlayListBtn : React.FC<ShowPlayListBtnProps> = ({setShowPlayList, showPlayList}) => {

    return (
        <button onClick={() => setShowPlayList(!showPlayList)} className={`transition text-sm fixed flex items-center right-0 top-0 mt-12 mr-24 py-2 px-3 h-auto rounded-2xl space-y-3 text-white bg-stone-800/90 overflow-auto-scroll`}>
            <Menu classes="w-8 h-8 ml-2" color="white" />
            لیست پخش
        </button>
    )
}

export default ShowPlayListBtn;