import React from 'react'
import NotesItem from './NotesItem'
import NotesEmpty from './NotesEmpty'


const NotesList = ({ notes, onDelete, onArchieve }) => {
    return (
        <>
            <h2>Catatan Aktif</h2>
            {
                notes.find((note)=>!note.archived) ?
                    <div className="notes-list">
                        {
                            notes
                            .filter((note) => !note.archived)
                            .map((note) => (
                                <NotesItem
                                key={note.id}
                                id={note.id}
                                onDelete={onDelete}
                                onArchieve={onArchieve}
                                note={note} />
                            ))
                        }
                    </div>
                    :
                    <NotesEmpty />
            }

            <h2>Arsip</h2>
            {
                notes.find((note)=>note.archived) ?
                    <div className="notes-list">
                        {
                            notes
                            .filter((note) => note.archived)
                            .map((note) => (
                                <NotesItem
                                key={note.id}
                                id={note.id}
                                onDelete={onDelete}
                                onArchieve={onArchieve}
                                note={note} />
                            ))
                            
                        }
                    </div>
                    :
                    <NotesEmpty />
            }

        </>

    )
}

export default NotesList