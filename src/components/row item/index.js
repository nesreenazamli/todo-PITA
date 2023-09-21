import React from 'react';
import Button from "../button";
import { FaTrashAlt } from "react-icons/fa";

function RowItem() {
    return (
        <tr>
            <td>test</td>
            <td><Button className={"bg-green"} text={"11111"} /> </td>
            <td><FaTrashAlt color={"#e63946"} cursor={"pointer"} /></td>

        </tr>
    );
}

export default RowItem;