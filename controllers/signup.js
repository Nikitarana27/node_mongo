
// const task = require('../models/task')
const signup = require('../models/Signup')


const getAllTasks = async (req, res) => {
    try {
        const task = await signup.find({})
        res.status(200).json({ task })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const createTask = async (req, res) => {
    try {
        // res.render(index)
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        if (password == cpassword) {
            // const Task = new signin({
            //     name: req.body.name,
            //     userid: req.body.userid,
            //     emailID: req.body.emailID,
            //     password: req.body.password,
            //     cpassword: req.body.cpassword,
            // })
            // const task = await signup.create(req.body.name,req.body.userid,req.body.emailID,req.body.password,req.body.cpassword);
            const task = await signup.create(req.body);
            // res.status(201).render(index)
        
             res.status(200).json({ task })
            //  res.send('../public/index');
            // res.send('data submitted');

        } else {
            res.send('error in data');
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await signup.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: 'no task with id: ' + taskID });
        }
        res.status(200).json({ task })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
    // res.json({id:req.params.id})
}
// const updateTask =async (req,res)=>{
//     try{
//         const { id: taskID } = req.params
//         const task = await signup.findOneAndUpdate({_id:taskID}, req.body,{
//             new:true,
//             runValidators:true,
//         });

//         if(!task){
//             return res.status(404).json({msg:'no task with id: '+ taskID});
//         }
//         // res.send('task delete');
//         res.status(200).send('task updated to' + task);
//    }catch(err){
//     res.status(500).json({ msg: err })
//    }
//     // res.json(req.body)
// }
// const deleteTask =async (req,res)=>{
//     try{
//         const { id: taskID } = req.params
//         const task = await signup.findOneAndDelete({_id:taskID});
//         if(!task){
//             return res.status(404).json({msg:'no task with id: '+ taskID});
//         }
//         // res.send('task delete');
//         res.status(200).send('task delete' + task);
//    }catch(err){
//     res.status(500).json({ msg: err })
//    }
//     // res.json(req.body)
// }
module.exports = {
    getAllTasks, createTask, getTask,
    // updateTask,deleteTask,
}