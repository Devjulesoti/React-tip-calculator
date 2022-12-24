import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  let billRef = useRef();
  let tipRef = useRef();
   let tipAmtRef = useRef();
  let [num, setNum] = useState({ tipAmt: 0, total: 0 });
  let calculate = () => {
    let billvalue = billRef.current.value;
    let tipvalue = tipRef.current.value;
    console.log(billvalue);
    console.log(tipvalue);
    let result = (tipvalue / 100) * billvalue;
    console.log(result);
    let totalbill = Number(result) + Number(billvalue);
    console.log(totalbill);
    setNum({ tipAmt: result, total: totalbill });
  };

  return (
    <div className="App">
      <div className="main-con">
        <h2>Tip Calculator</h2>
        <div className="input-con">
          <div>
            <label htmlFor="bill-amount">Bill Amount:</label>
            <input ref={billRef} type="text" />
          </div>
          <div>
            <label htmlFor="percent">Percentage Tip:</label>
            <input placeholder="%" ref={tipRef} type="text" />
          </div>
          <div>
            <label htmlFor="bill-amount">Tip Amount:</label>
            <input disabled ref={tipAmtRef} type="text" placeholder={ "$" + num.tipAmt} />
          </div>
          <div>
            <label htmlFor="bill-amount">Total:</label>
            <input  disabled type="text" placeholder={"$" + num.total} />
          </div>
          <button onClick={calculate}>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
