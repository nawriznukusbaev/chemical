import {Link} from "react-router-dom";
import * as React from "react";
import fon from "../../layout/fon.jpg";
import {datas13} from "../../../datas";
import parse from "html-react-parser";
export const TaskOneCategory4 = ()=>{
    console.log(datas13);
    const parse = require('html-react-parser');
    return (
        <div className="container-xl h-[100%] flex flex-col justify-center items-center" >
            {
                datas13.map((item,index)=>{
                    return <Link  className="rounded-lg shadow-inner bg-slate-50 w-[100%] h-[100px]
                            p-[20px] m-[20px] flex justify-start items-center" key={item} to={`/tasks1/category4/${item.id}/`}>
                        <p className="text-center text-lg">{parse(`${item.task}`)}</p>
                    </Link>
                })

            }
        </div>
    );
}