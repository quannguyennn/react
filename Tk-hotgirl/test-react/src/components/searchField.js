import React, { Component } from 'react';

class SearchField extends Component {
    textChange = event => {
        this.props.onSearchChange(event.target.value);
    }
    render() { 
        return (
            <form className="col-3">
                <input onChange={this.textChange} className="form-control" type="text" placeholder="Search" />
            </form>
        );
    }
}
 
export default SearchField ;