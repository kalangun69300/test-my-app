import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  // 🚨 ใช้ eval() กับค่าที่มาจาก Input ของผู้ใช้ → อันตรายจริง
  const unsafeFunction = () => {
    eval(input); // ตอนนี้โค้ดนี้สามารถรันได้จริงผ่าน Input
  };

  // 🚨 ใช้ dangerouslySetInnerHTML กับ Input ของผู้ใช้ → เปิดช่องให้ XSS
  const dangerousHTML = { __html: input };

  return (
    <div>
      <h1>Security Test</h1>

      <input
        type="text"
        placeholder="Enter something..."
        onChange={(e) => setInput(e.target.value)}
      />
      
      <button onClick={unsafeFunction}>Run Unsafe Code</button>

      <div dangerouslySetInnerHTML={dangerousHTML}></div>
    </div>
  );
}

export default App;
