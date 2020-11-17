import React, { Component } from 'react';
import './App.css';
import StaffForm from './components/StaffForm';
import Control from './components/Control';
import StaffList from './components/StaffList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: [] 
    }
  }

  render() {
    return (
      <div className="containter">
        <div className="text-center">
          <h1>Quản lý Nhân Viên</h1><hr/>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* Form */}
            <StaffForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5"></span> Add Staff
            </button>
            {/* Search - Sort */}
            <div className="row mt-15">
              <Control />
            </div> 
            {/* List */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <StaffList />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
