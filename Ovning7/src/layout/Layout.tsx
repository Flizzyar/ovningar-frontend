import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/songs">Songs</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default RootLayout;
