import * as React from "react";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import parse from "html-react-parser";
import {useParams} from "react-router-dom";
import {datas2} from "../../../datas";
export const TaskTwoTaskOne = () => {
    const {data_id} = useParams();
    console.log(data_id)
    let data=[...datas2];
    data=data.find((item)=>{
        return item.id===+data_id});
    console.log(data);


    const parse = require('html-react-parser');
    let i = 0;

    const [isVisible, setVisible] = useState(false);
    const [isVisible2, setVisible2] = useState(false);
    const [isVisible3, setVisible3] = useState(false);
    const [isVisible4, setVisible4] = useState(false);
    const [isVisible5, setVisible5] = useState(false);
    const [isVisible6, setVisible6] = useState(false);
    const [isVisible7, setVisible7] = useState(false);
    const [isVisible8, setVisible8] = useState(0);
    const [isVisible9, setVisible9] = useState(false);
    const [isVisible10, setVisible10] = useState(false);
    const [isVisible11, setVisible11] = useState(false);
    const [isVisible12, setVisible12] = useState(false);
    const [isVisible13, setVisible13] = useState(false);
    const [isVisible14, setVisible14] = useState(false);
    const [isVisible15, setVisible15] = useState(false);
    const [isVisible16, setVisible16] = useState(false);
    const [isVisible17, setVisible17] = useState(false);
    const [isVisible18, setVisible18] = useState(false);
    const [isVisible19, setVisible19] = useState(false);
    const [isVisible20, setVisible20] = useState(false);
    const [isVisible21, setVisible21] = useState(false);
    const [isVisible22, setVisible22] = useState(false);
    const [isVisible23, setVisible23] = useState(false);
    const [isVisible24, setVisible24] = useState(false);
    const [isVisible26, setVisible26] = useState(false);
    const [isVisible25, setVisible25] = useState(false);
    const [isVisible27, setVisible27] = useState(false);
    const [isVisible28, setVisible28] = useState(false);
    const [isVisible29, setVisible29] = useState(false);
    const [isVisible30, setVisible30] = useState(false);
    const [isVisible31, setVisible31] = useState(false);
    const [isVisible32, setVisible32] = useState(false);


    if(data.id===2){
        const handleVisibality = () => {
            setVisible(true)
        }
        const handleVisibality2 = () => {
            setVisible2(true)
        }
        const handleVisibality3 = () => {
            setVisible3(true)
        }
        const handleVisibality4 = () => {
            setVisible4(true)
        }
        const handleVisibality5 = () => {
            setVisible5(true)
        }
        const handleVisibality6 = () => {
            setVisible6(true)
        }
        const handleVisibality7 = () => {
            setVisible7(true)
        }
        const handleVisibality10 = () => {
            setVisible10(true)
        }
        const handleVisibality11 = () => {
            setVisible11(true)
        }
        const handleVisibality12 = () => {
            setVisible12(true)
        }
        const handleVisibality13 = () => {
            setVisible13(true)
        }
        const handleVisibality14 = () => {
            setVisible14(true)
        }
        const handleVisibality15 = () => {
            setVisible15(true)
        }
        const handleVisibality8 = () => {
            setVisible8(1)
        }
        const handleVisibality9 = () => {

            setVisible9(true)
        }
        setTimeout(handleVisibality, 0);
        setTimeout(handleVisibality2, 3000);
        setTimeout(handleVisibality3, 6000);
        setTimeout(handleVisibality4, 9000);
        setTimeout(handleVisibality5, 12000);
        setTimeout(handleVisibality6, 15000);
        setTimeout(handleVisibality7, 18000);
        setTimeout(handleVisibality8, 21000);
        setTimeout(handleVisibality10, 24000);
        setTimeout(handleVisibality11, 27000);
        setTimeout(handleVisibality12, 30000);
        setTimeout(handleVisibality13, 33000);
        setTimeout(handleVisibality14, 36000);
        setTimeout(handleVisibality15, 39000);
        setTimeout(handleVisibality9, 78000);


        return (<div className="container-xl bg-slate-100 flex flex w-[100%] h-[100vh] justify-center items-center">
                <div className="flex flex-col items-center ">
                    <p className="italic text-purple-800 text-2xl text-center mb-[100px]">
                        {parse(`${data.task}`)}
                    </p>
                    <div className="flex flex-row h-[400] w-[1200px] justify-between mb-[50px]">
                        {/*----------------------Left-------------------------*/}
                        <div
                            className="flex flex-col h-[400px] w-[590px] justify-center items-center rounded-lg bg-slate-200">
                            {data.desc.map((item)=>{
                                return   <p className="italic text-rose-600 text-2xl mb-[50px]">{parse(`${item}`)}</p>
                            })}

                        </div>
                        {/*----------------------Right-------------------------*/}
                        <div
                            className="flex flex-row h-[400px] w-[590px] justify-center items-center rounded-lg bg-slate-200">
                            <div className="flex flex-col justify-center items-center">

                                <div className="flex flex-row h-[180px] w-[580px] justify-center items-center rounded-lg bg-slate-200">
                                    <p className="text-3xl">1)</p>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="h-[80px] w-[80px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible && (<motion.div
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        transition={{duration: 3}}
                                                    >
                                                        <p className="italic text-purple-800 m-[25px] text-2xl"> {parse(`${data.solution[0].a}`)}</p>

                                                    </motion.div>)
                                                }
                                            </AnimatePresence>

                                        </div>
                                        <div className="h-[80px] w-[80px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible4 && (<motion.div
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        transition={{duration: 3}}
                                                    >
                                                        <p className="italic text-purple-800 m-[25px] text-2xl"> {parse(`${data.solution[0].c}`)}</p>

                                                    </motion.div>)
                                                }
                                            </AnimatePresence>

                                        </div>

                                    </div>
                                    <div className="flex flex-col justify-center items-center ">
                                        <div className="h-[80px] w-[250px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible2 && (<motion.div
                                                        initial={{opacity: 0, width: 0}}
                                                        animate={{opacity: 1, width: "200px"}}
                                                        transition={{duration: 3}}
                                                        className="h-[5px] bg-black"
                                                    >
                                                    </motion.div>)
                                                }
                                            </AnimatePresence>
                                        </div>
                                        <div className="h-[80px] w-[250px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible5 && (<motion.div
                                                        initial={{opacity: 0, width: 0}}
                                                        animate={{opacity: 1, width: "200px"}}
                                                        transition={{duration: 3}}
                                                        className="h-[5px] bg-black"
                                                    >
                                                    </motion.div>)
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="h-[80px] w-[80px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible3 && (<motion.div
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        transition={{duration: 3}}
                                                    >
                                                        <p className="italic text-purple-800 m-[25px] text-2xl"> {parse(`${data.solution[0].b}`)}</p>

                                                    </motion.div>)
                                                }
                                            </AnimatePresence>

                                        </div>
                                        <div className="h-[80px] w-[80px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible6 && (<motion.div
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        transition={{duration: 3}}
                                                    >
                                                        <p className="italic text-purple-800 m-[25px] text-2xl"> {parse(`${data.solution[0].d}`)}</p>

                                                    </motion.div>)
                                                }
                                            </AnimatePresence>

                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row h-[180px] w-[580px] justify-center items-center rounded-lg bg-slate-200">
                                    <p className="text-3xl">2)</p>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="h-[80px] w-[80px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible7 && (<motion.div
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        transition={{duration: 3}}
                                                    >
                                                        <p className="italic text-purple-800 m-[25px] text-2xl"> {parse(`${data.solution[1].a}`)}</p>

                                                    </motion.div>)
                                                }
                                            </AnimatePresence>

                                        </div>
                                        <div className="h-[80px] w-[80px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible12 && (<motion.div
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        transition={{duration: 3}}
                                                    >
                                                        <p className="italic text-purple-800 m-[25px] text-2xl"> {parse(`${data.solution[1].c}`)}</p>

                                                    </motion.div>)
                                                }
                                            </AnimatePresence>

                                        </div>

                                    </div>
                                    <div className="flex flex-col justify-center items-center ">
                                        <div className="h-[80px] w-[250px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible10 && (<motion.div
                                                        initial={{opacity: 0, width: 0}}
                                                        animate={{opacity: 1, width: "200px"}}
                                                        transition={{duration: 3}}
                                                        className="h-[5px] bg-black"
                                                    >
                                                    </motion.div>)
                                                }
                                            </AnimatePresence>
                                        </div>
                                        <div className="h-[80px] w-[250px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible13 && (<motion.div
                                                        initial={{opacity: 0, width: 0}}
                                                        animate={{opacity: 1, width: "200px"}}
                                                        transition={{duration: 3}}
                                                        className="h-[5px] bg-black"
                                                    >
                                                    </motion.div>)
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="h-[80px] w-[80px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible11 && (<motion.div
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        transition={{duration: 3}}
                                                    >
                                                        <p className="italic text-purple-800 m-[25px] text-2xl"> {parse(`${data.solution[1].b}`)}</p>

                                                    </motion.div>)
                                                }
                                            </AnimatePresence>

                                        </div>
                                        <div className="h-[80px] w-[80px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible14 && (<motion.div
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        transition={{duration: 3}}
                                                    >
                                                        <p className="italic text-purple-800 m-[25px] text-2xl"> {parse(`${data.solution[1].d}`)}</p>

                                                    </motion.div>)
                                                }
                                            </AnimatePresence>

                                        </div>
                                    </div>
                                </div>
                                <div className="h-[50px] w-[80px] flex justify-center items-center">
                                    <AnimatePresence>
                                        {
                                            isVisible15&& (<motion.div
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                transition={{duration: 3}}
                                            >
                                                <p className="italic text-purple-800 text-2xl  font-bold">X=?</p>

                                            </motion.div>)
                                        }
                                    </AnimatePresence>

                                </div>


                            </div>


                        </div>
                    </div>
                    {/*------------------------Juwap-----------------------------*/}
                    <div className="flex flex-row h-[150px] w-[1200px] justify-center items-center rounded-lg bg-slate-200">
                        <AnimatePresence>
                            {
                                isVisible8 === 1 && (<motion.div
                                    initial={{opacity: 0}}
                                    animate={{
                                        opacity: 1,
                                        transitionEnd: {
                                            display: 'block',
                                            opacity: 1
                                        }
                                    }}
                                    transition={{duration: 5}}
                                >

                                    {isVisible9 &&
                                        <motion.p
                                            initial={{opacity: 0}}
                                            animate={{
                                                opacity: 1,
                                                transitionEnd: {
                                                    display: "block"
                                                }
                                            }}
                                            transition={{duration: 3}}
                                            exit={{opacity: 1}}
                                            className="italic text-rose-500 text-4xl font-bold"><span
                                            className="italic text-purple-800 text-4xl font-bold">Juwap:</span>
                                            1){parse(`${data.x[0].x}`)}  2){parse(`${data.x[1].x}`)}
                                        </motion.p>}

                                </motion.div>)

                            }
                        </AnimatePresence>
                    </div>
                    {/*-----------------------------------------------------*/}


                </div>


            </div>

        )
    }
    else if(data.id===3){
        const handleVisibality = () => {
            setVisible(true)
        }
        const handleVisibality2 = () => {
            setVisible2(true)
        }
        const handleVisibality3 = () => {
            setVisible3(true)
        }
        const handleVisibality4 = () => {
            setVisible4(true)
        }
        const handleVisibality5 = () => {
            setVisible5(true)
        }
        const handleVisibality6 = () => {
            setVisible6(true)
        }
        const handleVisibality7 = () => {
            setVisible7(true)
        }
        const handleVisibality10 = () => {
            setVisible10(true)
        }
        const handleVisibality11 = () => {
            setVisible11(true)
        }
        const handleVisibality12 = () => {
            setVisible12(true)
        }
        const handleVisibality13 = () => {
            setVisible13(true)
        }
        const handleVisibality14 = () => {
            setVisible14(true)
        }
        const handleVisibality15 = () => {
            setVisible15(true)
        }
        const handleVisibality8 = () => {
            setVisible8(1)
        }
        const handleVisibality9 = () => {

            setVisible9(true)
        }
        const handleVisibality16 = () => {
            setVisible16(true)
        }
        const handleVisibality17 = () => {
            setVisible17(true)
        }
        const handleVisibality18 = () => {
            setVisible18(true)
        }
        const handleVisibality19 = () => {
            setVisible19(true)
        }
        const handleVisibality20 = () => {
            setVisible20(true)
        }
        const handleVisibality21 = () => {
            setVisible21(true)
        }
        const handleVisibality22 = () => {
            setVisible22(true)
        }
        const handleVisibality23 = () => {
            setVisible23(true)
        }
        const handleVisibality24 = () => {
            setVisible24(true)
        }
        const handleVisibality25 = () => {
            setVisible25(true)
        }
        const handleVisibality26 = () => {
            setVisible26(true)
        }
        const handleVisibality27 = () => {
            setVisible27(true)
        }
        const handleVisibality28 = () => {
            setVisible28(true)
        }
        const handleVisibality29 = () => {
            setVisible29(true)
        }
        const handleVisibality30 = () => {
            setVisible30(true)
        }
        const handleVisibality31 = () => {
            setVisible31(true)
        }
        const handleVisibality32 = () => {
            setVisible32(true)
        }
        setTimeout(handleVisibality, 0);
        setTimeout(handleVisibality2, 2000);
        setTimeout(handleVisibality3, 4000);
        setTimeout(handleVisibality4, 6000);
        setTimeout(handleVisibality5, 8000);
        setTimeout(handleVisibality6, 10000);
        setTimeout(handleVisibality7, 12000);
        setTimeout(handleVisibality8, 14000);
        setTimeout(handleVisibality10, 16000);
        setTimeout(handleVisibality11, 18000);
        setTimeout(handleVisibality12, 20000);
        setTimeout(handleVisibality13, 22000);
        setTimeout(handleVisibality14, 24000);
        setTimeout(handleVisibality15, 26000);
        setTimeout(handleVisibality16, 28000);
        setTimeout(handleVisibality17, 30000);
        setTimeout(handleVisibality18, 32000);
        setTimeout(handleVisibality19, 34000);
        setTimeout(handleVisibality20, 36000);
        setTimeout(handleVisibality21, 38000);
        setTimeout(handleVisibality22, 40000);
        setTimeout(handleVisibality23, 42000);
        setTimeout(handleVisibality24, 44000);
        setTimeout(handleVisibality25, 46000);
        setTimeout(handleVisibality26, 48000);
        setTimeout(handleVisibality27, 50000);
        setTimeout(handleVisibality28, 52000);
        setTimeout(handleVisibality29, 54000);
        setTimeout(handleVisibality30, 56000);
        setTimeout(handleVisibality31, 58000);
        setTimeout(handleVisibality32, 60000);

        setTimeout(handleVisibality9, 90000);


        return (<div className="container-xl bg-slate-100 flex flex w-[100%] h-[100vh] justify-center items-center">
                <div className="flex flex-col items-center ">
                    <p className="italic text-purple-800 text-2xl text-center mb-[100px]">
                        {parse(`${data.task}`)}
                    </p>
                    <div className="flex flex-row h-[400] w-[1200px] justify-between mb-[50px]">
                        {/*----------------------Left-------------------------*/}
                        <div
                            className="flex flex-col h-[400px] w-[590px] justify-center items-center rounded-lg bg-slate-200">
                            {data.desc.map((item)=>{
                                return   <p className="italic text-rose-600 text-2xl mb-[50px]">{parse(`${item}`)}</p>
                            })}

                        </div>
                        {/*----------------------Right-------------------------*/}
                        <div
                            className="flex flex-row h-[400px] w-[590px] justify-center items-center rounded-lg bg-slate-200">

                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-row justify-center items-center">
                                    <div className="flex flex-row justify-center items-center">
                                        <div className="flex flex-row h-[180px] w-[240] justify-center items-center rounded-lg bg-slate-200">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 2}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[0].a}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible4 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 2}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[0].c}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>

                                            </div>
                                            <div className="flex flex-col justify-center items-center ">
                                                <div className="h-[80px] w-[110px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible2 && (<motion.div
                                                                initial={{opacity: 0, width: 0}}
                                                                animate={{opacity: 1, width: "100px"}}
                                                                transition={{duration: 2}}
                                                                className="h-[4px] bg-black"
                                                            >
                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>
                                                </div>
                                                <div className="h-[80px] w-[110px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible5 && (<motion.div
                                                                initial={{opacity: 0, width: 0}}
                                                                animate={{opacity: 1, width: "100px"}}
                                                                transition={{duration: 2}}
                                                                className="h-[5px] bg-black"
                                                            >
                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible3 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 2}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[0].b}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible6 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 3}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[0].d}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row h-[180px] w-[240px] justify-center items-center rounded-lg bg-slate-200">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible10 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 2}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[1].a}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible13 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 2}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[1].c}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>

                                            </div>
                                            <div className="flex flex-col justify-center items-center ">
                                                <div className="h-[80px] w-[110px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible11 && (<motion.div
                                                                initial={{opacity: 0, width: 0}}
                                                                animate={{opacity: 1, width: "100px"}}
                                                                transition={{duration: 2}}
                                                                className="h-[4px] bg-black"
                                                            >
                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>
                                                </div>
                                                <div className="h-[80px] w-[110px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible14 && (<motion.div
                                                                initial={{opacity: 0, width: 0}}
                                                                animate={{opacity: 1, width: "100px"}}
                                                                transition={{duration: 2}}
                                                                className="h-[5px] bg-black"
                                                            >
                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible12 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 2}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[1].b}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible15 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 3}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[1].d}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center">
                                        <div className="flex flex-row h-[180px] w-[240px] justify-center items-center rounded-lg bg-slate-200">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible17 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 2}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[2].a}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible20 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 2}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[2].c}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>

                                            </div>
                                            <div className="flex flex-col justify-center items-center ">
                                                <div className="h-[80px] w-[110px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible18 && (<motion.div
                                                                initial={{opacity: 0, width: 0}}
                                                                animate={{opacity: 1, width: "100px"}}
                                                                transition={{duration: 2}}
                                                                className="h-[4px] bg-black"
                                                            >
                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>
                                                </div>
                                                <div className="h-[80px] w-[110px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible21 && (<motion.div
                                                                initial={{opacity: 0, width: 0}}
                                                                animate={{opacity: 1, width: "100px"}}
                                                                transition={{duration: 2}}
                                                                className="h-[5px] bg-black"
                                                            >
                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible19 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 2}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[2].b}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible22 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 3}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[2].d}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row h-[180px] w-[240px] justify-center items-center rounded-lg bg-slate-200">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible24 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 2}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[3].a}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible27 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 2}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[3].c}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>

                                            </div>
                                            <div className="flex flex-col justify-center items-center ">
                                                <div className="h-[80px] w-[110px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible25 && (<motion.div
                                                                initial={{opacity: 0, width: 0}}
                                                                animate={{opacity: 1, width: "100px"}}
                                                                transition={{duration: 2}}
                                                                className="h-[4px] bg-black"
                                                            >
                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>
                                                </div>
                                                <div className="h-[80px] w-[110px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible28 && (<motion.div
                                                                initial={{opacity: 0, width: 0}}
                                                                animate={{opacity: 1, width: "100px"}}
                                                                transition={{duration: 2}}
                                                                className="h-[5px] bg-black"
                                                            >
                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible26 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 2}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[3].b}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>
                                                <div className="h-[80px] w-[40px] flex justify-center items-center">
                                                    <AnimatePresence>
                                                        {
                                                            isVisible29 && (<motion.div
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{duration: 3}}
                                                            >
                                                                <p className="italic text-purple-800 m-[25px] text-xl"> {parse(`${data.solution[3].d}`)}</p>

                                                            </motion.div>)
                                                        }
                                                    </AnimatePresence>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-[50px] w-[80px] flex justify-center items-center">
                                        <AnimatePresence>
                                            {
                                                isVisible15&& (<motion.div
                                                    initial={{opacity: 0}}
                                                    animate={{opacity: 1}}
                                                    transition={{duration: 3}}
                                                >
                                                    <p className="italic text-purple-800 text-2xl  font-bold">X=?</p>

                                                </motion.div>)
                                            }
                                        </AnimatePresence>

                                    </div>
                                </div>


                            </div>
                        </div>
                        {/*------------------------Juwap-----------------------------*/}
                        <div className="flex flex-row h-[150px] w-[1200px] justify-center items-center rounded-lg bg-slate-200">
                            <AnimatePresence>
                                {
                                    isVisible8 === 1 && (<motion.div
                                        initial={{opacity: 0}}
                                        animate={{
                                            opacity: 1,
                                            transitionEnd: {
                                                display: 'block',
                                                opacity: 1
                                            }
                                        }}
                                        transition={{duration: 5}}
                                    >

                                        {isVisible9 &&
                                            <motion.p
                                                initial={{opacity: 0}}
                                                animate={{
                                                    opacity: 1,
                                                    transitionEnd: {
                                                        display: "block"
                                                    }
                                                }}
                                                transition={{duration: 3}}
                                                exit={{opacity: 1}}
                                                className="italic text-rose-500 text-4xl font-bold"><span
                                                className="italic text-purple-800 text-4xl font-bold">Juwap:</span>
                                                1){parse(`${data.x[0].x}`)}  2){parse(`${data.x[1].x}`)}
                                            </motion.p>}

                                    </motion.div>)

                                }
                            </AnimatePresence>
                        </div>
                        {/*-----------------------------------------------------*/}


                    </div>

                </div>
            </div>

        )
    }

    else{


        const handleVisibality = () => {
            setVisible(true)
        }
        const handleVisibality2 = () => {
            setVisible2(true)
        }
        const handleVisibality3 = () => {
            setVisible3(true)
        }
        const handleVisibality4 = () => {
            setVisible4(true)
        }
        const handleVisibality5 = () => {
            setVisible5(true)
        }
        const handleVisibality6 = () => {
            setVisible6(true)
        }
        const handleVisibality7 = () => {
            setVisible7(true)
        }
        const handleVisibality10 = () => {
            setVisible10(true)
        }
        const handleVisibality8 = () => {
            setVisible8(1)
        }
        const handleVisibality9 = () => {

            setVisible9(true)
        }
        setTimeout(handleVisibality, 0);
        setTimeout(handleVisibality2, 3000);
        setTimeout(handleVisibality3, 6000);
        setTimeout(handleVisibality4, 9000);
        setTimeout(handleVisibality5, 12000);
        setTimeout(handleVisibality6, 15000);
        setTimeout(handleVisibality7, 18000);
        setTimeout(handleVisibality8, 21000);
        setTimeout(handleVisibality10, 24000);
        setTimeout(handleVisibality9, 78000);


        return (<div className="container-xl bg-slate-100 flex flex w-[100%] h-[100vh] justify-center items-center">
                <div className="flex flex-col items-center ">
                    <p className="italic text-purple-800 text-center text-2xl mb-[100px]">
                        {parse(`${data.task}`)}
                    </p>
                    <div className="flex flex-row h-[400] w-[1200px] justify-between mb-[50px]">
                        {/*----------------------Left-------------------------*/}
                        <div
                            className="flex flex-col h-[400px] w-[590px] justify-center items-center rounded-lg bg-slate-200">


                            {data.desc.map((item)=>{
                                return   <p className="italic text-rose-600 text-2xl mb-[50px]">{parse(`${item}`)}</p>
                            })}





                        </div>
                        {/*----------------------Right-------------------------*/}
                        <div
                            className="flex flex-row h-[400px] w-[590px] justify-center items-center rounded-lg bg-slate-200">
                            <div className="flex flex-col justify-center items-center">
                                <div className="h-[50px] w-[100%] flex justify-center items-center">
                                    <AnimatePresence>
                                        {
                                            isVisible&& (<motion.div
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                transition={{duration: 3}}
                                            >
                                                {data.e && <p className="italic text-purple-800 text-2xl"> {parse(`${data.e}`)}</p>}

                                            </motion.div>)
                                        }
                                    </AnimatePresence>

                                </div>
                                <div className="flex flex-row h-[240px] w-[580px] justify-center items-center rounded-lg bg-slate-200">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="h-[80px] w-[80px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible2 && (<motion.div
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        transition={{duration: 3}}
                                                    >
                                                        <p className="italic text-purple-800 m-[25px] text-2xl"> {parse(`${data.a}`)}</p>

                                                    </motion.div>)
                                                }
                                            </AnimatePresence>

                                        </div>
                                        <div className="h-[80px] w-[80px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible5 && (<motion.div
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        transition={{duration: 3}}
                                                    >
                                                        <p className="italic text-purple-800 m-[25px] text-2xl"> {parse(`${data.c}`)}</p>

                                                    </motion.div>)
                                                }
                                            </AnimatePresence>

                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center ">
                                        <div className="h-[80px] w-[250px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible3 && (<motion.div
                                                        initial={{opacity: 0, width: 0}}
                                                        animate={{opacity: 1, width: "200px"}}
                                                        transition={{duration: 3}}
                                                        className="h-[5px] bg-black"
                                                    >
                                                    </motion.div>)
                                                }
                                            </AnimatePresence>
                                        </div>
                                        <div className="h-[80px] w-[250px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible6 && (<motion.div
                                                        initial={{opacity: 0, width: 0}}
                                                        animate={{opacity: 1, width: "200px"}}
                                                        transition={{duration: 3}}
                                                        className="h-[5px] bg-black"
                                                    >
                                                    </motion.div>)
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="h-[80px] w-[80px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible4 && (<motion.div
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        transition={{duration: 3}}
                                                    >
                                                        <p className="italic text-purple-800 m-[25px] text-2xl"> {parse(`${data.b}`)}</p>

                                                    </motion.div>)
                                                }
                                            </AnimatePresence>

                                        </div>
                                        <div className="h-[80px] w-[80px] flex justify-center items-center">
                                            <AnimatePresence>
                                                {
                                                    isVisible7 && (<motion.div
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        transition={{duration: 3}}
                                                    >
                                                        <p className="italic text-purple-800 m-[25px] text-2xl"> {parse(`${data.d}`)}</p>

                                                    </motion.div>)
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[50px] w-[80px] flex justify-center items-center">
                                    <AnimatePresence>
                                        {
                                            isVisible10&& (<motion.div
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                transition={{duration: 3}}
                                            >
                                                <p className="italic text-purple-800 text-2xl  font-bold">X=?</p>

                                            </motion.div>)
                                        }
                                    </AnimatePresence>

                                </div>


                            </div>


                        </div>
                    </div>
                    {/*------------------------Juwap-----------------------------*/}
                    <div className="flex flex-row h-[150px] w-[1200px] justify-center items-center rounded-lg bg-slate-200">
                        <AnimatePresence>
                            {
                                isVisible8 === 1 && (<motion.div
                                    initial={{opacity: 0}}
                                    animate={{
                                        opacity: 1,
                                        transitionEnd: {
                                            display: 'block',
                                            opacity: 1
                                        }
                                    }}
                                    transition={{duration: 5}}
                                >

                                    {isVisible9 &&
                                        <motion.p
                                            initial={{opacity: 0}}
                                            animate={{
                                                opacity: 1,
                                                transitionEnd: {
                                                    display: "block"
                                                }
                                            }}
                                            transition={{duration: 3}}
                                            exit={{opacity: 1}}
                                            className="italic text-rose-500 text-4xl font-bold"><span
                                            className="italic text-purple-800 text-4xl font-bold">Juwap:</span>  {parse(`${data.x}`)}
                                        </motion.p>}

                                </motion.div>)

                            }
                        </AnimatePresence>
                    </div>
                    {/*-----------------------------------------------------*/}


                </div>


            </div>

        )
    }


}