import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import parse from "html-react-parser";
import { useNavigate, useParams } from "react-router-dom";
import { datas1 } from "../../../datas";

export const TaskOneTask = () => {
    const { data_id } = useParams();

    let data = [...datas1].find((item) => item.id === +data_id);

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

    const [isVisible12, setVisible12] = useState(false); // ✅ FIX
    const [isVisible13, setVisible13] = useState(false); // ✅ FIX

    // ---------------- PROTECTION ----------------
    if (!data) return <div>Loading...</div>;

    // ---------------- EFFECT ----------------
    useEffect(() => {
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
        } else if (data.id === 16 || data.id === 17) {
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
        } else {
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
    }, [data.id]);

    // ---------------- JSX (оставил как у тебя) ----------------
    return (
        <div className="container-xl bg-slate-100 flex flex-col w-[100%] h-[100vh] justify-center items-center">
            <button onClick={goBack}>Назад</button>

            <p>{parse(`${data.task}`)}</p>

            {/* Тут оставь свой JSX как есть */}
        </div>
    );
};
