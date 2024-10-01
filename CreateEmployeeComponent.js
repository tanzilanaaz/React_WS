import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateEmployeeComponent = () => {
    const {id} = useParams();
    const [empid, setEmpid] = useState();
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [salary, setSalary] = useState();
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmpid(response.data.empid)
            setName(response.data.name)
            setAge(response.data.age)
            setSalary(response.data.salary)
            setAddress(response.data.address)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = {empid, name, age, salary, address}

        if(id) {
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigate('/ems');
            }).catch(error => {
                console.log(error)
            })
        } else {

            EmployeeService.createEmployee(employee).then((response) => {
                navigate('/ems');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    const formTitle = () => {
        if(id) {
            return <h1 className='text-center'>Update Employee</h1>
        } else {
            return <h1 className='text-center'>Create Employee</h1>
        }
    }

    const submitButtonTitle = () => {
        if(id) {
            return "Update Employee";
        } else {
            return "Create Employee";
        }
    }

    return (
        <div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {formTitle()}
                        <div className='card-body'>

                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Employee Id</label>
                                    <input 
                                        type="text" 
                                        placeholder='Employee Id' 
                                        name="empid" 
                                        className='form-control' 
                                        value={empid}
                                        onChange={(e) => setEmpid(e.target.value)}>
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Name</label>
                                    <input 
                                        type="text" 
                                        placeholder='Employee Name' 
                                        name="name" 
                                        className='form-control' 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}>
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Age</label>
                                    <input 
                                        type="text" 
                                        placeholder='Employee Age' 
                                        name="age" 
                                        className='form-control' 
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}>
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Salary</label>
                                    <input 
                                        type="text" 
                                        placeholder='Employee Salary' 
                                        name="salary" 
                                        className='form-control' 
                                        value={salary}
                                        onChange={(e) => setSalary(e.target.value)}>
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Address</label>
                                    <input 
                                        type="text" 
                                        placeholder='Employee Address' 
                                        name="address" 
                                        className='form-control' 
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}>
                                    </input>
                                </div>
                                <button onClick={(e) => saveEmployee(e)} className='btn btn-success'>{submitButtonTitle()}</button>
                                <Link to="/ems" className="btn btn-danger offset-md-1">Go to List Employee</Link>
                            </form>
                        
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
    }

export default CreateEmployeeComponent