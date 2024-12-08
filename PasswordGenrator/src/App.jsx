import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 0; i < length; i++) {
      let num = Math.floor(Math.random() * str.length);
      pass += str[num];
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  }, [password]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-md p-6 text-orange-400">
        <h1 className="text-2xl font-semibold text-center text-white mb-6">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="mb-4">
          <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden">
            <input
              type="text"
              value={password}
              className="w-full bg-transparent text-white py-2 px-3 outline-none"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 transition"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="block text-sm text-white mb-2">
            Password Length: <span className="font-semibold">{length}</span>
          </label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
            className="w-full cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="numberInput"
              className="ml-2 text-sm text-white font-medium"
            >
              Include Numbers
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="characterInput"
              className="ml-2 text-sm text-white font-medium"
            >
              Include Special Characters
            </label>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
