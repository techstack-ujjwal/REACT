import { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm
        ${size === "small" ? "text-sm px-4 py-1" : ""}
        ${size === "large" ? "text-lg px-8 py-3" : ""}
        ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
        ${color === "secondary" ? "bg-yellow-500 hover:bg-yellow-600 text-white" : ""}
        ${color === "danger" || color === "dager" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
        ${color === "success" || color === "sucess" ? "bg-green-500 hover:bg-green-600 text-white" : ""} 
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:shadow-md active:scale-95"}`}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Basic Props</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Props are arguments passed to React components. They allow you to pass
        data from parent to child components.
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Different Colors (Clicks: {clickCount})
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button
              text="primary Button"
              color="primary"
              onClick={() => setClickCount(clickCount + 1)}
            />
            <Button
              text="secondary Button"
              color="secondary"
              onClick={() => setClickCount(clickCount + 1)}
            />
            <Button
              text="danger Button"
              color="danger"
              onClick={() => setClickCount(clickCount + 1)}
            />
            <Button
              text="sucess Button"
              color="sucess"
              onClick={() => setClickCount(clickCount + 1)}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Different Sizes (Clicks: {clickCount})
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button
              text="small Button"
              color="primary"
              size="small"
              onClick={() => {
               
                setClickCount(clickCount + 1);
              }}
            />
            <Button
              text="large Button"
              color="secondary"
              size="large"
              onClick={() => {
               
                setClickCount(clickCount + 1);
              }}
            />
            <Button
              text="disabled Button"
              color="danger"
              disabled={true}
              onClick={() => {
                alert("Disabled Button clicked!");
                
              }}
            />
            <Button
              text="enabled Button"
              color="sucess"
              disabled={false}
              onClick={() => {
                alert("Enabled Button clicked!");
                setClickCount(clickCount + 1);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BasicProps;
