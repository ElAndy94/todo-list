import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { fetchList, deleteItem } from '../../store/actions/list';
import * as actions from '../../store/actions/index';
import Button from '../UI/Button/Button';
import './List.css';

class List extends Component {
    constructor(props) {
        super(props)
      
        this.onDelete = this.onDelete.bind(this);
    }
    componentWillMount() {
        this.props.fetchList();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newItem) {
            this.props.list.unshift(nextProps.newItem);
        }
    }

    onDelete = (e) => { this.props.deleteItem(e.target.dataset.id) }

    // onDelete = (e) => {
    //     console.log('hi');
    //     this.props.deleteItem(e.target.dataset.id);
    // }
    // onDelete = (id) => {
    //     console.log('hit');
    //     this.props.deleteItem(id);
        // return () => this.props.deleteItem(id);
    // }

    // onDelete = (id) => () => this.props.deleteItem(id);

    render() {
        const listItems = this.props.list.map(itemInList => (
            <div key={itemInList.id}> 
                <h3 className="title__font--list smaller">{itemInList.title} 
                    <Button 
                        btnType="Delete" 
                        data-id={itemInList.id}
                        onClick={this.onDelete}>
                        {/* // onClick={() => this.onDelete(itemInList.id)}> */}
                        {/* // onClick={this.onDelete.bind(itemInList.id)}>  */}
                        <i className="fas fa-trash-alt"></i>
                    </Button>
                </h3>
                <p className="body__font">{itemInList.body}</p>
            </div>
        ));
        return (
        <div>
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
        deleteItem: (id) => dispatch( actions.deleteItem(id) )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
// export default connect(mapStateToProps, { fetchList, deleteItem })(List);