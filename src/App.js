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


const App = () => {
    return (
        <Routes>
                    <Route path="/" element={<Layout/>}/>
                        <Route path="/tasks1" element={<Tasks1/>}/>
                        <Route path="/tasks1/:id" element={<Task1/>}/>
                        <Route path='*' element={<NotFound/>}/>

                    </Routes>

    )
}

export default App
