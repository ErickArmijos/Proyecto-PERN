import "./LoginStyles.css";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <div className="login-page">
      <div className="form">
      <h1 className="name-form">Tasky</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" id="password" placeholder="Password" />
          <br></br>
          <br></br>
          <button>LOGIN</button>
          <p className="message"></p>
        </form>
        <form className="login-form">          
            <Link to="/register" style={{ textDecoration: 'none',color:"white" }}><button type="button" >SIGN UP</button></Link>
        </form>

      </div>
 
        
    </div>
  );
};

export default LoginComponent;
