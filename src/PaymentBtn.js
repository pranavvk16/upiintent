// import { isAndroid, isDesktop, isIOS, isMobile } from "react-device-detector";
import { useNavigate } from "react-router-dom";
import { isAndroid, osName } from "react-device-detect";
export default function PaymentBtn(props) {
  let navigate = useNavigate();
  const MyComponent = () => {
    if (isAndroid) return <p>this will only render on android</p>;
    return <p>this will only render on non android decives -"{osName}" </p>;
  };
  return (
    <>
      <MyComponent />
      <h1 style={{ fontSize: "2.5rem" }}>UPI payment</h1>
      <hr />

      <div style={{ marginLeft: "10px" }} className="appcss"></div>
      <div>
        <a
          style={{ textDecoration: "none" }}
          href={`upi://pay?pa=SmartQ@paytm&pn=SmartQ&mc=5499&tid=PYTM20220302282059035296&tr=20220302282059035296&am=$112&cu=INR`}
        >
          <img
            onClick={() => {
              navigate("/timer");
              // console.log(props.flag, "payment");
            }}
            alt="two"
            src="https://webapp.daalchini.co.in/9657890a7cb8cfdd93c3d2ae82be0013.png"
            width={180}
            height={70}
          />
        </a>
        <a
          style={{ textDecoration: "none" }}
          href={`phonepe://upi/pay?pa=SmartQ@paytm&pn=SmartQ&mc=5499&tid=PYTM20220225292555826543&tr=20220225292555826543&am=75&cu=INR`}
        >
          <img
            onClick={() => {
              navigate("/timer");
              // console.log(props.flag, "payment");
            }}
            alt="one"
            src="https://images.livemint.com/img/2021/07/09/1600x900/Google-Pay-4_5d8472821722c_1589536494425_1589536494709_1625826806470.jpg"
            width={150}
            height={75}
          />
        </a>
      </div>
      {false && (
        <div style={{ padding: "20px", backgroundColor: "red" }}>
          <a href="/">verify payment</a>
        </div>
      )}
      {/* <Link path="/payment" > */}
      <div
        style={{ height: "minContent" }}
        onClick={() => {
          navigate("/timer");
          // console.log(props.flag, "payment");
        }}
      ></div>
    </>
  );
}
