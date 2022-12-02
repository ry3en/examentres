import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import {useState} from 'react';
import Servicios from './components/Servicios';

const root = ReactDOM.createRoot(document.getElementById('root'));
const IniciarS = () => {
    const [sesion, cambiarSesion] = useState(false)
    return (
        <>
            {sesion === false ? (
                <>
                    <div className="App">
                        <header className="App-header">
                            <h1 className={"text-white"}>Bienvenido a Laboratorios Clínicos</h1>
                            <div className="container">
                                <button className={"btn btn-primary"} onClick={() => cambiarSesion(true)}>Comenzar</button>
                            </div>

                        </header>
                    </div>
                </>
            ) : (
                <>
                    <div className="App">
                        <header className="App-header">
                            <h1 className={"text-white"}>Servicios Disponibles</h1>
                            <div className="container">
                                <Servicios/>
                            </div>
                        </header>
                    </div>

                </>
            )}
        </>
    )
}
root.render(
    <IniciarS/>
);
