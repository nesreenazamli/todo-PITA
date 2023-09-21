import React from 'react';
import InputCard from "../../components/input card";
import TodosCard from "../../components/todos card/TodosCard";

function HomePage(props) {
    return (
        <div>
            <h1>ToDo List</h1>
            <InputCard/>
            <TodosCard/>
        </div>
    );
}

export default HomePage;