import React,{useState} from "react";
import "./Register.css";

const Register = (props) => {

    const [fullName, setFullName,] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName,);
    }

    return (
        <div className="form-conatiner">
           
            <form className="register-form" onSubmit={handleSubmit}>
            <h1>Register</h1>
                <label htmlFor="FullName,">FullName</label>
                <input value={fullName} type="text" placeholder="FullName"  name="fullName,"/>
                <label htmlFor="email">Email</label>
                <input value={email} type="email" placeholder="youremail@gmail.com"  name="email"/>
                <label htmlFor="password">Password</label>
                <input value={password} type="password" placeholder="********"  name="password"/>
                <button className="button-conatiner" type="submit">Register</button>
            </form>
            <button onClick={ () =>props.toggle('login')}>Already registered? Login here</button>
        </div>
    );
};

export default Register;