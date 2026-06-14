export default function InvestmentOff(){

    return(
        <div>
            <div
  style={{
    padding: "60px 20px",
    backgroundColor: "#0f172a",
    color: "white",
    fontFamily: "Arial, sans-serif",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    {/* Header */}
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <h2 style={{ fontSize: "42px", marginBottom: "10px" }}>
        StockVerse Products
      </h2>
      <p style={{ color: "#94a3b8", fontSize: "18px" }}>
        Sleek, modern, and intuitive trading platforms
      </p>
      <a
        href="#"
        style={{
          color: "#22c55e",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Check out our investment offerings →
      </a>
    </div>

    {/* Cards */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "25px",
          borderRadius: "12px",
        }}
      >
        <h3>Smart Trading Dashboard</h3>
        <p style={{ color: "#cbd5e1" }}>
          Track stocks, ETFs, and market trends in real time with an intuitive
          dashboard built for investors of all experience levels.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "25px",
          borderRadius: "12px",
        }}
      >
        <h3>Advanced Portfolio Analytics</h3>
        <p style={{ color: "#cbd5e1" }}>
          Monitor performance, analyze risk, and gain valuable insights into
          your portfolio through detailed reports and visualizations.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "25px",
          borderRadius: "12px",
        }}
      >
        <h3>AI-Powered Market Insights</h3>
        <p style={{ color: "#cbd5e1" }}>
          Receive AI-generated market summaries, stock alerts, and trend
          predictions based on real-time data.
        </p>
      </div>
    </div>

    {/* Stats */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "60px",
        textAlign: "center",
      }}
    >
      <div>
        <h3 style={{ color: "#22c55e", fontSize: "32px" }}>50K+</h3>
        <p>Active Investors</p>
      </div>

      <div>
        <h3 style={{ color: "#22c55e", fontSize: "32px" }}>₹500Cr+</h3>
        <p>Assets Tracked</p>
      </div>

      <div>
        <h3 style={{ color: "#22c55e", fontSize: "32px" }}>99.9%</h3>
        <p>Platform Uptime</p>
      </div>

      <div>
        <h3 style={{ color: "#22c55e", fontSize: "32px" }}>1M+</h3>
        <p>Trades Processed</p>
      </div>
    </div>
  </div>
</div>
        </div>
    )

    
}
