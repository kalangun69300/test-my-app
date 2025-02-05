function App() {
  
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      height: "100vh", 
      width: "100vw", 
      backgroundColor: "#f8f9fa" 
    }}>

      {/* 🔴 1. Unused HTML Element (Dead Code) */}
      {/* <div>
        <p style={{ color: "red" }}>This is old content that is not used anymore.</p>
      </div> */}

      {/* 🔴 2. Hardcoded Credentials (Security Issue) */}
      {/* const API_KEY = "12345-abcdef-67890"; */}

      {/* 🔴 3. Inline JavaScript Execution (Potential XSS) */}
      {/* <script>
        alert("This script should not be here!");
      </script> */}

      {/* 🔴 4. Use of `eval()` (Security Risk) */}
      {/* let userInput = "console.log('Injected Code!')"; */}
      {/* eval(userInput); */}

      {/* Navbar */}
      <nav style={{ 
        width: "100%", 
        backgroundColor: "#007bff", 
        padding: "15px", 
        color: "white", 
        fontSize: "20px", 
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "20px",
        paddingRight: "20px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "24px", cursor: "pointer" }}>☰</span>
          <span>For Real Not Delicious Restaurant</span>
        </div>
      </nav>

      <div style={{ 
        width: "350px", 
        padding: "20px", 
        backgroundColor: "white", 
        borderRadius: "10px", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
        textAlign: "center",
        marginTop: "20px"
      }}>
        <h1 style={{ fontSize: "24px", marginBottom: "15px" }}>Menu</h1>
        <ul style={{ listStyle: "none", padding: "0", fontSize: "18px" }}>
          <li style={{ padding: "10px", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>Fried Rice - 50 THB</span>
            <button style={buttonStyle}>Order</button>
          </li>
          <li style={{ padding: "10px", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>Noodles - 50 THB</span>
            <button style={buttonStyle}>Order</button>
          </li>
          <li style={{ padding: "10px", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>Fried Chicken - 60 THB</span>
            <button style={buttonStyle}>Order</button>
          </li>
          <li style={{ padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>Salad - 40 THB</span>
            <button style={buttonStyle}>Order</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Button "Order"
const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "14px",
};

export default App;
