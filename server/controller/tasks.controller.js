import Task from "../model/tasks.model.js";


export const newTask = async (req, res) => {
    try {
        const { name_task } = req.body;
        
        const uuid_user = req.user.uuid;
        
        if(!uuid_user){
            return res.status(200).json({error:"You need to authenticate to create a task"})
        }
        // Crear y guardar la nueva tarea
        const task = new Task({ name_task, uuid_user });
        
        await task.save();

        // Devolver la tarea junto con los datos del usuario
        res.status(201).json({task});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};


export const getTasks = async (req,res)=>{
    try{
        const tasks = await Task.findAll({
            where:{
                uuid_user:req.user.uuid
            }
        })
        if(!tasks){
            return res.status(500).json({message:"The user has no pending tasks."})
        }
        res.status(200).json(tasks)
    }catch(e){
        res.status(500).json({error:e.message})
    }
}

export const getTask = async (req,res) =>{
    try{
        const uuid_task = req.params.id; 
        
        const task = await Task.findByPk(uuid_task);
        if(!task){
            return res.status(500).json({error:"Task not found"})
        }
        res.status(200).json(task);
    }catch(e){
        res.status(500).json({error:e.message})
    }
}

export const updateTask = async (req, res) => {
    try {
        // Fetch the task using the primary key
        const task = await Task.findByPk(req.params.id);
        const { name_task, completed_task } = req.body;

        // Check if the task exists
        if (!task) {
            return res.status(400).json({ error: "Task not found" });
        }

        // Update the task with the new values
        await task.update({ name_task, completed_task });

        // Respond with the updated task
        res.status(200).json({ task });
    } catch (e) {
        // Handle errors and send a 500 status code
        return res.status(500).json({ error: e.message });
    }
};


export const deleteTask = async (req, res) => {
    try {
        // Fetch the task using the primary key
        const task = await Task.findByPk(req.params.id);
        
        // Check if the task exists
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }

        // Delete the task
        await task.destroy();
        
        // Respond with a success message
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (e) {
        // Handle errors and send a 500 status code
        return res.status(500).json({ error: e.message });
    }
};
