import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/Reducers/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";

const SignUp = ({ title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div>
      <Form title="registr" handleClick={handleRegister} />
    </div>
  );
};

export default SignUp;

// https://console.firebase.google.com/project/auth-example-20d58/authentication/users

// https://console.firebase.google.com/project/auth-example-20d58/overview

// https://firebase.google.com/docs/auth/web/start?hl=ru&authuser=0
