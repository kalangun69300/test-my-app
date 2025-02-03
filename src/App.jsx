function App() {

  // 🚨 Security Issue: ใช้ eval() (ถือว่าอันตราย)
  const unsafeFunction = () => {
    eval("console.log('This is unsafe code!')"); // SonarCloud จะเตือนเรื่อง Security Vulnerability
  };

  // 🚨 Security Issue: ใช้ dangerouslySetInnerHTML (เสี่ยงต่อ XSS)
  const dangerousHTML = { __html: "<h3 style='color: red;'>Warning: This is dangerous!</h3>" };

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      height: "100vh", 
      width: "100vw", 
      backgroundColor: "#f8f9fa" 
    }}>
      
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
            <button style={buttonStyle} onClick={unsafeFunction}>Order</button>
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

      {/* 🚨 Security Issue: แสดง HTML แบบไม่มีการป้องกัน */}
      <div dangerouslySetInnerHTML={dangerousHTML}></div>
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
