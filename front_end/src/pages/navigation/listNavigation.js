import { BiLogIn } from "react-icons/bi";
import { LuPenLine } from "react-icons/lu";

export const publicRoutes = [
    {
        name: "Login",
        path: "/login",
        icon: <BiLogIn />
    },
    {
        name: "Signup",
        path: "/signup",
        icon: <LuPenLine />
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