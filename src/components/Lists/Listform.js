import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createItem } from '../../store/actions/list';
import Button from '../UI/Button/Button';
import './List.css';

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
            <h1 className="title__font">Add List Item</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                    <input type="text" name="title" placeholder="Title..." onChange={this.onChange} value={this.state.title} />
                </div>
                <br />
                <div>
                    <textarea type="text" name="body" placeholder="Body..." rows="3" onChange={this.onChange} value={this.state.body} />
                </div>
                <Button btnType="Submit" type="submit">Submit</Button>
            </form>
        </div>
        )
    }
}

Listform.propTypes = {
    createItem: PropTypes.func.isRequired
};

export default connect(null,  { createItem })(Listform);
