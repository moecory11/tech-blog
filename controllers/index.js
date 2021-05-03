const router = require('express').Router();
const apiRoutes = require('./api');
const { Blog } = require("../models");

router.use('/api', apiRoutes);

router.get("/", async (req,res)=> {
    const allBlogs = await Blog.findAll();
    console.log(allBlogs);
    const allBlogsJson = allBlogs.map(blog=>blog.get({plain:true}));
    console.log("============================================================")
    console.log(allBlogsJson);
    res.render("index",{
        blogs:allBlogsJson
    });
})

router.get("/blog/:id", async (req,res)=>{
    const blogData = await Blog.findByPk(req.params.id);
    const blogDataJson = blogData.get({plain:true});

    res.render("viewblog", blogDataJson)
})

router.get("/login", (req, res)=>{
    res.render('login')
})

module.exports = router;
