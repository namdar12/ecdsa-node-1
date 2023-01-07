import Wallet from "./Wallet";
import GenerateSignature from "./Wallet"
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        password = {password}
        setPassword = {setPassword}
      />
      <Transfer setBalance={setBalance} address={address} />
    </div>
  );
}

export default App;
