import * as React from "react";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import parse from "html-react-parser";
import {useNavigate, useParams} from "react-router-dom";
import {datas8} from "../../../datas";


export const TaskFourTaskTwo = () => {
    const {data_id} = useParams();
    console.log(data_id)
    let data=[...datas8];
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


    const navigate=useNavigate();
    const goBack=()=>navigate(-1);
     return (<div className="container-xl bg-slate-100 flex flex-col w-[100%] h-[100vh] justify-center items-center">
                <div className="container-xl w-[100%] flex flex-row"> <button onClick={goBack} className="py-[10px] px-[25px]  m-[15px] bg-sky-300">Назад</button></div>
            <div className="flex flex-col items-center ">
                <p className="italic text-purple-800 text-center text-2xl mb-[100px]">
                    {parse(`${data.task}`)}
                </p>
                <div className="flex flex-row h-[400] w-[1200px] justify-between mb-[50px]">
                    {/*----------------------Left-------------------------*/}
                    <div
                        className="flex flex-col justify-center h-[400px] w-[590px] justify-center items-center rounded-lg bg-slate-200">
                        {data.desc.map((item)=>
                        {return <p className="italic text-rose-600 text-2xl mb-[50px]">{parse(`${item}`)}</p>})}
                    </div>
                    {/*----------------------Right-------------------------*/}
                    <div  className="flex flex-row h-[400px] w-[590px] justify-center items-center rounded-lg bg-slate-200">
                        <div className="flex flex-col justify-center items-center">
                            <div className="h-[100px] w-[100%] flex justify-center items-center p-[5px]">
                                <AnimatePresence>
                                    {
                                        isVisible&& (<motion.div
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            transition={{duration: 3}}
                                        >
                                          <p className="italic text-purple-800 text-center text-xl"> {parse(`${data.e}`)}</p>


                                        </motion.div>)
                                    }
                                </AnimatePresence>
                            </div>
                            <div className="flex flex-row h-[200px] w-[580px] justify-center items-center rounded-lg bg-slate-200">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="h-[60px] w-[80px] flex justify-center items-center">
                                        <AnimatePresence>
                                            {
                                                isVisible2 && (<motion.div
                                                    initial={{opacity: 0}}
                                                    animate={{opacity: 1}}
                                                    transition={{duration: 3}}
                                                >
                                                    <p className="italic text-purple-800 my-[10px] mx-[25px] text-2xl"> {parse(`${data.a}`)}</p>

                                                </motion.div>)
                                            }
                                        </AnimatePresence>

                                    </div>
                                    <div className="h-[60px] w-[80px] flex justify-center items-center">
                                        <AnimatePresence>
                                            {
                                                isVisible5 && (<motion.div
                                                    initial={{opacity: 0}}
                                                    animate={{opacity: 1}}
                                                    transition={{duration: 3}}
                                                >
                                                    <p className="italic text-purple-800 my-[10px] mx-[25px] text-2xl"> {parse(`${data.c}`)}</p>

                                                </motion.div>)
                                            }
                                        </AnimatePresence>

                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center ">
                                    <div className="h-[60px] w-[250px] flex justify-center items-center">
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
                                    <div className="h-[60px] w-[250px] flex justify-center items-center">
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
                                    <div className="h-[60px] w-[120px] flex justify-center items-center">
                                        <AnimatePresence>
                                            {
                                                isVisible4 && (<motion.div
                                                    initial={{opacity: 0}}
                                                    animate={{opacity: 1}}
                                                    transition={{duration: 3}}
                                                >
                                                    <p className="italic text-purple-800 my-[10px] mx-[25px] text-2xl"> {parse(`${data.b}`)}</p>

                                                </motion.div>)
                                            }
                                        </AnimatePresence>

                                    </div>
                                    <div className="h-[60px] w-[80px] flex justify-center items-center">
                                        <AnimatePresence>
                                            {
                                                isVisible7 && (<motion.div
                                                    initial={{opacity: 0}}
                                                    animate={{opacity: 1}}
                                                    transition={{duration: 3}}
                                                >
                                                    <p className="italic text-purple-800 my-[10px] mx-[25px] text-2xl"> {parse(`${data.d}`)}</p>

                                                </motion.div>)
                                            }
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[50px] w-[100%px] flex justify-center items-center">
                                <AnimatePresence>
                                    {
                                        isVisible10&& (<motion.div
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            transition={{duration: 3}}
                                        >
                                            <p className="italic text-purple-800 text-2xl text-center font-bold">X=?</p>

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