import { BiLogIn } from "react-icons/bi";

export const publicRoutes = [
    {
        name: "Login",
        path: "/login",
        icon: <BiLogIn />
    },
    {
        name: "Signup",
        path: "/signup"
    },
]

export const privateRoutes = [
    {
        name: "Register",
        path: "/register"
    },
    {
        name: "Reports",
        path: "/reports"
    },
]