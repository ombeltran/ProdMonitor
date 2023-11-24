import React from "react";
import "./login.css";
import { useForm } from 'react-hook-form';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { Card, Button } from "../../components";


const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login, errors } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        const user = await login(data);
        if (user) {
            navigate('/register');
        }
    });

    return (
        <div className="Login">
            <Card>
                <form className="Login_form" onSubmit={onSubmit}>
                    <h2>Login</h2>

                    {
                        errors && (
                            errors.map(err => (
                                <p className="textAlert" >
                                    {err}
                                </p>
                            ))
                        )
                    }

                    <label>User </label>

                    <input type="text" placeholder="Write your user" required
                        {...register('user')}
                    ></input>

                    <label>Password </label>
                    <input type="password" placeholder="Write your password" required
                        {...register('user_password')}
                    ></input>

                    <Button className="Button">Login</Button>
                </form>
            </Card>
        </div>
    );
}

export default Login;