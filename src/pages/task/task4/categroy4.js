import {Link} from "react-router-dom";
import * as React from "react";

export const TaskOneCategory4= ()=>{
    return (
        <div className="container-xl flex justify-center items-center">
            <Link className="w-[100%]" to={`/tasks1/tasklist/category1/`} >
                <div className="rounded-lg shadow-inner bg-slate-50 w-[100%] h-[100px] p-[20px] m-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Oksidler</p>
                </div>
            </Link>
            <Link className="w-[100%]" to={`/tasks1/tasklist/category2/`} >
                <div className="rounded-lg shadow-inner bg-slate-50 w-[100%] h-[100px] p-[20px] m-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Kislotalar</p>
                </div>
            </Link>
            <Link className="w-[100%]" to={`/tasks1/tasklist/category3/`} >
                <div className="rounded-lg shadow-inner bg-slate-50 w-[100%] h-[100px] p-[20px] m-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Tiykarlar</p>
                </div>
            </Link>
            <Link className="w-[100%]" to={`/tasks1/tasklist/category4/`} >
                <div className="rounded-lg shadow-inner bg-slate-50 w-[100%] h-[100px] p-[20px] m-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Duzlar</p>
                </div>
            </Link>

        </div>
    );
}