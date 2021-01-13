import React from "react"
import "../styles/role.scss"

export default function Role( props ) {
    return (
        <div id="role">
            <div class="name">
                { props.name }
            </div>
            <p class="description">
                { props.description }
            </p>
        </div>
    )
}