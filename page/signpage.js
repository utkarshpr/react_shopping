import React from 'react';
import SignIn from '../components/signcomponent/sign.component'
import SignUp from '../components/signup/signup.component';
import './sign.style.scss';
const SignInAndOut=()=>(
    <div className='sign-in-and-sign-out'><SignIn/><SignUp/></div>
);
export default SignInAndOut;