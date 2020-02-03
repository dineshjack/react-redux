import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Table } from 'react-bootstrap';
import { loadUser, deleteUser } from '../actions/user'


class ListComponent extends Component {
    
    componentDidMount(){
        this.props.dispatch(loadUser());
    }
    
    deleteRecord = (id) => {
        deleteUser(id).then(res => {
            this.props.dispatch(loadUser());
        });
    }
    
    render() {
                console.log(this.props.data);
        return (
            <div>
                <div className="row mb-5">
                <div className="col-10"></div>
                <div className='col-2 buttons float-right'>
            <Link to='/addEmp' className='btn btn-primary'>
              Add New Employee
            </Link>
            </div>
            </div>
            <div className="row">
            <div className="col-12 table_scr_div mb-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Emp ID</th>
                            <th>Date of Birth</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Skills</th>
                            <th>Location</th>
                            <th>Contact No</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.props.data.map((data, index) => {
                            return <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.empid}</td>
                                <td>{data.dob}</td>
                                <td>{data.email}</td>
                                <td>{data.role}</td>
                                <td>{data.skills.map((skill, idx) => { return <div key={idx} className="skill_box">{skill}</div> })}</td>
                                <td>{data.location}</td>
                                <td>{data.contact_num}</td>
                                <td>
                                   
                                        <div className="act_buttn">
                                            <Link to={`/updateEmp/${data._id}`} className="btn btn-primary mr-4">Edit</Link>
                                            <button onClick={() => this.deleteRecord(data._id)}  className="btn btn-primary mr-4">Delete</button>
                                        </div>
                                      
                                </td>

                            </tr>
                        })}

                    </tbody>
                </Table></div>
                        </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.user        
    }
    
}

export default connect(mapStateToProps)(ListComponent)
