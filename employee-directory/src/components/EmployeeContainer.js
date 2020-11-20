import React, { Component } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import API from "../utils/API";

const lastNameBtn = document.querySelector(".fas")
class EmployeeContainer extends Component {
    state = {
        people: [],
        search: ""
    };


// haven't gotten this to work yet. Commented out for now.
    // sortByLastName = () => {
    //     this.state.people.sort((a, b) =>{
    //         return (a.this.state.people.name.last - b.this.state.people.name.last);
    //     });
    //     console.log(this.state.people)
    // }

    componentDidMount() {
        this.loadManyEmployees();
    };

    loadManyEmployees() {
        API.getEmployees()
            .then(res => {
                this.setState({ people: res.data.results })
            })
    };

    updateSearch(event) {
        this.setState({ search: event.target.value });
    }

    render() {

        console.log(this.state.people)
        return (
            <div>
                <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}></input>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col" >Picture</th>
                            <th scope="col" >Firstname</th>
                            <th scope="col" className="lastName" onClick={this.sortByLastName}>
                                Lastname   
                                <i className="fas fa-sort" ></i>
                                </th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>
                                {this.state.people.length === 0 ? "" : console.log(this.state.people[0])}
                                <img src={this.state.people.length === 0 ? "" : this.state.people[0].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[0].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[0].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[0].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[0].phone} </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[1].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[1].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[1].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[1].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[1].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[2].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[2].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[2].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[2].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[2].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[3].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[3].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[3].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[3].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[3].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[4].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[4].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[4].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[4].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[4].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[5].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[5].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[5].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[5].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[5].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[6].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[6].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[6].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[6].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[6].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[7].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[7].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[7].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[7].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[7].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[8].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[8].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[8].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[8].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[8].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[9].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[9].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[9].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[9].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[9].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[10].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[10].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[10].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[10].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[10].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[11].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[11].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[11].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[11].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[11].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[12].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[12].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[12].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[12].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[12].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[13].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[13].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[13].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[13].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[13].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[14].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[14].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[14].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[14].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[14].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[15].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[15].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[15].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[15].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[15].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[16].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[16].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[16].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[16].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[16].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[17].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[17].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[17].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[17].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[17].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[18].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[18].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[18].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[18].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[18].phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={this.state.people.length === 0 ? "" : this.state.people[19].picture.medium}></img>
                            </td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[19].name.first}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[19].name.last}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[19].email}</td>
                            <td>{this.state.people.length === 0 ? "" : this.state.people[19].phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div >
        )
    }
};

export default EmployeeContainer;








                //      {this.state.people.map((result, index) => {
                //         console.log(result);
                //         console.log(index);
                //         <tr>
                //             <th scope="row">{index}</th>
                //             <td>
                //                 <img src={result.picture.medium}></img>
                //             </td>
                //             <td>{result.name.first}</td>
                //             <td>{result.name.last}</td>
                //             <td>{result.email}</td>
                //             <td>{result.phone}</td>
                //         </tr>
                //     })
                // }