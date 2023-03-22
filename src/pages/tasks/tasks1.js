import * as React from "react";
import {Link} from "react-router-dom";

export const Tasks1 = ()=>{
    return (
        <div className="container-xl">
            <Link className="w-[100%]" to={`/tasks1/${1}`} >
            <div className="rounded-lg shadow-inner bg-slate-50 w-[100%] h-[100px] p-[20px] m-[20px] flex justify-center items-center">
                <p className="text-center text-lg">25 gr natriy oksidinin’  (Na2O)  mug’darin tabin’?</p>
            </div>
            </Link>

        </div>
    );
}