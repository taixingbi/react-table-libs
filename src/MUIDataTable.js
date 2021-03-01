import React, {Component} from 'react';
import MUIDataTable from "mui-datatables";
//https://github.com/mbrn/material-table/issues/957

const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];



export default class Demo extends Component {
  state = {
    columns: columns,
    data: data,
  }
  
  componentDidMount() {
 
  }

  render() {
    const {data, columns} = this.state;

    const options = {
      filter: 'true',
      onChangeRowsPerPage: 2,
    };

    return (
      <div>
          
        <div>
          <h4> MUIDataTable </h4>

          <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
          />
        </div>
      </div>

    );
  }
}   
