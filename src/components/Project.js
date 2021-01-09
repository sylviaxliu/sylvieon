import React from "react"

export default function Project(props) {
    return (
        <div class="project">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
}
