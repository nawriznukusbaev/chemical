import './App.css';
import React from 'react';
import {Routes, Route,redirect} from "react-router-dom";
import Layout from "./pages/layout";
import Homepage from "./pages/homepage";
import NotFound from "./pages/404";

import Cart from "./components/cart";

import {Product} from "./components/product/product";
import {Tasks1} from "./pages/tasks/tasks1";
import {Task1} from "./pages/task/task1";
import {Tasks2} from "./pages/tasks/tasks2";
import {Tasks3} from "./pages/tasks/tasks3";
import {Tasks4} from "./pages/tasks/tasks4";
import {TaskListOne} from "./pages/task/task1/task";
import {TaskListTwo} from "./pages/task/task2/task";
import {TaskListFour} from "./pages/task/task4/task";
import {TaskListThree} from "./pages/task/task3/task";
import {TaskOneCategory1} from "./pages/task/task1/category1";
import {TaskOneCategory2} from "./pages/task/task1/category2";
import {TaskOneCategory4} from "./pages/task/task1/categroy4";
import {TaskOneCategory3} from "./pages/task/task1/category3";
import {TaskOneTask} from "./pages/task/task1/task1";
import {TaskOneTaskTwo, TaskTwoTask} from "./pages/task/task1/task2";
import {TaskTwoCategory1} from "./pages/task/task2/category1";
import {TaskThreeTaskOne} from "./pages/task/task3/task1";
import {TasFourTaskOne} from "./pages/task/task4/task1";
import {TaskFourCategory1} from "./pages/task/task4/category1";
import {TaskTwoTaskOne} from "./pages/task/task2/task1";
import {TaskTwoTaskTwo} from "./pages/task/task2/task2";
import {TaskTwoCategory2} from "./pages/task/task2/category2";
import {TaskThreeCategory2} from "./pages/task/task3/category2";
import {TaskThreeTaskTwo} from "./pages/task/task3/task2";
import {TaskFourCategory2} from "./pages/task/task4/category2";
import {TaskFourTaskTwo} from "./pages/task/task4/task2";
import {TaskOneTaskThree} from "./pages/task/task1/task3";
import {TaskTwoCategory3} from "./pages/task/task2/category3";
import {TaskTwoTaskThree} from "./pages/task/task2/task3";
import {TaskThreeCategory3} from "./pages/task/task3/category3";
import {TaskThreeTaskThree} from "./pages/task/task3/Task3";
import {TaskFourCategory3} from "./pages/task/task4/category3";
import {TaskFourTaskThree} from "./pages/task/task4/task3";
import {TaskOneTaskFour} from "./pages/task/task1/task4";
import {TaskTwoCategory4} from "./pages/task/task2/categroy4";
import {TaskTwoTaskFour} from "./pages/task/task2/task4";

const App = () => {
    return (
        <Routes>
                    <Route path="/" element={<Layout/>}/>
                        <Route path="/tasks1/" element={<TaskListOne/>}/>
                        <Route path="/tasks2/" element={<TaskListTwo/>}/>
                        <Route path="/tasks3/" element={<TaskListThree/>}/>
                        <Route path="/tasks4/" element={<TaskListFour/>}/>
                        <Route path="/tasks1/category1" element={<TaskOneCategory1/>}/>
                        <Route path="/tasks1/category1/:data_id" element={<TaskOneTask/>}/>
                        <Route path="/tasks1/category2" element={<TaskOneCategory2/>}/>
                        <Route path="/tasks1/category2/:data_id" element={<TaskOneTaskTwo/>}/>
                        <Route path="/tasks1/category3" element={<TaskOneCategory3/>}/>
                        <Route path="/tasks1/category3/:data_id" element={<TaskOneTaskThree/>}/>
                        <Route path="/tasks1/category4" element={<TaskOneCategory4/>}/>
                        <Route path="/tasks1/category4/:data_id" element={<TaskOneTaskFour/>}/>
                        <Route path="/tasks2/category1" element={<TaskTwoCategory1/>}/>
                        <Route path="/tasks2/category2" element={<TaskTwoCategory2/>}/>
                        <Route path="/tasks2/category3" element={<TaskTwoCategory3/>}/>
                        <Route path="/tasks2/category4" element={<TaskTwoCategory4/>}/>
                         <Route path="/tasks2/category1/:data_id" element={<TaskTwoTaskOne/>}/>
                         <Route path="/tasks2/category2/:data_id" element={<TaskTwoTaskTwo/>}/>
                         <Route path="/tasks2/category3/:data_id" element={<TaskTwoTaskThree/>}/>
                         <Route path="/tasks2/category4/:data_id" element={<TaskTwoTaskFour/>}/>
                        <Route path="/tasks3/category1" element={<TaskTwoCategory1/>}/>
                        <Route path="/tasks3/category1/:data_id" element={<TaskThreeTaskOne/>}/>
                        <Route path="/tasks3/category2" element={<TaskThreeCategory2/>}/>
                        <Route path="/tasks3/category2/:data_id" element={<TaskThreeTaskTwo/>}/>
                        <Route path="/tasks3/category3" element={<TaskThreeCategory3/>}/>
                        <Route path="/tasks3/category3/:data_id" element={<TaskThreeTaskThree/>}/>
                        <Route path="/tasks3/category4" element={<TaskOneCategory4/>}/>
                        <Route path="/tasks3/category4/:data_id" element={<TaskOneCategory1/>}/>
                        <Route path="/tasks4/category1" element={<TaskFourCategory1/>}/>
                        <Route path="/tasks4/category1/:data_id" element={<TasFourTaskOne/>}/>
                        <Route path="/tasks4/category2" element={<TaskFourCategory2/>}/>
                        <Route path="/tasks4/category2/:data_id" element={<TaskFourTaskTwo/>}/>
                        <Route path="/tasks4/category3" element={<TaskFourCategory3/>}/>
                        <Route path="/tasks4/category3/:data_id" element={<TaskFourTaskThree/>}/>
                        <Route path="/tasks4/category4" element={<TaskOneCategory4/>}/>
                        <Route path="/tasks4/category4/:data_id" element={<TaskOneCategory1/>}/>
            <Route path='*' element={<NotFound/>}/>

                    </Routes>

    )
}

export default App
