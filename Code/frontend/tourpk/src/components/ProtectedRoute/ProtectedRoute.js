// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Route, redirect } from 'react-router-dom'


// const ProtectedRoute = ({ component: Component, ...rest }) => {
//     const isLoggedIn = useSelector(state => state.user.isLoggedIn);
//     return (
//         <>
//             if(isLoggedIn)
//             {
//                       <Route path="/addpackage" element={<Component />} />

//                 <Route {...rest} render={(props) => <Component {...props} />} />
//             }
//             else{
//                 redirect("/login")
//             }
//         </>
//     )
// }

// export default ProtectedRoute