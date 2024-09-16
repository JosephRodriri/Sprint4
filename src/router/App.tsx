import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { SplashScreen } from "../components/SplasScreen.tsx";
import { Infoinicial } from "../components/Infoinicial.tsx";
import { Singing } from "../components/singin.tsx";
import { SignUn } from "../components/singUn.tsx";
import { Createaccount } from "../components/Createaccount.tsx";
import { Error } from "../components/Blocks/Error.tsx";
import { Phone } from "../components/phone.tsx";
import { Home } from "../components/Home/home.tsx";
import { Editarperfil } from "../components/Extra/Editarperfil.js";
import { Notificaciones } from "../components/Extra/Notificaciones/Notificaciones.tsx";
import { Workoutsadded } from "../components/Extra/Notificaciones/Workoutsadded.tsx";
import { Faq } from "../components/Extra/Faq.tsx";
import { Activity } from "../components/Extra/Activity.tsx";
import { Createexersices } from "../components/Createexersices.tsx";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta al home */}
        <Route path="/home" element={<Home />} />

        {/* Rutas antes del Home */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/informacion" element={<Infoinicial />} />
        <Route path="/singin" element={<Singing />} />
        <Route path="/crearcuenta" element={<Createaccount />} />
        <Route path="/signUn" element={<SignUn />} />
        <Route path="/phone" element={<Phone />} />

        {/* Ruta de error */}
        <Route path="*" element={<Error />} />

        {/* Rutas extra */}
        <Route path="/cuenta" element={<Editarperfil />} />
        <Route path="/noty" element={<Notificaciones />} />
        <Route path="/workoutsadded" element={<Workoutsadded />} />
        <Route path="/createexersices" element={<Createexersices />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}
