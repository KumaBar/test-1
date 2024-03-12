import { useEffect, useState } from "react";


export const CurrentYear = () => {
    const [currentYear, setCurrentYear] = useState(0);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear() - 1)
    }, [])
    function handleClick(e: React.MouseEvent<HTMLElement>) {
        setCurrentYear(new Date().getFullYear());
    }
    return (
        <div>
            <div>текущий год: {currentYear}</div>
            <button onClick={handleClick}>установить текущий год</button>
        </div>
    )
}