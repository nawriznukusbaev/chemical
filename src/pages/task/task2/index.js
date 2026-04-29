import {Link, useNavigate} from "react-router-dom";
import * as React from "react";
import fon from "../../layout/fon.jpg";

export const TaskList2 = ()=>{
    const navigate=useNavigate();
    const goBack=()=>navigate(-1);
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center" style={{ backgroundImage:`url(${fon})`, backgroundSize:'cover'}}>
            <div className="container-xl w-[100%] flex flex-row"> <button onClick={goBack} className="py-[10px] px-[25px]  m-[15px] bg-slate-100">Назад</button></div>
            <Link className="w-[100%]" to={`/task/${1}`} >
                <div className="rounded-lg shadow-inner bg-slate-50 w-[100%] h-[100px] p-[20px] m-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Oksidler</p>
                </div>
            </Link>
            <Link className="w-[100%]" to={`/task/${2}`} >
                <div className="rounded-lg shadow-inner bg-slate-50 w-[100%] h-[100px] p-[20px] m-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Kislotalar</p>
                </div>
            </Link>
            <Link className="w-[100%]" to={`/task/${3}`} >
                <div className="rounded-lg shadow-inner bg-slate-50 w-[100%] h-[100px] p-[20px] m-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Tiykarlar</p>
                </div>
            </Link>
            <Link className="w-[100%]" to={`/task/${4}`} >
                <div className="rounded-lg shadow-inner bg-slate-50 w-[100%] h-[100px] p-[20px] m-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Duzlar</p>
                </div>
            </Link>

        </div>
    );
}