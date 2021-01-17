import React from "react"
import "../styles/role.scss"

export default function Role( props ) {
    return (
        <div id="role">
            <div class="name">
                { props.name }
            </div>
            <div class="date">
                { props.date }
            </div>
        </div>
    )
}