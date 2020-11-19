import React, { Component } from "react";
import API from "../utils/API";





class EmployeeContainer extends Component {
    state = {
        people: []

    };


    componentDidMount() {
        this.loadManyEmployees();
    };

    // loadOneEmployee() {
    //     API.getOneEmployee()
    //     .then(res => this.setState({ people: res.data }))
    //     .catch(err => console.log(err));
    //     console.log("it's a " + this.state.people);
    // };

    loadManyEmployees() {
        API.getEmployees()
            .then(res => {
                this.setState({ people: res.data.results })

                console.log("get employees ")
                console.log(this.state.people);
            }
            )

    };


    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Headshot</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                    <tr>
                        <td>
                            <img src={this.state.people.length === 0 ? "" : this.state.people[0].picture.medium}></img>
                        </td>
                        <td>{this.state.people.length === 0 ? "" : this.state.people[0].name.first}</td>
                        <td>{this.state.people.length === 0 ? "" : this.state.people[0].name.last}</td>
                        <td>{this.state.people.length === 0 ? "" : this.state.people[0].email}</td>
                        <td>{this.state.people.length === 0 ? "" : this.state.people[0].phone}</td>
                    </tr>
                </table>
      {console.log(this.state.people[0])} 

            </div>
        )
    }
};

export default EmployeeContainer;