import React, { Component } from 'react';

class Control extends Component {

    render() {
        return (
        /* Search */
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input name="keyword"
                 type="text"
                 className="form-control"
                 placeholder="Search"
          />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button">
              <span className="fa fa-search mr-5"></span>Search Staff
            </button>
          </span>
        </div>
        </div>
        );
    }
}

export default Control;
