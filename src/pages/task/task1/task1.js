import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import parse from "html-react-parser";
import { useNavigate, useParams } from "react-router-dom";
import { datas1 } from "../../../datas";

export const TaskOneTask = () => {
    const { data_id } = useParams();

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    let data = [...datas1].find((item) => item.id === +data_id);

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

    // ---------------- EFFECT (ВСЕГДА НА ВЕРХНЕМ УРОВНЕ) ----------------
    useEffect(() => {
        if (!data) return;

        let timers = [];

        if (data.id === 6 || data.id === 7 || data.id === 9) {
            timers = [
                setTimeout(() => setVisible(true), 0),
                setTimeout(() => setVisible2(true), 3000),
                setTimeout(() => setVisible3(true), 6000),
                setTimeout(() => setVisible4(true), 9000),
                setTimeout(() => setVisible5(true), 12000),
                setTimeout(() => setVisible6(true), 15000),
                setTimeout(() => setVisible7(true), 18000),
                setTimeout(() => setVisible8(1), 21000),
                setTimeout(() => setVisible10(true), 24000),
                setTimeout(() => setVisible9(true), 78000),
            ];
        } 
        else if (data.id === 16 || data.id === 17) {
            timers = [
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
                setTimeout(() => setVisible9(true), 78000),
            ];
        } 
        else {
            timers = [
                setTimeout(() => setVisible2(true), 0),
                setTimeout(() => setVisible3(true), 3000),
                setTimeout(() => setVisible4(true), 6000),
                setTimeout(() => setVisible5(true), 9000),
                setTimeout(() => setVisible6(true), 12000),
                setTimeout(() => setVisible7(true), 15000),
                setTimeout(() => setVisible8(1), 18000),
                setTimeout(() => setVisible10(true), 21000),
                setTimeout(() => setVisible9(true), 78000),
            ];
        }

        return () => timers.forEach(clearTimeout);
    }, [data?.id]);

    // ---------------- SAFETY ----------------
    if (!data) return <div>Loading...</div>;

    // ---------------- JSX ----------------
    return (
        <div className="container-xl bg-slate-100 flex flex-col w-[100%] h-[100vh] justify-center items-center">

            <div className="container-xl w-[100%] flex flex-row">
                <button onClick={goBack} className="py-[10px] px-[15px] m-[15px] bg-sky-300">
                    Назад
                </button>
            </div>

            <div className="flex flex-col items-center ">

                <p className="italic text-purple-800 text-2xl mb-[100px]">
                    {parse(`${data.task}`)}
                </p>

                <div className="flex flex-row w-[1200px] justify-between mb-[50px]">

                    {/* LEFT */}
                    <div className="flex flex-col w-[590px] justify-center items-center rounded-lg bg-slate-200">
                        <p className="italic text-rose-600 text-2xl mb-[50px]">
                            {parse(`${data.desc}`)}
                        </p>
                        <p className="italic text-rose-600 text-2xl">
                            {parse(`${data.desc2}`)}
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col w-[590px] justify-center items-center rounded-lg bg-slate-200">

                        <AnimatePresence>
                            {isVisible && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-2xl"
                                >
                                    {parse(`${data.e}`)}
                                </motion.p>
                            )}
                        </AnimatePresence>

                        <div className="flex flex-row">

                            <div>
                                {isVisible2 && <p>{parse(`${data.a}`)}</p>}
                                {isVisible5 && <p>{parse(`${data.c}`)}</p>}
                            </div>

                            <div>
                                {isVisible3 && <div className="h-[5px] w-[200px] bg-black"></div>}
                                {isVisible6 && <div className="h-[5px] w-[200px] bg-black"></div>}
                            </div>

                            <div>
                                {isVisible4 && <p>{parse(`${data.b}`)}</p>}
                                {isVisible7 && <p>{parse(`${data.d}`)}</p>}
                            </div>

                        </div>

                        {isVisible10 && <p className="font-bold text-2xl">X=?</p>}
                    </div>
                </div>

                <div className="h-[150px] w-[1200px] flex justify-center items-center bg-slate-200">

                    {isVisible8 === 1 && isVisible9 && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-5xl font-bold text-rose-500"
                        >
                            <span className="text-purple-800">Juwap:</span> {parse(`${data.x}`)}
                        </motion.p>
                    )}

                </div>
            </div>
        </div>
    );
};
