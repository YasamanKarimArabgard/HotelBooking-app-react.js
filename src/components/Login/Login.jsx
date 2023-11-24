import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("user@gmail.com");
    const [password, setPassword] = useState("1234");
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) login(email, password);
    };

    useEffect(() => {
        if (isAuthenticated) navigate("/bookmarks", { replace: true });
    }, [isAuthenticated, navigate]);

    return (
        <div className="loginContainer col-span-10  col-start-2 row-start-2 flex justify-center md:items-center">
            <div className="w-full xl:w-1/3 bg-white h-64 rounded-xl border p-4 flex flex-col items-center justify-center gap-y-2">
                <h2 className="font-bold text-2xl">Sign in Your account</h2>
                <form onSubmit={handleSubmit} className="form w-full flex flex-col gap-y-2">
                    <div className="formControl flex flex-col gap-y-2">
                        <label htmlFor="email">Email :</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            name="email"
                            id="email"
                            className="p-1 rounded-lg border border-orange-400 outline-none focus:border-orange-500 focus:border-2"
                        />
                    </div>
                    <div className="formControl flex flex-col gap-y-2">
                        <label htmlFor="password">Password :</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            className="p-1 rounded-lg border border-orange-400 outline-none focus:border-orange-500 focus:border-2"
                        />
                    </div>
                    <div className="buttons mx-auto w-full">
                        <button className="w-full p-1  rounded-xl bg-blue-400 active:hover:bg-blue-500 hover:bg-blue-500 hover:ease-in-out duration-100 text-slate-50 ">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;
