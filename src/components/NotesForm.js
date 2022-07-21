import React from 'react';

class NotesForm extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2>Buat Catatan</h2>
                <div className='note-input__title__char-limit'>{'Sisa karakter: ' + (50 - this.state.title.length)}</div>
                <input 
                    type="text" 
                    maxLength="50"
                    placeholder="Title" 
                    value={this.state.title} 
                    onChange={this.onTitleChangeEventHandler} 
                    className='note-input__title'/>
                <textarea 
                    type="text" 
                    placeholder="Body" 
                    value={this.state.body} 
                    onChange={this.onBodyChangeEventHandler} 
                    className='note-input__body'/>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NotesForm;