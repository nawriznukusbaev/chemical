import {Link, useNavigate} from "react-router-dom";
import * as React from "react";
import fon from "../../layout/fon.jpg";

export const TaskListOne = ()=>{
    const navigate=useNavigate();
    const goBack=()=>navigate(-1);
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center" style={{ backgroundImage:`url(${fon})`, backgroundSize:'cover'}}>
            <div className="container-xl w-[100%] flex flex-row"> <button onClick={goBack} className="py-[10px] px-[25px]  m-[15px] bg-sky-300">Назад</button></div>
            <p className="text-center text-2xl"> Birikpe quramindaǵi atom, molekula sanın, moldi tabiw boyinsha máseleler</p>
     <div className="rounded-lg shadow-inner bg-slate-50 w-[600px] h-[300px] p-[20px]  flex flex-col  justify-center mb-[10px]">
    <p>1. Másele tekstin diqqat penen oqiń hám oniń mánisin túsiniwge háreket etiń,</p>
<p>2. Másele shártin jaziń, </p>
<p>3. Berilgen birikpeniń molekulyar massasin esaplań,</p>
<p>4.Máselede berilgen zattiń massasi, moli, atom, molekula sani hám molekulyar massasi tiykarinda ápiwayi proporciya dúziń,  </p>
<p>5. Proportsiyani sheshiń  </p>
<p>6. Máseleniń sheshimi.  </p>
    </div>       
    
    <div className="flex flex-col">
                <div className="flex flex-row mb-[30px]">
                    <Link to={'/tasks1/category1'}>
                        <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] m-[20px] flex justify-center items-center">
                            <p className="text-center text-lg">Oksidler</p>
                        </div>
                    </Link>
                    <Link to={'/tasks1/category2'}>
                        <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] m-[20px] flex justify-center items-center">
                            <p className="text-center text-lg">Kislotalar</p>

                        </div>
                    </Link>
                </div>
                <div className="flex flex-row">
                    <Link to={'/tasks1/category3'}>
                        <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] mx-[20px] flex justify-center items-center">
                            <p className="text-center text-lg">Tiykarlar</p>
                        </div>
                    </Link>
                    <Link to={'/tasks1/category4'}>
                        <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] mx-[20px] flex justify-center items-center">
                            <p className="text-center text-lg">Duzlar</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
