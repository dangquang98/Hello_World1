import React, { Component } from 'react';

class StaffItem extends Component {

  render() {
    return (    
        <tr>
            <td>0</td>
            <td>Henry</td>
            <td className="text-center">
              <span class="label label-danger">Male</span>
            </td>
            <td className="text-center">
              <button type="button" className="btn btn-warning">
                <span className="fa fa-pencil mr-5"></span>Edit
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                <span className="fa fa-pencil mr-5"></span>Delete
              </button>
            </td>
            <td></td>
        </tr>
    )
  }
}

export default StaffItem;
