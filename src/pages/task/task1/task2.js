import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import parse from "html-react-parser";
import { useNavigate, useParams } from "react-router-dom";
import { datas5 } from "../../../datas";

export const TaskOneTaskTwo = () => {
    const { data_id } = useParams();

    let data = [...datas5].find((value) => value.id === +data_id);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    // ---------------- STATES ----------------
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

    // ---------------- PROTECTION ----------------
    if (!data) return <div>Loading...</div>;

    // ---------------- EFFECT ----------------
    useEffect(() => {
        const timers = [
            setTimeout(() => setVisible(true), 0),
            setTimeout(() => setVisible2(true), 3000),
            setTimeout(() => setVisible3(true), 6000),
            setTimeout(() => setVisible4(true), 9000),
            setTimeout(() => setVisible5(true), 12000),
            setTimeout(() => setVisible6(true), 15000),
            setTimeout(() => setVisible7(true), 18000),
            setTimeout(() => setVisible8(1), 21000),
            setTimeout(() => setVisible10(true), 24000),
            setTimeout(() => setVisible11(true), 27000),
            setTimeout(() => setVisible12(true), 30000),
            setTimeout(() => setVisible13(true), 21000),
            setTimeout(() => setVisible9(true), 60000),
        ];

        return () => timers.forEach(clearTimeout);
    }, []);

    // ---------------- JSX ----------------
    return (
        <div className="container-xl bg-slate-100 flex flex-col w-[100%] h-[100vh] justify-center items-center">
            <div className="container-xl w-[100%] flex flex-row">
                <button onClick={goBack} className="py-[10px] px-[25px] m-[15px] bg-sky-300">
                    Назад
                </button>
            </div>

            <div className="flex flex-col items-center ">
                <p className="italic text-purple-800 text-2xl text-center mb-[100px]">
                    {parse(`${data.task}`)}
                </p>

                <div className="flex flex-row h-[400] w-[1200px] justify-between mb-[50px]">

                    {/* LEFT */}
                    <div className="flex flex-col h-[400px] w-[590px] justify-center items-center rounded-lg bg-slate-200">
                        {data.desc.map((item, index) => (
                            <p key={index} className="italic text-rose-600 text-2xl mb-[50px]">
                                {parse(`${item}`)}
                            </p>
                        ))}
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-row h-[400px] w-[590px] justify-center items-center rounded-lg bg-slate-200">

                        <div className="flex flex-col justify-center items-center">

                            {/* solution */}
                            {data.solution && (
                                <div className="h-[150px] w-[100%] flex flex-col justify-center items-center">
                                    <AnimatePresence>
                                        {isVisible && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
                                                {data.solution.map((item, index) => (
                                                    <p key={index} className="italic text-rose-600 text-xl mb-[5px]">
                                                        {parse(`${item}`)}
                                                    </p>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}

                            {/* middle */}
                            <div className="flex flex-row h-[120px] w-[580px] justify-center items-center rounded-lg bg-slate-200">

                                {/* left column */}
                                <div>
                                    {isVisible2 && <p>{parse(`${data.a}`)}</p>}
                                    {isVisible5 && <p>{parse(`${data.c}`)}</p>}
                                </div>

                                {/* lines */}
                                <div>
                                    {isVisible3 && <div className="h-[5px] w-[150px] bg-black"></div>}
                                    {isVisible6 && <div className="h-[5px] w-[150px] bg-black"></div>}
                                </div>

                                {/* right column */}
                                <div>
                                    {isVisible4 && <p>{parse(`${data.b}`)}</p>}
                                    {isVisible7 && <p>{parse(`${data.d}`)}</p>}
                                </div>
                            </div>

                            {/* X */}
                            <div className="h-[130px] flex items-center">
                                {isVisible11 && <p className="text-2xl text-rose-600">X=?</p>}
                            </div>

                        </div>
                    </div>
                </div>

                {/* ANSWER */}
                <div className="h-[150px] w-[1200px] flex justify-center items-center bg-slate-200">
                    {isVisible8 === 1 && isVisible9 && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-4xl font-bold text-rose-500"
                        >
                            <span className="text-purple-800">Juwap:</span> {parse(`${data.x}`)}
                        </motion.p>
                    )}
                </div>
            </div>
        </div>
    );
};
