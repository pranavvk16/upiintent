export default function PaymentBtn(props) {
    return (
      <>
        <h1 style={{ fontSize: "2.5rem" }}>UPI paymentzz</h1>
        <hr />
        <div style={{ marginLeft: "10px" }} className="appcss"></div>
        <div>
          <a
            style={{ textDecoration: "none" }}
            href={`upi://pay?pa=SmartQ@paytm&pn=SmartQ&mc=5499&tid=PYTM20220302282059035296&tr=20220302282059035296&am=$112&cu=INR`}
          >
            <img
              onClick={() => {
                props.setflag(true);
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
                props.setflag(true);
                // console.log(props.flag, "payment");
              }}
              alt="one"
              src="https://images.livemint.com/img/2021/07/09/1600x900/Google-Pay-4_5d8472821722c_1589536494425_1589536494709_1625826806470.jpg"
              width={150}
              height={75}
            />
          </a>
        </div>
        {/* <Link path="/payment" > */}
        <div
          style={{ height: "minContent" }}
          onClick={() => {
            props.setflag(true);
            // console.log(props.flag, "payment");
          }}
        ></div>
      </>
    );
  }
  