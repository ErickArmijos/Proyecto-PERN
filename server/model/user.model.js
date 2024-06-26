import sequelize from "../config/connection.js";
import { DataTypes} from "sequelize";

const User = sequelize.define("Users",{
    uuid_user:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
    },
    username_user:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email_user:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,
        }
    },
    password_user:{
        type:DataTypes.STRING,
        allowNull:false
    }
},)

export default User;