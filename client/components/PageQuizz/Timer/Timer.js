import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [time, setTime] = useState(0)

    const [run, setRun] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (run) {
                setTime(time + 1)
            }
        }, 1000)
        return () => clearInterval(interval);
    }, [time, setTime, run])

    function startStop() {
        setRun(!run)
    }



    return (
        <div>
            <div 
                style={{
                    height: 100, 
                    width: 100, 
                    borderRadius: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: 'black',
                    borderWidth: 3,
                    borderBlockStyle: 'solid',
                    backgroundColor: 'white'
                }}
            >
                <p
                    style={{
                        display: 'block',
                        fontSize: 50,
                        fontWeight: 'bold',
                        fontFamily: 'sans-serif'
                    }}
                >
                    {time}
                </p>
            </div>
            <button onClick={startStop}>{run ? "Stop" : "Start"}</button>
        </div>
    )
}

export default Timer