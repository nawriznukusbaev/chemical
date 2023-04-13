import * as React from "react";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import parse from "html-react-parser";
import {useParams} from "react-router-dom";
import {datas10} from "../../../datas";
export const TaskTwoTaskThree = () => {
    const {data_id} = useParams();
    console.log(data_id)
    let data=[...datas10];
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
        setTimeout(handleVisibality2, 0);
        setTimeout(handleVisibality3, 3000);
        setTimeout(handleVisibality4, 6000);
        setTimeout(handleVisibality5, 9000);
        setTimeout(handleVisibality6, 12000);
        setTimeout(handleVisibality7, 15000);
        setTimeout(handleVisibality8, 18000);
        setTimeout(handleVisibality10, 21000);
        setTimeout(handleVisibality9, 78000);


        return (<div className="container-xl bg-slate-100 flex flex w-[100%] h-[100vh] justify-center items-center">
                <div className="flex flex-col items-center ">
                    <p className="italic text-purple-800 text-2xl mb-[100px]">
                        {parse(`${data.task}`)}
                    </p>
                    <div className="flex flex-row h-[400] w-[1200px] justify-between mb-[50px]">
                        {/*----------------------Left-------------------------*/}
                        <div
                            className="flex flex-col h-[400px] w-[590px] justify-center items-center rounded-lg bg-slate-200">

                            <p className="italic text-rose-600 text-2xl mb-[50px]">
                                {parse(`${data.desc}`)}
                            </p>




                        </div>
                        {/*----------------------Right-------------------------*/}
                        <div
                            className="flex flex-row h-[400px] w-[590px] justify-center items-center rounded-lg bg-slate-200">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-row h-[300px] w-[580px] justify-center items-center rounded-lg bg-slate-200">
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
                                            className="italic text-rose-500 text-5xl font-bold"><span
                                            className="italic text-purple-800 text-5xl font-bold">Juwap:</span>  {parse(`${data.x}`)}
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