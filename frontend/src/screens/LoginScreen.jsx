import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../actions/userAction';

function LoginScreen(props) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const userLogin = useSelector(state => state.userLogin);
   const { loading, userInfo, error } = userLogin;
   const dispatch = useDispatch();
   useEffect(() => {
      if (userInfo) {
         props.history.push('/');
      }
      return () => {
         // cleanup
      };
   }, [userInfo]);
   const submitHandler = e => {
      e.preventDefault();
      dispatch(login(email, password));
   };
   return (
      <>
         {loading && <div>Loading....</div>}
         {error && <div>{error}</div>}
         {userInfo && <div>Done....</div>}
         <form onSubmit={submitHandler}>
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
            <button className='btn btn-primary'>Login</button>
         </form>
      </>
   );
}
export default LoginScreen;
