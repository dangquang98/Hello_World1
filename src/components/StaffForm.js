import React, { Component } from 'react';

class StaffForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: true
    } 
  }

  onCloseForm = () => {
    this.props.onCloseForm()
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name // đặt mục tiêu ở vị trí name or gender
    var value = target.value // hiển thị giá trị của text
    
    if(name === 'gender'){
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name: '',
      gender: true
    });
  }

  render() {
    return (
        <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Add Staff
                  <span className="fa fa-times-circle text-right"
                        onClick={this.onCloseForm}
                  ></span>
                </h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Name :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <label>Gender :</label>
                  <select
                    className="form-control"
                    name="gender"
                    value={this.state.gender}
                    onChange = {this.onChange}
                  >
                    <option value={true}>Male</option>
                    <option value={false}>Famale</option>
                  </select><br/>
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning">
                      <span className="fa fa-plus mr-5"></span>Save
                    </button>&nbsp;
                    <button 
                      type="button"
                      className="btn btn-danger"
                      onClick={this.onClear}
                      >
                      <span className="fa fa-close mr-5"></span>Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
        )
    }
}

export default StaffForm;
