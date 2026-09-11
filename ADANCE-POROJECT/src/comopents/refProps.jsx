import { useRef, forwardRef } from "react";
// input component that accepts a ref prop

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type="text"
        ref={ref}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm ${className || ""}`}
      />
    </div>
  );
});
CustomInput.displayName = "CustomInput";

function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Ref Props</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Refs provide a way to access DOM nodes or React elements directly. Use{" "}
        <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
          forwardRef
        </code>{" "}
        to pass refs to child components.
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Try it out:</h3>

          <CustomInput
            ref={inputRef}
            label="First Input (with ref)"
            placeholder="Type something..."
          />

          <CustomInput
            ref={secondInputRef}
            label="Second Input (with ref)"
            placeholder="Type something else..."
          />

          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={focusInput}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-medium rounded-lg transition cursor-pointer shadow-sm"
            >
              Focus First Input
            </button>
            <button
              onClick={focusSecondInput}
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 active:scale-95 text-white font-medium rounded-lg transition cursor-pointer shadow-sm"
            >
              Focus Second Input
            </button>
            <button
              onClick={getInputValue}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-medium rounded-lg transition cursor-pointer shadow-sm"
            >
              Get First Input Value
            </button>
            <button
              onClick={clearInput}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-medium rounded-lg transition cursor-pointer shadow-sm"
            >
              Clear First Input
            </button>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="text-md font-semibold text-gray-800 mb-2">When to use refs:</h4>

          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
            <li>Managing focus, text selection, or media playback</li>
            <li>Triggering imperative animations</li>
            <li>Integrating with third-party DOM libraries</li>
            <li>Accessing DOM measurements (scroll position, element size)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default RefProps;
