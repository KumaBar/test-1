import { useState } from "react"
interface IStyle {
    backgroundColor: string,
    color: string
}
export const Button = () => {
    const [textButton, setTextButton] = useState("изменить стиль")
    const [styleButton, setStyleButton] = useState<IStyle>({
        backgroundColor: "gray",
        color: "black"
    })
    function handleClick(e: React.MouseEvent<HTMLElement>) {
        setTextButton("готово")
        setStyleButton({
            backgroundColor: "black",
            color: "white"
        })
    }
    return (
        <button style={styleButton} onClick={handleClick} >{textButton}</button>
    )
}