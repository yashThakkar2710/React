function InputBox({
  label,
  amount,
  selectedCurrency,
  currencyOpestions,
  onAmountChange,
  onCurrencyChange,
  amountDisabled = false,
  currencyDisabled = false,
}) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-inner flex items-center gap-4">
      {/* Amount Input */}
      <div className="w-2/3">
        <label className="block text-sm text-gray-600 font-medium mb-1">
          {label}
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          placeholder="Enter amount"
          className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
          disabled={amountDisabled}
        />
      </div>

      {/* Currency Selector */}
      <div className="w-1/3">
        <label className="block text-sm text-gray-600 font-medium mb-1">
          Currency
        </label>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="w-full px-2 py-2 border rounded-md bg-white outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
          disabled={currencyDisabled}
        >
          {currencyOpestions.map((currency) => (
            <option value={currency} key={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
