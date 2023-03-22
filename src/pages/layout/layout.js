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



export const Layout = () => {
    return (
        <div className="w-full h-[100vh] bg-slate-300 flex flex-col justify-center items-center">
            <h1 className="mb-[100px] text-3xl">Mektep oqiwshilarina ximiya pa'nin interaktiv usilda uyretiw</h1>
            <div className="flex flex-col">

            <div className="flex flex-row mb-[30px]">
                <Link to={'/tasks1'}>
                    <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] m-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Mol, birikpenin’ quramindag’i atom,  molekula sanin tabiw boyinsha esaplawlar</p>
                    </div>
                </Link>
                <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] m-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Ximiyaliq formula boyinsha esaplawlar</p>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] mx-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Birikpenin’ formulasin keltirip shig’ariw</p>
                </div>
                <div className="rounded-lg shadow-inner bg-slate-50 w-[275px] h-[200px] p-[20px] mx-[20px] flex justify-center items-center">
                    <p className="text-center text-lg">Ximiyaliq ten’lemeler boyinsha esaplawlar</p>
                </div>
            </div>
            </div>
        </div>

    );
}