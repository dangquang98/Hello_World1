import React, { Component } from 'react';

class StaffItem extends Component {

	onDelete = () => {
		this.props.onDelete(this.props.staff.url)
	}

	onUpdate = () => {
		this.props.onUpdate(this.props.staff.url)
	}

	render() {
		var { staff, index } = this.props;
		return (
			<tr>
				<td>{index + 1}</td>
				<td>{staff.name}</td>
				<td className="text-center">
					<span className={staff.gender ? 'label label-danger' : 'label label-success'}>
					{staff.gender ? 'Male' : 'Famale'}
					</span>
				</td>
				<td className="text-center">
					<button
						type="button"
						className="btn btn-warning"
						onClick={this.onUpdate}
					>
						<span className="fa fa-pencil mr-5"></span>Edit
            		</button>
            		&nbsp;
            		<button
						type="button"
						className="btn btn-danger"
						onClick={this.onDelete}
					>
						<span className="fa fa-pencil mr-5"></span>Delete
            		</button>
				</td>
			</tr>
		)
	}
}

export default StaffItem;