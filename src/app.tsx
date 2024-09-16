import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SplashScreen } from "./Component/SplasScreen";
import { Infoinicial } from "./Component/Infoinicial";
import { Singing } from "./Component/singin";
import { Createaccount } from "./Component/Createaccount";
import { SignUn } from "./Component/singUn";
import { Phone } from "./Component/phone";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Ruta al home */}
          <Route path="/" element={<SplashScreen />} />

          {/* Rutas antes del Home */}
          <Route path="/" element={<SplashScreen />} />
          <Route path="/informacion" element={<Infoinicial />} />
          <Route path="/singin" element={<Singing />} />
          <Route path="/crearcuenta" element={<Createaccount />} />
          <Route path="/signUn" element={<SignUn />} />
          <Route path="/phone" element={<Phone />} />

          {/* Ruta de error
          <Route path="*" element={<Error />} /> */}

          {/* Rutas extra
          <Route path="/cuenta" element={<Editarperfil />} />
          <Route path="/noty" element={<Notificaciones />} />
          <Route path="/workoutsadded" element={<Workoutsadded />} />
          <Route path="/createexersices" element={<Createexersices />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/faq" element={<Faq />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
