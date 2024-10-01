import React from 'react'
import axios from 'axios'


const EMPLOYEE_REST_API_URL = "http://localhost:8000/api/employee/"

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_REST_API_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_REST_API_URL, employee);
    }

    getEmployeeById(empId) {
        return axios.get(EMPLOYEE_REST_API_URL + empId + "/");
    }

    updateEmployee(empId, employee) {
        return axios.put(EMPLOYEE_REST_API_URL + empId + "/", employee);
    }

    deleteEmployeeById(empId) {
        return axios.delete(EMPLOYEE_REST_API_URL + empId + "/");
    }
}

export default new EmployeeService();