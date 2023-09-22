import React, {useEffect, useState} from 'react';
import InputCard from "../../components/input card";
import TodosCard from "../../components/todos card/TodosCard";
import axios from "axios";

function HomePage(props) {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    console.log(value,"value");
    const fetchData  = async () =>  {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
            setData(response.data.slice(0, 30))
        } catch (e) {
            console.log(e, "e")
        }

    }

    useEffect(() => {
        fetchData();
    } , [])

    return (
        <div>
            <h1>ToDo List</h1>
            <InputCard value={value} setData={setData} data={data} setValue={setValue} />
            <TodosCard data={data} setData={setData}  />
        </div>
    );
}

export default HomePage;