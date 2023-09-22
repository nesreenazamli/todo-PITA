import React from 'react';
import RowItem from "../row item";
import "./style.css"
function TodosCard({ data, setData }) {

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
                {data.map((item)=>
                     <RowItem item={item} handelDelete={() => {
                         const filtered = data.filter((el) => el.id !== item.id);
                         setData(filtered)
                     }

                     }  />
                )}
            </table>
        </div>
    );
}

export default TodosCard;