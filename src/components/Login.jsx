import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {login, logout} from '../features/user'

const Login = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.value)
    return (
        <div>
            {user?.name === '' 
            ? <button onClick={() => dispatch(login({name: 'Pedro', age: 20, email: 'pedro@pedro.com'}))}>Login</button> 
            : <button onClick={() => dispatch(logout())}>Logout</button>
            }
        </div>
    )
}

export default Login
