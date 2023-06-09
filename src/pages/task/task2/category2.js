import {Link, useNavigate} from "react-router-dom";
import * as React from "react";
import fon from "../../layout/fon.jpg";
import {datas6} from "../../../datas";
import {TaskOneTask} from "./task1";
import parse from "html-react-parser";
export const TaskTwoCategory2 = ()=>{
    const navigate=useNavigate();
    const goBack=()=>navigate(-1);
    const parse = require('html-react-parser');
    return (
        <div className="container-xl h-[100%] flex flex-col justify-center items-center" >
            <div className="container-xl h-[100%] flex flex-col justify-center items-center" >
                <div className="container-xl w-[100%] flex flex-row"> <button onClick={goBack} className="py-[10px] px-[25px]  m-[15px] bg-slate-100">Назад</button></div>{
                datas6.map((item,index)=>{
                    return <Link  className="rounded-lg shadow-inner bg-slate-50 w-[100%] h-[100px]
                            p-[20px] m-[20px] flex justify-start items-center" key={item} to={`/tasks2/category2/${item.id}/`}>
                        <p className="text-center text-lg">{parse(`${item.task}`)}</p>
                    </Link>
                })

            }
        </div></div>
    );
}