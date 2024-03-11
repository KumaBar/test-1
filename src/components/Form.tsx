import { useState } from "react"
import { ChildForm } from "./ChildForm"
import { IUserData } from "../types"

export const Form = () => {
    const [userName, setUserName] = useState("")
    const [userAge, setUserAge] = useState(0)
    const [userData, setUserData] = useState<IUserData>({
        name: "",
        age: 0
    })
    function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        setUserName(e.target.value)
    }
    function handleChangeAge(e: React.ChangeEvent<HTMLInputElement>) {
        setUserAge(parseInt(e.target.value))
    }
    function hanbldeSubmit(e: React.FormEvent) {
        e.preventDefault()
        setUserData({
            name: userName,
            age: userAge
        })
    }
    return (
        <div>
            <form onSubmit={hanbldeSubmit}>
                <input type="text" name="userName" placeholder="name" onChange={handleChangeName} />
                <input type="number" name="userAge" placeholder="age" onChange={handleChangeAge} />
                <button>Отправить</button>
            </form>
            <ChildForm {...userData} />
        </div>
    )
}