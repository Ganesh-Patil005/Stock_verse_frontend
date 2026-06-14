import InvestmentOff from "./InvestMent";
import { Link } from "react-router-dom";
export default function Hero(){
    return (
      <div className="container border-bottom">
          <div className="row p-5 mt-5 mb-5 text-center ">
            <h1 className="fs-2 text-muted pb-2">StcokVerse Products</h1>
            <p className="fs-5">Sleek, modern, and intuitive trading platforms</p>
<p>
  Check out our{" "}
  <Link to="/investment" style={{ textDecoration: "none" }}>
    investment offerings →
  </Link>
</p>      </div>
      </div>
    );
};