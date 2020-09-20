import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { logout } from '../actions/userAction';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

function Navbar(props) {
   const userLogin = useSelector(state => state.userLogin);
   const { userInfo } = userLogin;
   const dispatch = useDispatch();

   const handleLogout = () => {
      dispatch(logout());
      props.history.push('/');
   };
   return (
      <BrowserRouter>
         <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
               <div className='container'>
                  <button
                     className='navbar-toggler'
                     type='button'
                     data-toggle='collapse'
                     data-target='#navbarTogglerDemo01'
                     aria-controls='navbarTogglerDemo01'
                     aria-expanded='false'
                     aria-label='Toggle navigation'
                  >
                     <span className='navbar-toggler-icon'></span>
                  </button>
                  <div
                     className='collapse navbar-collapse'
                     id='navbarTogglerDemo01'
                  >
                     <Link to='/' className='navbar-brand'>
                        KeeperNotes
                     </Link>
                     <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                        {userInfo ? (
                           <>
                              <li className='nav-item nav-link'>
                                 Hi, {userInfo.name}
                                 <span className='sr-only'></span>
                              </li>
                              <li className='nav-item '>
                                 <Link
                                    to='/logout'
                                    className='nav-link'
                                    onClick={handleLogout}
                                 >
                                    Logout <span className='sr-only'></span>
                                 </Link>
                              </li>
                           </>
                        ) : (
                           <>
                              <li className='nav-item '>
                                 <Link to='/login' className='nav-link'>
                                    Login <span className='sr-only'></span>
                                 </Link>
                              </li>
                              <li className='nav-item'>
                                 <Link to='/register' className='nav-link'>
                                    Register
                                 </Link>
                              </li>
                           </>
                        )}
                     </ul>
                  </div>
               </div>
            </nav>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/login' exact component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
         </>
      </BrowserRouter>
   );
}

export default Navbar;
