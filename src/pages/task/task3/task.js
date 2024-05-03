import {Link, useNavigate} from "react-router-dom";
import * as React from "react";
import fon from "../../layout/fon.jpg";

export const TaskListThree = ()=>{
    const navigate=useNavigate();
    const goBack=()=>navigate(-1);
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center" style={{ backgroundImage:`url(${fon})`, backgroundSize:'cover'}}>
            <div className="container-xl w-[100%] flex flex-row"> <button onClick={goBack} className="py-[10px] px-[25px]  m-[15px] bg-sky-300">Назад</button></div>
            <p className="text-center text-2xl">3.Birikpeniń formulasin keltirip shiǵariw</p>
     <div className="rounded-lg shadow-inner bg-slate-50 w-[600px] h-[300px] p-[20px]  flex flex-col  justify-center mb-[10px]">
    <p>1. Másele tekstin diqqat penen oqiń hám oniń mánisin túsiniwge háreket etiń,</p>
<p>2. Másele shártin jaziń,  </p>
<p>3.Esaplaw ushin birikpe massasi 100 gr dep alinadi,</p>
<p>4.Berilgen zat quramindaǵi elementler massa úlesleri tiykarinda málim bir element massasinan paydalanip proporciya duziń</p>
<p>5. Proporciyani sheshiń </p>
<p>6. Alinǵan qatnaslar tiyisli element massasina bólinedi hám olardiń kishi qatnaslari alinadi,  </p>
    <p>7. Kishi qatnaslar tiykarinda birikpe formulasi tabiladi</p>
    <p>8. Máseleniń sheshimi  </p>
    </div> 
            <div className="flex flex-col">
                <div className="flex flex-row mb-[30px]">
                    <Link to={'/tasks3/category1'}>
                        <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] m-[20px] flex justify-center items-center">
                            <p className="text-center text-lg">Oksidler</p>
                        </div>
                    </Link>
                    <Link to={'/tasks3/category2'}>
                        <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] m-[20px] flex justify-center items-center">
                            <p className="text-center text-lg">Kislotalar</p>

                        </div>
                    </Link>
                </div>
                <div className="flex flex-row">
                    <Link to={'/tasks3/category3'}>
                        <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] mx-[20px] flex justify-center items-center">
                            <p className="text-center text-lg">Tiykarlar</p>
                        </div>
                    </Link>
                    <Link to={'/tasks3/category4'}>
                        <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] mx-[20px] flex justify-center items-center">
                            <p className="text-center text-lg">Duzlar</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
