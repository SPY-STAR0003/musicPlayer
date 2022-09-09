
interface HeaderProps {
    text: string
}

const Header : React.FC<HeaderProps> = ({text}) => {

    return (
        <h1 className={"text-3xl font-bold p-8"}> {text} </h1>
    )
}

export default Header;