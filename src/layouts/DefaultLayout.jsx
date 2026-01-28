import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
    return (
        <div>
            <Navbar />
            <h1>Layout Principale</h1>
            <Outlet />
        </div>
    );
}