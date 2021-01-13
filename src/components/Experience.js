import React from "react"
import "../styles/experience.scss"

export default function Experience( props ) {
    return (
        <div id="experience">
            <div class="name">
                {props.name}
            </div>
            <div class="date">
                {props.startDate} to {props.endDate}
            </div>
            <div class="company">
                {props.company}
            </div>
            <div class="description">
                {props.description}
            </div>
        </div>
    )
}