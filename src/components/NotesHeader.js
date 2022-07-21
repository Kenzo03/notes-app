import React from 'react';

class NotesHeader extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            keyword: '',
        }

        this.onKeywordChangeEventHandler = this.onKeywordChangeEventHandler.bind(this);
    }

    onKeywordChangeEventHandler(event) {
        this.setState(() => {
            return {
                keyword: event.target.value,
            }
        });
        this.props.searchNote(event.target.value);
    }

    render() {
        return (
            <div className='note-app__header'>
                <h1>Notes</h1>
                <input
                    type="text"
                    maxLength="50"
                    placeholder="Cari Catatan ..."
                    value={this.state.keyword}
                    onChange={this.onKeywordChangeEventHandler}
                    className='note-input__title' />
            </div>
        )
    }
}

export default NotesHeader;