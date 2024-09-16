import "../assets/style/css/Font.css";
import TextField from "@mui/material/TextField";
import "../assets/style/css/Createaccount.css";
import { useNavigate } from "react-router-dom";
import { Contenidoone, Logo } from "./const.js";
import "../assets/style/css/Font.css";
import {
  Contenedormain,
  Img,
  Contenedoricon,
  Contenedorinput,
  Boton,
} from "../assets/style/stylecomponets/styled.js";
import { useState } from "react";

export function Phone() {


  const navigate = useNavigate(); // Hook de navegación

  const [content, setContent] = useState({
    tittle: "Workout",
    parrafo: "Start training with usand build muscle or lose weight",
    img: "https://res.cloudinary.com/dehpi4905/image/upload/v1725495706/Buffalo%20app/Banner%20registrer/MEN3.jpg",
  });

  const [clickCount, setClickCount] = useState(0);

  const hadleclicks = () => {
    //  Llame a setClickCount para controlar los mensajes que se muestran del arreglo "contenido"
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      const newIndex = newCount % Contenidoone.length;

      if (newCount === 3) {
        navigate("/singin");
      } else {
        setContent(Contenidoone[newIndex]);
      }
      return newCount;
    });
  };

  return (
    <Contenedormain>
      <Contenedoricon>
        <Img src={Logo} alt="logo de la app" />
        <h3>Phone verification</h3>
        <p>Enter the four-digit code from SMS</p>
        <p>SMS not received Send again?</p>
        <Contenedorinput>
          <TextField
            style={{ color: "#fff" }}
            id="outlined-number"
            label="Number"
            type="number"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Contenedorinput>
      </Contenedoricon>
      <Boton onClick={hadleclicks}>Comenzar</Boton>
    </Contenedormain>
  );
}
