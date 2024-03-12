import { NavLink } from "react-router-dom"

export const Navigation = () => {

    return (
        <div style={{ display: "flex", justifyContent: "space-between", width: "300px", margin: "0 auto", marginBottom: "20px" }}>
            <NavLink to="/">Год</NavLink>
            <NavLink to="/button">Кнопка</NavLink>
            <NavLink to="/form">Форма</NavLink>
        </div>
    )
}