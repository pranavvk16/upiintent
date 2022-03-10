import "./styles.css";
import Timer from "./Timer";
import PaymentBtn from "./PaymentBtn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  // var hidden, visibilityChange;
  // if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
  //   hidden = "hidden";
  //   visibilityChange = "visibilitychange";
  // } else if (typeof document.msHidden !== "undefined") {
  //   hidden = "msHidden";
  //   visibilityChange = "msvisibilitychange";
  // } else if (typeof document.webkitHidden !== "undefined") {
  //   hidden = "webkitHidden";
  //   visibilityChange = "webkitvisibilitychange";
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PaymentBtn />}
          />
          <Route
            path="/timer"
            element={
              <Timer
                initMinute={5}
                initSeconds={0}
              />
            }
          />
        </Routes>
        {/* <Switch>
        <Route path="/upi" component={PaymentBtn  } /> */}
        {/* <Route path="/payment" component={<Timer initMinute={0} initSeconds={10} />} /> */}
        {/* </Switch> */}
        {/* {flag ? (
          <Timer flag={flag} setflag={setflag} initMinute={5} initSeconds={0} />
        ) : (
          <PaymentBtn flag={flag} setflag={setflag} />
        )} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
