import express from "express";
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, togglePublish } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

// here we have to add a middleware also , that will pass the image uploaded from frontend , we will use multer package and using it we create middleware

// we have to protect this route so that only authentic user or admin can only login blogpost
blogRouter.post("/add",upload.single('image') , auth, addBlog)
blogRouter.get('/all',getAllBlogs);
blogRouter.get('/:blogId',getBlogById);
blogRouter.post('/delete',auth, deleteBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish)
blogRouter.post('/add-comment',addComment)
blogRouter.post('/comments',getBlogComments)

export default blogRouter;
