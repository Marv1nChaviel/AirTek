import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
 export function App () { 
  return (
    <BrowserRouter className={styles.main}>
     <Routes>


     <Route exact path="/" element={

      <div>
        <header className={styles.nav}>

     <h1>Movies</h1>
  
     <ul>
       
      <li><a href="/app">Movies</a></li>
      <li> <a href="/">Home</a></li>

     </ul>

     </header>
      
      <main className={styles.moviesgrid}>
      <LandingPage></LandingPage>
      </main>
      
      
      </div>
        
   

   

    }></Route>
    
      {/***********************************************************pagina Principal*******************************************************/}
      <Route exact path="/app" element={
       
      <div>
      <header className={styles.nav}>
       <ul>
        <li> <a href="/app">Movies</a></li>
        <li><a  href="/">Home</a></li>
       </ul>
      <h1 className={styles.title}>Movies</h1>

      <form><input className={styles.input} type="text" placeholder="Que Pelicula quieres ver ?" /></form>
      </header>

      {/*****************************************************************MAIN*************************************************************/}
      <main>
        <MoviesGrid></MoviesGrid>
      </main>
      
      </div>
      }></Route>
   {/*******************************************************************Details************************************************************/}
       
         </Routes>
    </BrowserRouter>
  );
    
}

