import { useState, useEffect } from "react"


export default function Timer(props) {
    const { initMinute = 0, initSeconds = 10 } = props
    const [minutes, setMinutes] = useState(initMinute)
    const [seconds, setSeconds] = useState(initSeconds)

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            } if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval)
        }
    })

    return (
        <>
            <div className='wrapper'>
                {minutes === 0 && seconds === 0 ? (
                    <>
                        <div className="card">
                        </div>
                    </>
                ) : (
                    <>
                        <center>
                            <h1 style={{
                                marginTop: "10rem",
                                fontSize: "4rem"
                            }}>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                            <h2>Please make the Payment via the UPI app to complete your order</h2>
                            <button onClick={() => {
                                props.setflag(false)
                            }
                            }
                                style={{ marginTop: 20, paddingInline: 9, paddingBlock: 3 }}>Cancel</button>
                        </center>
                    </>
                )}
            </div>
        </>
    )
}