import React, {useState} from 'react'

const TimerComponent = () => {
    const [countSeconds, setCountSeconds] = useState(0);
    const [run, setRun] = useState(false);
    const [successDate, setSuccessDate] = useState('')

    const [timerSeconds, setTimerSeconds] = useState(0);
    const [timerMilliseconds, setTimerMilliseconds] = useState(0);

    const changeHandler = (e) => {
        setCountSeconds(e.currentTarget.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        startTimer();
    };

    const finishHandler = (d) => {
        const date = new Date(d);
        setSuccessDate(date.toLocaleTimeString())
    };

    let interval;

    const startTimer = () => {
        setRun(true);
        setSuccessDate('')
        const dateNow = Date.now();
        const dateEnd = dateNow + (countSeconds * 1000);

        interval = setInterval(() => {
            const now = Date.now();
            const period = dateEnd - now; //or countSeconds * 1000
            console.log(period);

            const seconds = Math.floor(period / 1000);
            const milliseconds = Math.floor(period % 1000);
    
            if (period < 0) {
                clearInterval(interval);
                setTimerSeconds(0);
                setTimerMilliseconds(0);
                setRun(false)
                finishHandler(dateEnd)
            } else {
                setTimerSeconds(seconds);
                setTimerMilliseconds(milliseconds);
            }
        }, 10);
    }

    return (
        <div className="m-3">
            <h1 className="title has-text-left m-0 mb-1">{timerSeconds}.{timerMilliseconds} {successDate}</h1>
            <form onSubmit={submitHandler}>
                <div className="field is-grouped" style={{maxWidth: 300}}>
                    <p className="control is-expanded">
                        <input
                            className="input"
                            type="number"
                            value={countSeconds}
                            onChange={changeHandler}
                            placeholder="Секунды"
                        />
                    </p>
                    <p className="control">
                        <button className="button is-primary" disabled={run}>Старт</button>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default TimerComponent;