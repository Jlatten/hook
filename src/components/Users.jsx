import React, {useState, useEffect, Fragment} from 'react';
import { Router, Route, Link, Switch} from 'react-router-dom';
import User from './Users';
import UserID from './UserID';


const User =() => {
const [users, setUsers] = useState ([]);

const getUsers = async () => {
    let res= await fetch ('https://jsonplaceholder.typicode.com/users')
    let users= await res.json()
    setUser(user);
}
useEffect(()=> {
    getUsers();
},[]);

return (
    <div className='container'>
        <div className='row'>
        <   div className='col-md-12'>
                {users.map((user,id)=>{
                    return(
                        <Fragment key={id}>
                            <div className="card">
                                <div className="card-body">
                                <h2>{user.name}</h2>
                                <Link to={`/${user.id}/details/`}><button> Show Info!</button></Link>
                                </div>
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    </div>
)


}

export default User;