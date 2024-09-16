import { useNavigate } from "react-router-dom";
import { Logo } from "./const.js";
import "../assets/style/css/Font.css";
import React, { useEffect } from "react";
import {
  Contenedormain,
  Img,
  Contenedoricon,
  Contenedortwe,
  LoginGF,
  TextField,
  Contenedorinput,
  Boton,
} from "../assets/style/stylecomponets/styled.js";
import { onAuthStateChanged } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  facebookLogin,
  googleLogin,
  setUser,
  mailLogin,
} from "../redux/slices/userSlice.js";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebaseConfig.js";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define el esquema de validación con Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Correo incorrecto")
    .required("Correo es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener minimo 6 caracteres")
    .required("Contraseña es requerida"),
});

export function Singing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await mailLogin(values.email, values.password);
      dispatch(setUser(response));
      navigate("/home"); // Redirige a /home después del login
    } catch (error) {
      setErrors({ email: "Correo o contraseña incorrectos" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleAuth = async (provider) => {
    try {
      let user;
      switch (provider) {
        case "Google":
          user = await googleLogin();
          break;
        case "Facebook":
          user = await facebookLogin();
          break;
        default:
          break;
      }

      if (user) {
        dispatch(setUser(user));
        navigate("/home"); // Redirige a /home después del login
      }
    } catch (error) {
      console.error("Error during social login", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            isAuthenticated: true,
          })
        );
        navigate("/home"); // Redirige a /home si el usuario ya está autenticado
      }
    });

    return () => unsubscribe(); // Limpia la suscripción al desmontar el componente
  }, [dispatch, navigate]);

  return (
    <Contenedormain>
      <Contenedoricon>
        <Img src={Logo} alt="logo de la app" />
        <h3>
      
          Sing in 
        </h3>
        <Contenedorinput>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  as={TextField}
                  style={{ margin: 10 }}
                  type="email"
                  name="email"
                  placeholder="Email"
                  error={<ErrorMessage name="email" />}
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  style={{ margin: 10 }}
                  type="password"
                  name="password"
                  placeholder="Password"
                  error={<ErrorMessage name="password" />}
                  helperText={<ErrorMessage name="password" />}
                />
                <Boton type="submit" disabled={isSubmitting}>Comenzar</Boton>
              </Form>
            )}
          </Formik>
        </Contenedorinput>
      </Contenedoricon>
      <Contenedortwe>
        <LoginGF>
          <h4>Sign In with </h4>
          <div>
            <Button onClick={() => handleAuth("Google")}>
              <FcGoogle style={{ width: 40, height: 50 }} />
            </Button>
            <Button onClick={() => handleAuth("Facebook")}>
              <FaFacebook style={{ width: 40, height: 50, color: "aqua" }} />
            </Button>
          </div>
        </LoginGF>
      </Contenedortwe>
      <h4>
        Don’t have an account? <Link to={"/signUn"}>Sign Up</Link>
      </h4>
    </Contenedormain>
  );
}
