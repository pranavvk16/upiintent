
export default function PaymentBtn(props) {
    return (<>
        <h1 style={{ fontSize: "2.5rem" }}>UPI payments</h1>
        <hr />
        <div style={{ marginLeft: "10px" }} className="appcss"><input readOnly type="checkbox" checked style={{ placeSelf: "center" }} />
            <div> <img src="https://webapp.daalchini.co.in/9657890a7cb8cfdd93c3d2ae82be0013.png" width={180} height={70} alt="one" />
                <h4 style={{ padding: 0, paddingLeft: "30%", margin: 0, color: "black", fontSize: "1rem" }}>UPI (default)</h4></div>
        </div>
        {/* <Link path="/payment" > */}
        <div style={{ height: "minContent" }} onClick={() => {
            props.setflag(true)
            // console.log(props.flag, "payment");
        }}>
            <a style={{ textDecoration: "none" }} href={`upi://pay?pa=SmartQ@paytm&pn=SmartQ&mc=5499&tid=PYTM20220302282059035296&tr=20220302282059035296&am=$112&cu=INR`}>
                <button style={{
                    fontSize: "2rem", marginTop: "127%", width: "100vw", height: "10vh", backgroundColor: "green", color: "white"
                }}>
                    Proceed to Pay
                </button>
            </a></div>

    </>)
}

