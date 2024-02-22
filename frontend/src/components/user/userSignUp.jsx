import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../authentication/authentication';
import './user.css';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/userLogin');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main>
      <section className="signup-container">
          <Typography variant="h5" component="div" align="center" gutterBottom>
            User Sign Up
          </Typography>

          <form>
            <TextField
              label="Email address"
              id="email-address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              placeholder="Email address"
              margin="normal"
            />

            <TextField
              label="Password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              placeholder="Password"
              margin="normal"
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              onClick={onSubmit}
              style={{ marginTop: '20px' }}
            >
              Sign up
            </Button>
          </form>

          <Typography variant="body2" align="center" color="textSecondary">
            Already have an account?{' '}
            <NavLink to="/userLogin" style={{ color: 'inherit', textDecoration: 'none' }}>
              Sign in
            </NavLink>
          </Typography>
      </section>
    </main>
  );
};

export default Signup;
