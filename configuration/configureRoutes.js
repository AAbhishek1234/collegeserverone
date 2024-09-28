import Student from "../routes/student.js"
export const configureRoutes = (app)=>{
    app.use('/student',Student)
}