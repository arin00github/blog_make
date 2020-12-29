import express from 'express';

//model
import Post from '../../models/post.js';

const router = express.Router()

//api/post
router.get('/', async(req, res)=>{
    const postFindResult = await Post.find();
    //await Post 모델 다 찾을 때까지 밑은 실행하지 않음
    console.log(postFindResult,"All Post Get");
    res.json(postFindResult)
})


router.post('/', async(req, res) =>{
    try{
        console.log(req,"req")
        const{title, contents, fileUrl, creator} = req.body //브라우저가 서버에서 보내는 내용
        const newPost = await Post.create({
            title,contents, fileUrl, creator
        })
        res.json(newPost)
    }catch(err){
        console.log(err)
    }
})

export default router;
//기본 내보내기