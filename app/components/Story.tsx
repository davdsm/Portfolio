import React, { useState, useEffect } from "react";

export const Story = () => {

    const [Counter, setCounter] = useState([] as any)

    const startDateTime = new Date(2015, 0, 1, 23, 59, 59, 0);
    const startStamp = startDateTime.getTime();

    let newDate = new Date();
    let newStamp = newDate.getTime();

    let timer;

    const updateClock = () => {
        newDate = new Date();
        newStamp = newDate.getTime();
        let diff = Math.round((newStamp - startStamp) / 1000);
        const d = Math.floor(diff / (24 * 60 * 60));
        diff = diff - (d * 24 * 60 * 60);
        const y = Math.floor(d / 365);
        const h = Math.floor(diff / (60 * 60));
        diff = diff - (h * 60 * 60);
        const m = Math.floor(diff / (60));
        diff = diff - (m * 60);
        const s = diff;
        setCounter({ 'years': y, 'days': d, 'hours': h, 'minutes': m, 'seconds': s })
    }

    useEffect(() => {
        timer = setInterval(updateClock, 1000);
    }, [])


    return (
        <div className="w-full flex items-center bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700 sm:h-96">
            <div className="dark:border-gray-600 w-full">
                <dd className="text-2xl flex justify-center font-bold text-slate-900 dark:text-white">Developing since</dd>
                <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" role="tabpanel" aria-labelledby="stats-tab">
                    <dl className="w-full flex justify-center p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                        <div className="mx-4 flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl font-extrabold">{Counter.years}</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Years</dd>
                        </div>
                        <div className="mx-4 flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl font-extrabold">{Counter.hours}</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Hours</dd>
                        </div>
                        <div className="mx-4 flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl font-extrabold">{Counter.minutes}</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Minutes</dd>
                        </div>
                        <div className="mx-4 flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl font-extrabold">{Counter.seconds}</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Seconds</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Story