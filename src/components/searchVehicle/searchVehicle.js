import React from "react";
import { render } from "react-dom";
import { makeData, Tips } from "./utils";
import matchSorter from 'match-sorter'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class searchVehicle extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Business Unit",
              columns: [
                {
                  Header: "Business Unit",
                  accessor: "businessUnit",
                  filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value)
                }
              ]
            },
            {
              Header: "Campaign",
              columns: [
                {
                  Header: "Campaign",
                  accessor: "campaign",
                  filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value)
                }
              ]
            },
            {
              Header: "Vehicle",
              columns: [
                {
                  Header: "VIN",
                  accessor: "vin"
                },
                {
                  Header: "Registration",
                  accessor: "registration"
                },
                {
				  Header: "Make",
				  accessor: "make"
                },
                {
				  Header: "Model",
				  accessor: "model"
                },
                {
				  Header: "Manufacturer",
				  accessor: "manufacturer"
                },
                {
                  Header: "Active Recalls",
                  accessor: "active"
			    },
			    {
				  Header: "No of recalls",
				  accessor: "recallslinked"
				},

              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
      </div>
    );
  }
}

export default searchVehicle;
