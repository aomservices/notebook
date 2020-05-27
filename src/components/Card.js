import React from 'react'

export const Card = props => {
    const { id, title, content, status } = props.note
    return (
        <div>
            <div className="tile is-ancestor" key={id}>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">{title}</p>
                        <p className="subtitle">{id}</p>
                        <div className="content">
                            <p>{content}</p>
                        </div>
                        <p className="subtitle">{status}</p>
                    </article>
                </div>
            </div>
        </div>
    )
}
