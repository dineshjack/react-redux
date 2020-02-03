import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { userById, submitUser } from '../actions/user'
import { connect } from 'react-redux'


class UpdateEmp extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            id: "",
            name: "",
            empid: "",
            email: "",
            dob:"",
            role:"",
            skills:[],
            location:"",
            contact_num:""

        }
        this.onChangeData = this.onChangeData.bind(this);
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
       userById(this.props.match.params.id).then(response => {
        this.setState({
            id : response._id,
            name: response.name,
            empid: response.empid,
            email: response.email,
            dob: response.dob,
            role: response.role,
            skills: response.skills.join(','),
            location: response.location,
            contact_num: response.contact_num,

        });
    });
    }
    onChangeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
          });
          
    }
    submitData = (e) => {
        e.preventDefault()
        const formData = this.state
        console.log(formData);
        this.props.dispatch(submitUser(formData));
        this.setState({
            name: "",
            empid: "",
            email: "",
            dob:"",
            role:"",
            skills:[],
            location:"",
            contact_num:""
        })
    }

    render() {
        return (
            <div>
                <div className='buttons float-right'>
            <Link to='/' className='btn btn-primary'>
              Back
            </Link>
            </div>
                <div className="container mt-5">
                    <h3>Update user</h3>
                    <form className="mt-4" onSubmit={this.submitData} >
                        <div className="col-sm-5 form-group form-inline mx-auto">
                            <label className="col-sm-6" htmlFor="name">Name:</label>
                            <div className="col-sm-6">
                                <input type="text" onChange={this.onChangeData} value={this.state.name}   className="form-control" id="name" placeholder="Enter name" name="name" />
                            </div>
                        </div>
                        <div className="col-sm-5 form-group form-inline mx-auto">
                            <label className="col-sm-6" htmlFor="empid">Emp ID:</label>
                            <div className="col-sm-6">
                                <input type="text" onChange={this.onChangeData} value={this.state.empid}   className="form-control" id="empid" placeholder="Enter EmpID" name="empid" />
                            </div>
                        </div>

                        <div className="col-sm-5 form-group form-inline mx-auto">
                            <label className="col-sm-6" htmlFor="email">Email:</label>
                            <div className="col-sm-6">
                                <input type="text" onChange={this.onChangeData} value={this.state.email}  className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                        </div>
                        <div className="col-sm-5 form-group form-inline mx-auto">
                            <label className="col-sm-6" htmlFor="dob">DOB:</label>
                            <div className="col-sm-6">
                            <input type="date" onChange={this.onChangeData} value={this.state.dob}   className="form-control" id="dob" placeholder="Enter DOB" name="dob" />
                            </div>
                        </div>
                        <div className="col-sm-5 form-group form-inline mx-auto">
                            <label className="col-sm-6" htmlFor="role">Role:</label>
                            <div className="col-sm-6">
                            <select value={this.state.role}  className="form-control" id="role"  name="role" onChange={this.onChangeData}>
                            <option value="">Select Role</option>
                            <option value="Trainee">Trainee</option>
                            <option value="Junior Developer">Junior Developer</option>
                            <option value="Senior developer">Senior developer</option>
                            <option value="Team lead">Team lead</option>
                            <option value="Assistant Manager">Assistant Manager</option>
                            <option value="Manager">Manager</option>
                            </select>
                            </div>
                        </div>

                        <div className="col-sm-5 form-group form-inline mx-auto">
                            <label className="col-sm-6" htmlFor="skills">Skills:</label>
                            <div className="col-sm-6">
                                <input type="text" onChange={this.onChangeData} value={this.state.skills}  className="form-control" id="skills" placeholder="Enter skillls comma separate" name="skills" />
                            </div>
                        </div>
                        <div className="col-sm-5 form-group form-inline mx-auto">
                            <label className="col-sm-6" htmlFor="location">Location:</label>
                            <div className="col-sm-6">
                                <input type="text" onChange={this.onChangeData} value={this.state.location}  className="form-control" id="location" placeholder="Enter location" name="location" />
                            </div>
                        </div>
                        <div className="col-sm-5 form-group form-inline mx-auto">
                            <label className="col-sm-6" htmlFor="contact_num">Contact Number:</label>
                            <div className="col-sm-6">
                                <input type="text" onChange={this.onChangeData} value={this.state.contact_num}  className="form-control" id="contact_num" placeholder="Enter Contact No" name="contact_num" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary"> Update</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps) (UpdateEmp)
