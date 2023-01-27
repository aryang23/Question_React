import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Grid from "./Components/Grid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
    const [action, setAction] = useState('');
    return (
        <>
            <Home />
            <Grid />
        </>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home action={action} setAction={setAction} />
    }, 
    {
        path: "/grid",
        element: <Grid action={action} setAction={setAction} />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);