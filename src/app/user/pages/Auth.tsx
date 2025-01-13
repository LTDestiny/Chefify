import React, { useState, useContext } from "react";

import Card from "@/app/shared/UIElements/Card";
import Input from "@/app/shared/FormElements/Input";
import Button from "@/app/shared/FormElements/Button";
import { ErrorModal } from "@/app/shared/UIElements/ErrorModal";
import { LoadingSpinner } from "@/app/shared/UIElements/LoadingSpinner";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "@/app/shared/util/validators";
import { useForm } from "@/app/shared/hooks/form-hook";
import { useHttpClient } from "@/app/shared/hooks/http-hook";
import { AuthContext } from "@/app/shared/context/auth-context";

import Authentication from "../../../../public/Authentication.png";

import "./Auth.css";
import { Link } from "react-router-dom";

// Define the types for formState and inputs
interface FormState {
  inputs: {
    name?: { value: string; isValid: boolean };
    email: { value: string; isValid: boolean };
    password: { value: string; isValid: boolean };
  };
  isValid: boolean;
}

// Define the response structure from the API
interface AuthResponse {
  user: {
    id: string;
  };
}

export default function Auth(props: any) {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/users/login",
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );

        auth.login(responseData.user.id); // use when we have a valid email and password to login
      } catch (err) {}
    } else {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/users/signup",
          "POST",
          JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );

        auth.login(responseData.user.id); // use when we have a valid email and password to login
      } catch (e) {}
    }
  };
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        <img src={Authentication.src} alt="" />
        <div className="authentication__content">
          "Embrace the art of cooking, where flavors come alive!"
        </div>
        <div className="authentication__header">Login</div>
        <div className="authentication__label">Enter your email to log in</div>

        <Input
          className="authentication__input"
          element="input"
          id="email"
          type="email"
          validators={[VALIDATOR_EMAIL()]}
          placeholder="Enter your email"
          onInput={inputHandler}
        />
        <button className="authentication__button">Continue</button>
        <p className="authentication__register">
          Don't have an account?{" "}
          <Link to="/login" className="login__link" onClick={switchModeHandler}>
            Sign in
          </Link>
        </p>
        <div className="divider">
          <span className="divider-text">OR</span>
        </div>
        <div className="authentication__required">
          By continuing, you agree to the updated{" "}
          <b>Terms of Sale, Terms of Service,</b> and <b>Privacy Policy.</b>
        </div>
        <div className="login-buttons">
          <button className="login-button google">
            <span className="icon">G</span> Continue with Google
          </button>
          <button className="login-button facebook">
            <span className="icon">F</span> Continue with Facebook
          </button>
          <button className="login-button apple">
            <span className="icon"></span> Continue with Apple
          </button>
        </div>
        <div className="authentication__close" onClick={props.onCancel}>
          X
        </div>
        {/* {isLoading && <LoadingSpinner asOverlay />}
        <form onSubmit={authSubmitHandler}>
          <h2>Login Required</h2>
          <hr />
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your name"
              validators={[VALIDATOR_REQUIRE]}
              errorText="Please enter a name"
              onInput={inputHandler}
            ></Input>
          )}
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address"
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid email password, at least 5 characters"
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
        </Button> */}
      </Card>
    </React.Fragment>
  );
}
