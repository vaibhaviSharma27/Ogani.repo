import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Protect({loading, loggedIn}) {

    

    return (
        <>

            {loading && <p> Loading... </p>}
            {!loading && !loggedIn && <Navigate to="/login" />}
            {!loading && loggedIn && <Outlet />}
        </>
    )
}