/* Dependencies */
import React, { useState } from 'react'

/* Components */
import { Card } from './Card'
import { Search } from './Search'

export const ListCards = () => {

    const [notes, setNotes] = useState([
        {id: 1, title: 'Nota 1', content: 'Default note con bastante texto y más texto para probar', date: '', status: 'active'},
        {id: 2, title: 'Nota 2', content: 'Default note con bastante texto y más texto para probar', date: '', status: 'active'}
    ])

    const printNotes = () => {
        return notes.map(note => <Card key={note.id} note={note} />)
    }

    const createNewNote = (newNote) => {
        setNotes([...notes, {id: 3, title: '', content: newNote, date: '', status: 'active'}])
    }

    return (
        <div>
            <h2 className="subtitle">Cards list</h2>
                <Search callback={createNewNote} />
                <div className="Notes-wrapper">
                    <div className="tile is-ancestor">
                        {printNotes()}
                    </div>
            </div>
        </div>
    )
}