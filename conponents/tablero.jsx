import React from "react"
import { Casillas } from "./casillas"

export function Tablero() {
    return (
        <div>
            <div class="casillas"> <Casillas /> </div>
            <div class="casillas"> <Casillas /> </div>
            <div class="casillas"> <Casillas /> </div>
        </div>
    )
}
