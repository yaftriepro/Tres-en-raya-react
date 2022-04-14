import React from 'react';
import { Tablero } from "./components/tablero"
import "./app.css"

export function App () {
    return (
        <div class="container">
            <div class="h1">
                <h1>Tres en Raya</h1>
            </div> 
            <Tablero />
        </div>
    )
}

