import React from 'react';
import ReactDOM from 'react-dom';

var data = [
    {active: "Yes", recallPriority: "Alpha", recallNo: "00 26 3701 00", praNo: "00 26 3701 00", description: "Replace front driveshaft", rectified: "No", rectificationDate: "04-04-2018"},
    {active: "Yes", recallPriority: "Beta", recallNo: "00 32 6402 00", praNo: "00 32 6402 00", description: "Replace drivers airbag", rectified: "No", rectificationDate: " "},
    {active: "Yes", recallPriority: "Beta", recallNo: "00 72 9301 00", praNo: "00 72 9301 00", description: "Replace passenger airbag", rectified: "Yes", rectificationDate: "05-01-2018"},
];

var flag = {
    active: true,
    recallPriority: true,
    recallNo: true,
    praNo: true,
    description: true,
    rectified: true,
    rectificationDate: true
}

function upSort(propertyName) {
	if ((typeof data[0][propertyName]) != "number") {
		return function(object1, object2) {
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			return value1.localeCompare(value2);
		}
	}
	else {
		return function(object1, object2) {
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			return value1 - value2;
		}
	}
} 

function downSort(propertyName) {
	if ((typeof data[0][propertyName]) != "number") {
		return function(object1, object2) {
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			return value2.localeCompare(value1);
		}
	}
	else {
		return function(object1, object2) {
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			return value2 - value1;
		}
	}
} 

var TableBox = React.createClass({
	getInitialState: function() {
		return {data:this.props.data};
	},
	sort: function(e) {
		var prop = e.target.innerHTML;
		if (flag[prop] == true)
			this.state.data.sort(upSort(prop));
		else
			this.state.data.sort(downSort(prop));
		flag[prop] = !flag[prop];
		this.setState({data:this.state.data});
	},
	render: function() {
		return (
			<table>
				<thead>
					<tr>
						<th onClick={this.sort}>Active Recall?</th>
						<th onClick={this.sort}>Recall Priority</th>
						<th onClick={this.sort}>Recall No</th>
						<th onClick={this.sort}>PRA No</th>
                        <th onClick={this.sort}>Description</th>
                        <th onClick={this.sort}>Rectified?</th>
                        <th onClick={this.sort}>Rectification Date</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.data.map(function(item, index) {
							return (
								<tr key={index}>
									<td>{item.active}</td>
									<td>{item.recallPriority}</td>
									<td>{item.recallNo}</td>
									<td>{item.praNo}</td>
                                    <td>{item.description}</td>
                                    <td>{item.rectified}</td>
                                    <td>{item.rectificationDate}</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		);
	}
})

ReactDOM.render(
	<TableBox data={data}/>, 
	document.getElementById("tableBox")
);