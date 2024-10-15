import Student from "../routes/student.js"
import Admin from '../routes/admin.js'
import image from '../routes/image.js'
export const configureRoutes = (app)=>{
    app.use('/student',Student)
    app.use('/admin',Admin)
    app.use('/images',image)
}