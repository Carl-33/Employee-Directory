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
        .then(res =>{
             this.setState({ people: res.data.results })
        
        console.log("get employees ") 
        console.log(this.state.people);
        }
        )

    };
   

    render() {
        return (
            <div>
                <h1>Hi {this.state.people.length === 0 ? "" : this.state.people[0].name.first} {console.log(this.state.people[0])} </h1>
            </div>
        )
    }
};

export default EmployeeContainer;