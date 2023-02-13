import React,{useState} from "react";
import './Login.css';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    return (
        <div className="form-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit ={handleSubmit} >
                <label htmlFor="email">Email</label>
                <input value={email} type="email" placeholder="youremail@gmail.com"  name="email"/>
                <label htmlFor="password">Password</label>
                <input value={password} type="password" placeholder="********"  name="password"/>
                <button className="button-container" type="submit">Login</button>
            </form>
            <button onClick={() => props.toggle('register')} >Not registered? Register here</button>
        </div>
    );
};

export default Login;
