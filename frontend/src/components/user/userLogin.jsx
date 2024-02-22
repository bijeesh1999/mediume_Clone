import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../authentication/authentication';
import './user.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if(user.accessToken){
            localStorage.setItem("accessToken",user.accessToken)
            localStorage.setItem('userId',user.uid)
            navigate("/form")
        }
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main>
      <section className="login-container">
        {/* <Paper elevation={3} className="login-paper"> */}
          <Typography variant="h5" component="div" align="center" gutterBottom>
            User Sign in
          </Typography>

          <form>
            <TextField
              label="Email address"
              id="email-address"
              name="email"
              type="email"
              fullWidth
              required
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />

            <TextField
              label="Password"
              id="password"
              name="password"
              type="password"
              fullWidth
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={onLogin}
              style={{ marginTop: '20px' }}
            >
              Login
            </Button>
          </form>

          <Typography variant="body2" className="text-sm" align="center" color="textSecondary">
            No account yet?{' '}
            <NavLink to="/userSignUp" style={{ color: 'inherit', textDecoration: 'none' }}>
              Sign up
            </NavLink>
          </Typography>
        {/* </Paper> */}
      </section>
    </main>
  );
};

export default Login;
