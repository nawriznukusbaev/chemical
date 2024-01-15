import {Header} from "../../components/header";
import {Footer} from "../../components/footer/footer";
import {Link, Outlet} from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import fon from './fon.jpg'


export const Layout = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center" style={{ backgroundImage:`url(${fon})`, backgroundSize:'cover'}}>
            <h1 className="w-[75%]  mb-[100px] text-3xl">«Xımıya: mektep oqiwshilari ushin(Organıkaliq emes zatlardiń tıykarǵi klass bırıkpelerıne tıyıslı máselelerdı  proporcıya usuli járdemınde sheshıwdı úyretıwde  ınteraktıv usuldan paydalaniw) ózın-ózı oqitiw» elektron oqiwliq qollanba(EOQ),(qaraqalpaq tılınde).</h1>
            <div className="flex flex-col">

            <div className="flex flex-row mb-[30px]">
                <Link to={'/tasks1'}>
                    <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] m-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Mol, birikpeniń quramindaǵi atom,  molekula sanin tabiw boyinsha esaplawlar</p>
                    </div>
                </Link>
                <Link to={'/tasks2'}>
                <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] m-[20px] flex flex-col justify-center items-center">
                    <p className="text-center text-lg">Ximiyaliq formula boyinsha esaplawlar</p>
                  
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
    <div className="flex flex-row">   <h1 className="mt-[100px] text-2xl">Avtorlar: Ajınıyazova Sholpan Saparnıyazovna, Utenıyazov KarımbayKuanishbaevıch</h1></div>
        </div>

    );
}
