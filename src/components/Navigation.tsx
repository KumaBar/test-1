import { NavLink } from "react-router-dom"

export const Navigation = () => {

    return (
        <div>
            <NavLink to="/">Год</NavLink>
            <NavLink to="/button">Кнопка</NavLink>
            <NavLink to="/form">Форма</NavLink>
        </div>
    )
}