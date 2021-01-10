import React from "react"
import "../styles/title.scss"

export default function Title({ children }) {
    return (
        <h1 id="title"> { children } </h1>
    )
}