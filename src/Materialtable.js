import React, {Component} from 'react';
import MaterialTable from "material-table";


const data = [
  { name: "John", email: "john@gmail.com", age: 12, gender: "Male" },
  { name: "Bren", email: "bren@gmail.com", age: 24, gender: "Male" },
  { name: "Marry", email: "marry@gmail.com", age: 18, gender: "Female" },
  { name: "Shohail", email: "shohail@gmail.com", age: 25, gender: "Male" },
  { name: "Aseka", email: "aseka@gmail.com", age: 19, gender: "Female" },
  { name: "Meuko", email: "meuko@gmail.com", age: 12, gender: "Female" },
];

const columns = [
  {
    title: "Name",
    field: "name",
  },
  {
    title: "Email",
    field: "email",
  },
  {
    title: "Age",
    field: "age",
  },
  {
    title: "Gender",
    field: "gender",
  },
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

    return (
      <div>
        <div>
          <h5>MaterialTable</h5>
          <MaterialTable title="Employee Details" data={data} columns={columns} />
        </div>

      </div>

    );
  }

}