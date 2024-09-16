import { Sectionhome } from "../assets/style/stylecomponets/styled";

import { Contenedormainsroll, Contenedorsroll, Menuscroll, Opcionmain } from "./Blocks/Menuscroll";
import { Carrusel } from "./Blocks/slider";
import { Cards } from "./Blocks/Cards";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function Createexersices() {
  /* Agregar collection

   async function add() {
    Legs.forEach(async (Legs) => {
       await createAsync(Legs);
     });
   } */

  return (
    <Sectionhome>
      {/* Menu scroll de musculos y cards*/}
      <Contenedormainsroll>
        <Contenedorsroll className="animate__animated animate__bounceIn">
          <Button
            variant="contained"
            sx={{
              minWidth: 110,
              lineHeight: 1,
              height: 25,
              background: "#2E3562",
              borderRadius: 10,
            }}
            disableElevation
     
          >
            All body
          </Button>

          <Button
            variant="contained"
            sx={{
              minWidth: 80,
              lineHeight: 1,
              height: 25,
              background: "#2E3562",
              borderRadius: 10,
              color: "gray",
            }}
            disableElevation
          
          >
            Triceps
          </Button>
          <Button
            variant="contained"
            sx={{
              minWidth: 80,
              lineHeight: 1,
              height: 25,
              background: "#2E3562",
              borderRadius: 10,
              color: "gray",
            }}
            disableElevation
     
          >
            Biceps
          </Button>
          <Button
            variant="contained"
            sx={{
              minWidth: 80,
              lineHeight: 1,
              height: 25,
              background: "#2E3562",
              borderRadius: 10,
              color: "gray",
            }}
            disableElevation
      
          >
            Breast
          </Button>
          <Button
            variant="contained"
            sx={{
              minWidth: 80,
              lineHeight: 1,
              height: 25,
              background: "#2E3562",
              borderRadius: 10,
              color: "gray",
            }}
         
            disableElevation
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              minWidth: 80,
              lineHeight: 1,
              height: 25,
              background: "#2E3562",
              borderRadius: 10,
              color: "gray",
            }}
      
            disableElevation
          >
            Legs
          </Button>
        </Contenedorsroll>
      </Contenedormainsroll>

      <Cards musculo={"Legs"}  />

      {/* Agregar collection
      <Button onClick={add}>Agregar</Button> */}
    </Sectionhome>
  );
}
