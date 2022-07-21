import React from 'react'
import { getInitialData } from './utils';
import NotesBody from './components/NotesBody';
import NotesHeader from './components/NotesHeader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            queryFilter: '',
            searchedNotes: []
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onChangeSearchHandler = this.onChangeSearchHandler.bind(this);
        this.onArchieveNoteHandler = this.onArchieveNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({ notes });
    }

    onChangeSearchHandler(keyword) {
        /*const originalNotes = this.state.notes
        if (keyword || keyword !== '') {
            const searchResult = originalNotes.filter(note => note.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
            this.setState(() => {
                return {
                    searchedNotes: searchResult
                }
            });
        } else {
            this.setState(() => {
                return {
                    searchedNotes: originalNotes
                }
            });
        }*/
        this.setState({
            queryFilter: keyword,
        });    
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: +new Date(),
                    }
                ]
            }
        });
    }

    onArchieveNoteHandler(id) {
        const { notes } = this.state;
        const noteIndex = notes.findIndex((note) => note.id === id);
        notes[noteIndex].archived = !notes[noteIndex].archived;
        return this.setState({ notes });
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(this.state.queryFilter.toLowerCase())
        )
        return (
            <>
                <NotesHeader
                    searchNote={this.onChangeSearchHandler} />
                <NotesBody
                    notes={filteredNotes}
                    onDelete={this.onDeleteHandler}
                    onArchieve={this.onArchieveNoteHandler}
                    onAdd={this.onAddNoteHandler} />
            </>
        );
    }
}

export default App;