export const HeaderTop = () => {
    return (
        <div className="w-full border-b-[0.5px] border-slate-200 border-solid">
            <div className="container-xl flex flex-row justify-between items-center mx-auto">
                <ul className="flex flex-row font-sans">
                    <li className="p-[10px] text-[15-px] bg-[#b91c1c] text-white font-semibold">
                        <button type="button">Скидки до 40%</button>
                    </li>
                    <li className="p-[10px] text-[15-px] bg-orange-400 text-white font-semibold">
                        <button type="button">0% рассрочка</button>
                    </li>
                    <li className="p-[10px] text-[15-px]">
                        <button type="button">Статус рассрочки</button>
                    </li>
                    <li className="p-[10px] text-[15-px]">
                        <button type="button">Cashback</button>
                    </li>
                    <li className="p-[10px] text-[15-px]">
                        <button type="button">Samsung</button>
                    </li>
                    <li className="p-[10px] text-[15-px]">
                        <button type="button">Xiaomi</button>
                    </li>
                    <li className="p-[10px] text-[15-px]">
                        <button type="button">Адрес магазинов</button>
                    </li>

                </ul>
                <div className="p-[10px] border-l-[0.5px] border-slate-200 border-solid">
                    <p className="text-[15-px]">Рус</p>
                </div>
            </div>
        </div>
    );
}