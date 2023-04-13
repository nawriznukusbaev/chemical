import * as React from "react";
import {Link} from "react-router-dom";
import fon from "../layout/fon.jpg";

export const Tasks1 = ()=>{
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center" style={{ backgroundImage:`url(${fon})`, backgroundSize:'cover'}}>

            <div className="flex flex-col">
                <div className="flex flex-row mb-[30px]">
                    <Link to={'/tasks1/list'}>
                        <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] m-[20px] flex justify-center items-center">
                            <p className="text-center text-lg">Mol, birikpeniń quramindaǵi atom,  molekula sanin tabiw boyinsha esaplawlar</p>
                        </div>
                    </Link>
                    <Link to={'/tasks2'}>
                        <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] m-[20px] flex justify-center items-center">
                            <p className="text-center text-lg">Ximiyaliq formula boyinsha esaplawlar</p>
                            <p className="text-center text-xl">1.Massa úlesti tabiw</p>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-row">
                    <Link to={'/tasks3'}>
                        <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] mx-[20px] flex justify-center items-center">
                            <p className="text-center text-lg">Birikpeniń formulasin keltirip shiǵariw</p>
                        </div>
                    </Link>
                    <Link to={'/tasks4'}>
                        <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] mx-[20px] flex justify-center items-center">
                            <p className="text-center text-lg">Ximiyaliq teńlemeler boyinsha esaplawlar</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}