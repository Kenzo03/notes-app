import React from 'react'
import NotesList from './NotesList'
import NotesForm from './NotesForm'

const NotesBody = ({ notes, onDelete, onArchieve, onAdd }) => {
    return (
        <div className='note-app__body'>

            <NotesForm 
                addNote={onAdd}/>
            <NotesList
                notes={notes}
                onDelete={onDelete}
                onArchieve={onArchieve}
            />
        </div>
    )
}

export default NotesBody