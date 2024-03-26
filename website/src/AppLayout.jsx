import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function AppLayout() {
	return (
		<>
			<div className="min-h-screen flex flex-col justify-between" style={{ backgroundColor: "#111827" }}>
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export default AppLayout;
