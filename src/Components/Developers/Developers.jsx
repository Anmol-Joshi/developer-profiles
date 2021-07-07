/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import './Developers.css';
import DisplayDevelopers from '../DisplayDevelopers/DisplayDevelopers';

class Developers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { developers: [], value: '', searchResult: [] };
    }

    componentDidMount() {
        axios.get('https://developer-profiles.herokuapp.com/api/developers').then((res) => {
            this.setState({ developers: res.data });
        });
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        if (event.target.value === '') {
            this.setState({ searchResult: [] });
        }
        this.searchDeveloper(event.target.value);
    };

    searchDeveloper = (searchInput) => {
        const res = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const developer of this.state.developers) {
            if (developer.id.toLowerCase().includes(searchInput.toLowerCase())) {
                res.push(developer);
            }
            this.setState({ searchResult: res });
        }
    };

    render() {
        return (
            <div style={{ width: '100%' }}>
                <div className="developers-search-input-div">
                    <input
                        className="developers-search-input"
                        value={this.state.value}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Search for username"
                    />
                    <svg
                        // onClick={this.searchDeveloper}
                        className="developers-search-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                </div>
                {this.state.value === '' ? (
                    <DisplayDevelopers developers={this.state.developers} />
                ) : (
                    <DisplayDevelopers developers={this.state.searchResult} />
                )}
            </div>
        );
    }
}

export default Developers;
