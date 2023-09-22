import React, {useState} from 'react';
import Button from "../button";
import { FaTrashAlt } from "react-icons/fa";

function RowItem({ item, handelDelete }) {
    const [status, setStatus] = useState(item.completed)

    const handelStatus = () => {
        if (item.completed === false) {
            setStatus(true)
        }

    }

    return (
        <tr key={item.id}>
            <td className="w-33">{item.title}</td>
            <td><Button onclick={handelStatus} className={status ? "bg-green" : "bg-red"} text={status ? "Completed" : "Pending"} /> </td>
            <td onClick={handelDelete}><FaTrashAlt color={"#e63946"} cursor={"pointer"}  /></td>
        </tr>
    );
}

export default RowItem;