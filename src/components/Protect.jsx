import { Navigate, Outlet } from "react-router-dom"
// export default function Protect({loading, loggedIn}) {

    

//     return (
//         <>

//             {loading && <p> Loading... </p>}
//             {!loading && !loggedIn && <Navigate to="/login" />}
//             {!loading && loggedIn && <Outlet />}
//         </>
//     )
// }

export default function Protect({loading, loggedIn}){
    return(
        <>
        {loading && <p>Loading...</p>}
        {!loading && !loggedIn && <Navigate to="/login" />}
        {!loading && loggedIn && <Outlet />}
        </>
    )
}