import React, { Component } from 'react';
import './App.css';
import StaffForm from './components/StaffForm';
import Control from './components/Control';
import StaffList from './components/StaffList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      staffs: [], //id: unique, name, gender
      isDisplayForm: false,
      staffEditing: null
    }
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('staffs')) {
      var staffs = JSON.parse(localStorage.getItem('staffs'));
      this.setState({
        staffs: staffs
      });
    }
  }

  s4() {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1); 
  }

  generateID() {
    return this.s4() + this.s4() + this.s4() + this.s4();
  }

  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.staffEditing !== null){
      this.setState({
        isDisplayForm: true,
        staffEditing: null
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        staffEditing: null
      }); 
    } 
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm : false
    }); 
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  onSubmit = (data) => {
    var { staffs } = this.state;
    if(data.id === '') { 
      data.id = this.generateID();
      staffs.push(data);
    } else {
      var index = this.findIndex(data.id);
      staffs[index] = data
    }
    this.setState({
      staffs: staffs,
      staffEditing: null
    });
    localStorage.setItem('staffs', JSON.stringify(staffs));
  }

  findIndex = (id) => {
    var { staffs } = this.state;
    var result = -1
    staffs.forEach((staff, index) => {
      if(staff.id === id) {
        result = index
      }
    });
    return result
  }

  onDelete = (id) => {
    var { staffs } = this.state;
    var index = this.findIndex(id);
    console.log(index);
    if(index !== -1) {
      staffs.splice(index, 1);
      this.setState({
        staffs : staffs
      });
      localStorage.setItem('staffs', JSON.stringify(staffs));
    }
  }

  onUpdate = (id) => {
    var { staffs } = this.state;
    var index = this.findIndex(id);
    var staffEditing = staffs[index];
    this.setState({
      staffEditing: staffEditing
    })
    this.onShowForm();
  }

  render() {
    var { staffs, isDisplayForm, staffEditing } = this.state;
    var elmStaffForm = isDisplayForm ? 
        <StaffForm 
          onSubmit={this.onSubmit}
          onCloseForm={this.onCloseForm}
          staff={staffEditing}
        /> : '';
    return (
      <div className="containter">
        <div className="text-center">
          <h1>Quản lý Nhân Viên</h1><hr/>
        </div>
        <div className="row">
          <div className= { 
              isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {/* Form */}
            { elmStaffForm }
          </div>
          <div className= { 
              isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick= { this.onToggleForm }
              >
                <span className="fa fa-plus mr-5"></span> Add Staff
            </button>
            {/* Search - Sort */}
            <div className="row mt-15">
              <Control />
            </div> 
            {/* List */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <StaffList 
                  staffs={ staffs }
                  onDelete={this.onDelete}
                  onUpdate={this.onUpdate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
