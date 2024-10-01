import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees();     
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
          setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


    const deleteEmployee = (empId) => {
        EmployeeService.deleteEmployeeById(empId).then((response) => {
          
          getAllEmployees();
          
        }).catch(error => {
          console.log(error);
        })
    }

  return (
    <div>
        <div className='container'>
            <h2 className='text-center'>List Employees</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Id</th>
                    <th>Employee</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Address</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>

                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.empid}</td>
                                <td>{employee.name}</td>
                                <td>{employee.age}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.address}</td>
                                <td>
                                    <Link to= {`/edit-employee/${employee.id}`} className='btn btn-info'>Edit</Link>
                                    <button onClick={() => deleteEmployee(employee.id)} className='btn btn-danger' style={{marginLeft:"10px"}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link to='/create-employee' className='btn btn-primary mb-2'>Create Employee</Link>
        </div>  
    </div>
  )
}

export default ListEmployeeComponent
