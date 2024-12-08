import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrecyinfo";
import backgroundImage from './assets/image.png'

function App() {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-6 backdrop-blur-md bg-opacity-80">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From Input */}
          <div className="mb-6">
            <InputBox
              label="From"
              amount={amount}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectedCurrency={from}
              currencyOpestions={options}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          {/* Swap Button */}
          <div className="flex justify-center items-center mb-6">
            <button
              type="button"
              onClick={swap}
              className="bg-teal-600 hover:bg-teal-700 text-white text-2xl font-bold p-3 rounded-full shadow-lg transform transition-transform hover:scale-105"
            >
              ↔
            </button>
          </div>

          {/* To Input */}
          <div className="mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              selectedCurrency={to}
              currencyOpestions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              currencyDisabled={false}
              amountDisabled={true}
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold py-3 rounded-lg shadow-lg transition-colors"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
