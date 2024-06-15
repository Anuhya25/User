import React, { useState, useEffect } from 'react'
import './Users.css'
import axios from 'axios';

function Users() {

  let [users, setUsers] = useState([]);
  let [err, setErr] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/users")
      .then(response => {
        if (response.status === 201) {
          setUsers(response.data);
        }
      })
      .catch(err => {
        console.log(err)
        if (err.response) {
          setErr(err.message);
        }
        else if (err.request) {
          setErr(err.message);
        }
        else {
          setErr(err.message);
        }
      })
  }, [])

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {
          users.map((userObj) =>
            <div className="col" key={userObj.id}>
              <div className="card">
                <div className="card-body">
                  <p className="display-3 name">{userObj.name}</p>
                  <p className="lead fs-4">{userObj.email}</p>
                  <p className="lead">{userObj.dob}</p>

                  <button className="btn btn-warning float-start">
                    Edit
                  </button>

                  <button className="btn btn-danger float-right">
                    Delete
                  </button>
                </div>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default Users