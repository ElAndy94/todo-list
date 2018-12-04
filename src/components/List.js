import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchList } from '../store/actions/list';

class List extends Component {
    componentWillMount() {
        this.props.fetchList();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newItem) {
            this.props.list.unshift(nextProps.newItem);
        }
    }

    render() {
        const listItems = this.props.list.map(itemInList => (
            <div key={itemInList.id}> 
                <h3>{itemInList.title}</h3>
                <p>{itemInList.body}</p>
            </div>
        ));
        return (
        <div>
            <h1>List</h1>
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

export default connect(mapStateToProps, { fetchList })(List);