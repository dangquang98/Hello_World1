import React, { Component } from 'react';
import StaffItem from './StaffItem';

class StaffList extends Component {

  render() {
    return (    
        <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Name</th>
            <th className="text-center">Gender</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                name="filterName" 
              />
            </td>
            <td>
              <select
                className="form-control"
                name="filterGender"
              >
                <option value={-1}>All</option>
                <option value={0}>Male</option>
                <option value={1}>Famale</option>
              </select> 
            </td>
            <td></td>
          </tr>
          <StaffItem />
        </tbody>
      </table>
    )
  }
}

export default StaffList;
