import React from "react"
import "../styles/header.scss"

export default function Header({ children }) {
    return (
        <h1 id="header">{children}</h1>
    )
}