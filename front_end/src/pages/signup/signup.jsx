import React from 'react'
import './signup.css'
import { Card, Button } from '../../components';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { signup, errors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signup(data);
    if (user) {
      navigate('/register');
    }
  });

  return (
    <div className="Signup">
      <Card>
        <form className="Signup_form" onSubmit={onSubmit}>
          <h2>Signup</h2>

          {
            errors && (
              errors.map(err => (
                <p className="textAlert" >
                  {err}
                </p>
              ))
            )
          }

          <label>Full name </label>
          <input type="text" placeholder="Write your full name" required
            {...register('full_name')}
          ></input>

          <label>User </label>
          <input type="text" placeholder="Write your user" required
            {...register('user')}
          ></input>

          <label>Password </label>
          <input type="password" placeholder="Write your password" required
            {...register('user_password')}
          ></input>

          <Button>Signup</Button>
        </form>
      </Card>
    </div>
  )
}

export default Signup;