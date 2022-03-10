import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Timer(props) {
    const { initMinute = 0, initSeconds = 10 } = props;
    const [minutes, setMinutes] = useState(initMinute);
    const [seconds, setSeconds] = useState(initSeconds);

    let navigate = useNavigate();


    if (minutes === 0 && seconds < 1) {
        navigate("/");
    }
    props.setFlag(true);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
        } else {
            setMinutes(minutes - 1);
            setSeconds(59);
        }
      }
    }, 1000);
      return () => {
          clearInterval(myInterval);
      };
  });

    return (
        <>
            <div className="wrapper">
                {minutes === 0 && seconds === 0 ? (
                    <>
                        <div className="card"></div>
                    </>
                ) : (
                    <>
                        <center>
                            <h1
                                style={{
                                    marginTop: "10rem",
                                    fontSize: "4rem"
                                }}
                            >
                                {minutes < 10 ? `0${minutes}` : minutes}:
                                {seconds < 10 ? `0${seconds}` : seconds}
                            </h1>
                            <h2>
                                Please make the Payment via the UPI app to complete your order
                            </h2>
                            <button
                                onClick={() => {
                                  navigate("/");
                                        props.setFlag(true);
                              }}
                                    style={{ marginTop: 20, paddingInline: 9, paddingBlock: 3, backgroundColor: "red", color: "white" }}
                          >
                              Cancel
                          </button>
                                <button
                                    onClick={() => {
                                        alert("Successfull")
                                        navigate("/");
                                        props.setFlag(false);
                                    }}
                                    style={{ marginTop: 20, paddingInline: 9, paddingBlock: 3, marginInline: 9, backgroundColor: "green", color: "white" }}
                                >
                                    Verify Payment
                                </button>
                      </center>
                  </>
              )}
          </div>
      </>
  );
}
