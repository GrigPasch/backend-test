import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';


const EmployeeTable = () => {
    const [employees, setEmployees] = useState({blogs: []})
    useEffect(() => {
        const fetchEmployeesList = async() => {
            const {data} = await axios("http://dummy.restapiexample.com/api/v1/employees")
            
            setEmployees({blogs: data})
            console.log(data)
        }
        fetchEmployeesList()
    }, [setEmployees])






    return(
        <div>
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employee Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.blogs.data && employees.blogs.data.map((item) => (
                            <tr key = {item.id}>
                                <td>{item.id}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_salary}</td>
                            </tr> 
                        ))
                    }
                </tbody>
            </ReactBootStrap.Table>
        </div>
    )
}


export default EmployeeTable;