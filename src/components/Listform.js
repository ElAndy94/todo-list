import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createItem } from '../store/actions/list';

class Listform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[ e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const listItem = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createItem(listItem);
    }

    render() {
        return (
        <div>
            <h1>Add List Item</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Title: </label><br/>
                    <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                </div>
                <br />
                <div>
                    <label>Body: </label><br/>
                    <textarea name="body" onChange={this.onChange} value={this.state.body} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

Listform.propTypes = {
    createItem: PropTypes.func.isRequired
};

export default connect(null,  { createItem })(Listform);
