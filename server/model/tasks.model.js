import sequelize from "../config/connection.js";
import { DataTypes, UUIDV4 } from "sequelize";
import User from "./user.model.js"

const Task = sequelize.define("Tasks",{
    uuid_task:{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue:UUIDV4
    },
    name_task:{
        type:DataTypes.STRING,
        allowNull:false
    },
    completed_task:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false,
    },
    uuid_user:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:User,
            key:'uuid_user'
        }
    }
})

// Relations

Task.belongsTo(User,{foreignKey:'uuid_user',targetKey:'uuid_user'})


export default Task;