import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Trans from "inc/locale/Trans";

const Timers = ({
    releaseDate,
    complete,
}: {
    releaseDate: Date;
    complete: () => void;
}): JSX.Element => {
    /* useEffect(() => {
        const releaseDate = Number(JSON.parse(localStorage.releaseDate || ""));
        setReleaseDate(releaseDate); //2023-10-30, Mon Oct 30 2023 02:00:00 GMT+0200 (Восточная Европа, стандартное время)
    }, []); */

    // const releaseDate = Date.parse(
    //     "Mon Oct 30 2023 02:00:00 GMT+0200 (Восточная Европа, стандартное время)",
    // );

    const releaseDateNumber = releaseDate.getTime();
    const currentDate = Date.now();

    /* const [releaseDate, setReleaseDate] = useState<number>(0); */
    const [left, setLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const returnDayTitle = (dayNumber: number) => {
        if (dayNumber % 10 === 1 && dayNumber % 100 !== 11) {
            return "День";
        } else if (
            dayNumber % 10 >= 2 &&
            dayNumber % 10 <= 4 &&
            (dayNumber % 100 < 10 || dayNumber % 100 >= 20)
        ) {
            return "Дня";
        } else {
            return "Дней";
        }
    };

    const returnHoursTitle = (hoursNumber: number) => {
        if (hoursNumber % 10 === 1 && hoursNumber % 100 !== 11) {
            return "Час";
        } else if (
            hoursNumber % 10 >= 2 &&
            hoursNumber % 10 <= 4 &&
            (hoursNumber % 100 < 10 || hoursNumber % 100 >= 20)
        ) {
            return "Часа";
        } else {
            return "Часов";
        }
    };

    const returnMinutesTitle = (minutesNumber: number) => {
        if (minutesNumber % 10 === 1 && minutesNumber % 100 !== 11) {
            return "Минута";
        } else if (
            minutesNumber % 10 >= 2 &&
            minutesNumber % 10 <= 4 &&
            (minutesNumber % 100 < 10 || minutesNumber % 100 >= 20)
        ) {
            return "Минуты";
        } else {
            return "Минут";
        }
    };

    const returnSecondsTitle = (secondsNumber: number) => {
        if (secondsNumber % 10 === 1 && secondsNumber % 100 !== 11) {
            return "Секунда";
        } else if (
            secondsNumber % 10 >= 2 &&
            secondsNumber % 10 <= 4 &&
            (secondsNumber % 100 < 10 || secondsNumber % 100 >= 20)
        ) {
            return "Секунды";
        } else {
            return "Секунд";
        }
    };

    const setLeftSecondsHandler = (leftSecondsNow: number) => {
        setLeft({
            days: Math.floor(leftSecondsNow / (24 * 60 * 60)),
            hours:
                Math.floor(leftSecondsNow / (60 * 60)) -
                Math.floor(leftSecondsNow / (24 * 60 * 60)) * 24,
            minutes:
                Math.floor(leftSecondsNow / 60) -
                Math.floor(leftSecondsNow / (60 * 60)) * 60,
            seconds:
                Math.floor(leftSecondsNow) -
                Math.floor(leftSecondsNow / 60) * 60,
        });
    };

    return (
        <div className="timers">
            <div className="item">
                <CountdownCircleTimer
                    isPlaying
                    duration={30 * 24 * 60 * 60}
                    colors="#8A39F8"
                    initialRemainingTime={
                        (releaseDateNumber - currentDate) / 1000
                    }
                    size={120}
                    strokeWidth={5}
                    onUpdate={(remainingTime: number) => {
                        setLeftSecondsHandler(remainingTime);
                    }}
                    updateInterval={1}
                    onComplete={() => complete()}
                />

                <div className="number">
                    {left.days < 10 ? <>0{left.days}</> : <>{left.days}</>}
                </div>
                <p>
                    <Trans string={returnDayTitle(left.days)} />
                </p>
            </div>
            <div className="item">
                <CountdownCircleTimer
                    isPlaying
                    duration={24 * 60 * 60}
                    initialRemainingTime={
                        (releaseDateNumber - currentDate) / 1000
                    }
                    colors="#8A39F8"
                    size={120}
                    strokeWidth={5}
                />

                <div className="number">
                    {left.hours < 10 ? <>0{left.hours}</> : <>{left.hours}</>}
                </div>
                <p>
                    <Trans string={returnHoursTitle(left.hours)} />
                </p>
            </div>
            <div className="item">
                <CountdownCircleTimer
                    isPlaying
                    duration={60 * 60}
                    initialRemainingTime={
                        (releaseDateNumber - currentDate) / 1000
                    }
                    colors="#8A39F8"
                    size={120}
                    strokeWidth={5}
                />

                <div className="number">
                    {left.minutes < 10 ? (
                        <>0{left.minutes}</>
                    ) : (
                        <>{left.minutes}</>
                    )}
                </div>
                <p>
                    <Trans string={returnMinutesTitle(left.minutes)} />
                </p>
            </div>
            <div className="item">
                <CountdownCircleTimer
                    isPlaying
                    duration={60}
                    initialRemainingTime={
                        (releaseDateNumber - currentDate) / 1000
                    }
                    colors="#8A39F8"
                    size={120}
                    strokeWidth={5}
                />

                <div className="number">
                    {left.seconds < 10 ? (
                        <>0{left.seconds}</>
                    ) : (
                        <>{left.seconds}</>
                    )}
                </div>
                <p>
                    <Trans string={returnSecondsTitle(left.seconds)} />
                </p>
            </div>
        </div>
    );
};

export default Timers;
