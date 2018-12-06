import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Button from '../UI/Button/Button';
import './List.css';

class List extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            counter: 0,
            itemToEdit: '',
            body: '',
            editing: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillMount() {
        this.props.fetchList();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newItem) {
            this.props.list.unshift(nextProps.newItem);
        }
    }

    onChange(e) {
        this.setState({[ e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(e);
        const itemGettingEdit = {
            title: this.state.itemToEdit,
            body: this.state.body
        }
        console.log(itemGettingEdit);
        this.setState({itemToEdit: '', editing: false});
        this.props.editItem(itemGettingEdit);
    }

    // onDelete = (e) => { this.props.deleteItem(e.target.dataset.id); }

    // onDelete = (e) => {
        // this.props.deleteItem(e.target.dataset.id);
    // }

    onDelete = (id) => {
        if (this.state.counter === 1){
            this.props.deleteItem(id, true);
            return;
        }
        this.props.deleteItem(id, false);
        this.setState({ counter: 1 });
    }

    onEdit = (id, body) => {
       this.setState({ itemToEdit: id, editing: true, body: body });
    }

    // onDelete = (id) => () => this.props.deleteItem(id);

    render() {
        const listItems = this.props.list.map(itemInList => (
            <div key={itemInList.id}> 
                <h3 className="title__font--list smaller">{itemInList.title} 
                    <Button  
                        btnType="Delete" 
                        clicked={() => this.onDelete(itemInList.id)}>
                        {/*  data-id={itemInList.id} */}
                       <i className="fas fa-trash-alt"></i> 
                    </Button>
                    <Button  
                        btnType="Edit" 
                        clicked={() => this.onEdit(itemInList.id, itemInList.body)}>
                        <i className="fas fa-edit"></i>
                    </Button>
                </h3>
                { 
                    this.state.itemToEdit === itemInList.id && this.state.editing ?
                    <form onSubmit={this.onSubmit}>
                        <textarea type="text" name="body" placeholder={itemInList.body} value={this.state.body} rows="3" onChange={this.onChange} /> 
                        <Button btnType="Submit" type="submit">Submit</Button>
                    </form>
                    : 
                    <p className="body__font">{itemInList.body}</p> 
                }
            </div>
        ));
        return (
        <div className="max__size">
            <h1 className="title__font">List</h1>
            { listItems }
        </div>
        );
    };
};

List.propTypes = {
    fetchList: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    newItem: PropTypes.object
};

const mapStateToProps = state => ({
    list: state.list.items,
    newItem: state.list.item
});

const mapDispatchToProps = dispatch => {
    return {
        fetchList: () => dispatch( actions.fetchList() ),
        deleteItem: (id, bool) => dispatch( actions.deleteItem(id, bool) ),
        editItem: (itemGettingEdit) => dispatch( actions.editItem(itemGettingEdit) )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);