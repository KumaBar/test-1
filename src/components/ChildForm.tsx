import { IUserData } from "../types"

export const ChildForm: React.FC<IUserData> = ({ name, age }) => {

    return (
        <div>
            <span>{`name:${name} age:${age}`}</span>
        </div>)
}