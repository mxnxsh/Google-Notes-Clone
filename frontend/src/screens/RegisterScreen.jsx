import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userAction';

function RegisterScreen() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const userRegister = useSelector(state => state.userRegister);
   const { loading, error, userInfo } = userRegister;
   const dispatch = useDispatch();
   const submitHandler = e => {
      e.preventDefault();
      dispatch(register(name, email, password));
   };
   return (
      <>
         {loading && <div>Loading...</div>}
         {userInfo && <div>Done...</div>}
         {error && <div>{error}</div>}
         <form onSubmit={submitHandler}>
            <div className='form-group'>
               <label>Name</label>
               <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  onChange={e => setName(e.target.value)}
                  value={name}
               />
            </div>
            <div className='form-group'>
               <label>Email</label>
               <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
               />
            </div>
            <div className='form-group'>
               <label>Password</label>
               <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                  onChange={e => setPassword(e.target.value)}
                  value={password}
               />
            </div>
            <button className='btn btn-primary'>Register</button>
         </form>
      </>
   );
}
export default RegisterScreen;
