import React from 'react'

export const Header = props => {
    return (
        <nav>
            <h1 className="title">{props.title}</h1>
        </nav>
    )
}