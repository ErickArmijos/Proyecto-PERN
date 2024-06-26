import {useForm} from "react-hook-form"
import "./RegisterStyles.css"
import { Link } from "react-router-dom";
import apiAxios from "../api/axios.js";

const RegisterComponent = () => {
  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm();
    
  const onSubmit = handleSubmit(async (data)=>{
    await apiAxios.post("/register",data).then((res)=>console.log("Usuario registrado")).catch((e)=>console.error("errroor:",e));
  })
    return (
        <div className="login-page">
        <div className="form">
        <h1 className="name-form">Tasky</h1>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Username" {...register("username_user",{required:true})} />
            <input type="emai" placeholder="E-mail" {...register("email_user",{required:true})} />
            <input type="password" id="password" placeholder="Password" {...register("password_user",{required:true})} />
            <br></br>
            <br></br>
            <button type="submit" onclick="window.location.href='login.html'">
              SIGN UP
            </button>
        </form>
        <h4 className="question-text">Do you have an account? <Link to="/login" style={{color:"white" }}> Login</Link></h4>
        </div>
      </div>
    )
}


export default RegisterComponent;