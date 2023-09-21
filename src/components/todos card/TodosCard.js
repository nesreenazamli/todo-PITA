import React from 'react';
import RowItem from "../row item";
import "./style.css"

function TodosCard() {
    return (
        <div className="card todo-card">
           <h2>
               Todo list
           </h2>
            <table>
                <tr>
                    <th>List</th>
                    <th>Status</th>
                    <th>Close</th>
                </tr>
             <RowItem test />
             <RowItem />
             <RowItem test />
             <RowItem />
             <RowItem />
            </table>
        </div>
    );
}

export default TodosCard;