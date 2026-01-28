import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div>
            <h1>Layout Principale</h1>
            <Outlet />
        </div>
    );
}