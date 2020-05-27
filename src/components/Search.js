import React, { Fragment, useState } from 'react'

export const Search = (props) => {

    const [newNote, setNewNote] = useState('')

    const handleInputChange = e => setNewNote(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        props.callback(newNote)
        setNewNote('')
    }


    return (
        <Fragment>
            <div className="SearchForm-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Find a repository"
                                value={newNote}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}