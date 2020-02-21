import React from "react";
import Search from "./components/Search";
import API from "./../utils/API"


class Employee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            users: [],
            filterUser: []
        }

    }

    filtredList = (event) => {
        //let items = this.state.users;
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            let values = Object.values(item)
                .join("")
                .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filterUser: filteredList });

    
    sortEmployee = (event) => {
        var sortName = this.state.filterUser.slice(0);
        
        sortName.sort(function (a, b, key=(event.target.innerText).toLowerCase()) {
            var x = a.name[key];
            var y = b.name[key];
            console.log(event.target.innerText)
            console.log(x, y)
            return x < y ? -1 : x > y ? 1 : 0;
        });

        this.setState({ filterUser: sortName })
    }

    componentDidMount() {
        API.getUsers()
            .then(newData => this.setState({ loading: false, users: newData.data.results, filterUser: newData.data.results }))
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }

        return (

            <div>
                <Search onChange={this.filtredList} />
                <div className="personList">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th onClick={this.sortEmployee}>First</th>
                                <th onClick={this.sortEmployee}>Last</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.filterUser.map(person => (
                                <tr>
                                    <td><img src={person.picture.thumbnail} /></td>
                                    <td>{person.name.first}</td>
                                    <td>{person.name.last}</td>
                                    <td>{person.phone.toString()}</td>
                                    <td>{person.email}</td>
                                    <td>{person.dob.date.substring(0, person.dob.date.length - 14).toString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default Employee;


