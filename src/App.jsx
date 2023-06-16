import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonio from './componentes/Testimonio';
import img1 from './imagenes/imagen1.svg'
import img2 from './imagenes/imagen2.svg'
import img3 from './imagenes/Grib_skov.jpg'



function App() {

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Creando mi Primer componente en REACT.</h1>
        <Testimonio
          nombre='Edu Llull'
          pais='España'
          imagen={img3}
          cargo='Tecnico Superior Informatica'
          empresa='Casa'
          testimonio='Soy una persona apasionada de la tecnologia tanto en el desarrollo de Web y el Hardware. A dia de hoy estoy aprendiendo muchos lenguajes de programacion del lado del Cliente.'
        />
        <Testimonio 
          nombre='Marcos Llull'
          pais='España'
          imagen={img2}
          cargo='Gamer'
          empresa='Home'
          testimonio='Soy un chico de 10 años, que se dedica a ser feliz jugando a videojuegos. Me gusta el videojuego llamado Roblox'
        />
      </div>
    </div>
  );

}

export default App
