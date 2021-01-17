import React from "react"
import { Link } from "gatsby"
import "../styles/project.scss"

export default function Project(props) {
    return (
        <div id="project">
            <h1>{ props.name }</h1>
            <p>{ props.createdDate }</p>
            <p>{ props.codedIn }</p>
            <p>{ props.description }</p>
            <Link to={props.githubLink} id="button">github</Link>
        </div>
    );
}
