/* Dependencies */
import React, { useState, useEffect } from 'react'

/* Components */
import { Card } from './Card'
import { Search } from './Search'
import { ArchivedCard } from './ArchivedCard'

export const ListCards = () => {

    const [notes, setNotes] = useState([
        {id: 1, title: 'Nota 1', content: 'Default note con bastante texto y más texto para probar', date: '', status: true},
    ])

    useEffect(() => {
       let isData = localStorage.getItem('notes');
       if (isData != null) {
           setNotes(JSON.parse(isData))
       }
       else {
        setNotes([
            {id: 2, title: 'Nota 1', content: 'Default note con bastante texto y más texto para probar', date: '', status: true},
            {id: 3, title: 'Nota 2', content: 'Default note con bastante texto y más texto para probar', date: '', status: true},
            {id: 4, title: 'Nota 3', content: 'Default note con bastante texto y más texto para probar', date: '', status: false}
            ])
        setShowArchived(false)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const [showArchived, setShowArchived] = useState(false);

    const printNotes = (statusValue) => {
        return (
            notes
            .filter(note => note.status === statusValue)
            .map(note => <Card key={note.id} note={note} />)
        )
    }

    const createNewNote = (newNote) => {
        setNotes([...notes, {id: 3, title: '', content: newNote, date: '', status: true}])
    }

    return (
        <div>
            <div className="row">
                <h2 className="subtitle">Cards list</h2>
            </div>
            <div className="row">
                <Search callback={createNewNote} />
            </div>
            <div className="row">
                <div className="Notes-wrapper">
                    <div className="tile is-ancestor">
                        {printNotes(true)}
                    </div>
                </div>
            </div>
            <div className="row">
                <ArchivedCard
                    isChecked={showArchived}
                    callback={checked => setShowArchived(checked)}
                />
                {
                    showArchived &&
                    <div>{printNotes(false)}</div>
                }
            </div>
        </div>
    )
}