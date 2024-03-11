import { useState } from "react";


export const CurrentYear = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        setCurrentYear(new Date().getFullYear());
    }
    return (
        <div>
            <div>{currentYear}</div>
            <button onClick={handleClick}>установить текущий год</button>
        </div>
    )
}