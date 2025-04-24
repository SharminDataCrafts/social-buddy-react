import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { MainContext } from '../../App';
import Comment from '../Comment/Comment';



const PostDetails = () => {
    const {postId} = useParams();
    // console.log(postId);
    const [userPost, setUserPost] = useState([]);
    const [user, setUser] = useState(null)
    const [comments, setComments] = useState([]);

    const allPosts = useContext(MainContext);
    // console.log(allPosts)
    
    // fetch Comments
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComments(data));
    },[postId]);
    // console.log(comments)

    // find user
    useEffect(()=>{
        setUserPost( allPosts.find(post=>post.id===Number(postId)));
    },[allPosts, postId]);
    // console.log(userPost?.userId);

    // fetch userInfo
    useEffect(()=>{
        let url=`https://jsonplaceholder.typicode.com/users/${userPost?.userId}` 
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data));
    },[userPost]);
    // console.log(user);

    return (
        // <div>
        //     <h3>{postId}</h3>
        //     <h4>{post.length}</h4>
        // </div>

        <Card sx={{ display: 'flex', width:'800px', margin:'auto', marginTop:3}}  >
            <CardContent>
                <Typography component="div" variant="h5">
                     User Id {userPost?.userId}
                </Typography>
                <CardMedia
                    component="img"
                    sx={{ width: 80, height:80, borderRadius:'50%',margin:'auto' }}
                    image="https://res.cloudinary.com/dkl8hgdxb/image/upload/v1744654357/podmatch-UpiF461EAHU-unsplash_u65hft.jpg"
                    alt="Live from space album cover"
                />
                
                <Typography component="div" variant="p">
                  <b> userName:</b> {user?.username}
                </Typography>
                <hr />
                <Typography component="div" variant="p">
                    <b>Post Title:</b> {userPost?.title}
                </Typography> 
                <br /> 
                <Typography component="div" variant="p" >
                    <b>Post:</b> <i> {userPost?.body}</i>
                </Typography>
            <br />
            <Typography component="div" variant="p" >
                    <b>Name:</b> <i> {user?.name}</i>
                </Typography>
            <br />
            <Typography component="div" variant="p" >
                    <b>Email:</b> <i> {user?.email}</i>
                </Typography>
            <br />
            <Typography component="div" variant="p" >
                    <b>Phone:</b> <i> {user?.phone}</i>
                </Typography>
            <br />
            <Typography component="div" variant="p" >
                    <b>Website:</b> <i> {user?.website}</i>
                </Typography>
            <br />
            <Typography component="div" variant="p" >
                    <b>Company:</b> <i> {user?.company?.name}</i>
                </Typography>
            <br />


{/*------- Commnets--------- */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component="div" variant="h5" sx={{textDecoration:' underline wavy blue'}}> 
                    Comments
                </Typography>

                <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection:'column'}}>
                {
                    comments.map(comment=><Comment key={comment.id} comment={comment}/>)
                }
                
                </CardContent>
                <hr />
            </Box>
        </CardContent>
    </Card>

    );
};

export default PostDetails;