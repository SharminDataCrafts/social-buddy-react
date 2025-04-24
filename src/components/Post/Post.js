import * as React from 'react';
import  Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router";

const Post = ({post}) => {

    // console.log(post)
    return (
        
          <Card > 
              <CardContent sx={{ height: '100%' }}>
                <Typography variant="h6" component="div" color='secondary' sx={{textDecoration:'underline'}}>
                        POST:{post.id}
                </Typography>
                <Typography variant="h4" component="div">
                {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {post.body}
                </Typography>
                <Link to={`/post/${post?.id}`}> <Button variant="contained">See More</Button></Link>
              </CardContent>
          </Card>

      


        // <div>
        //     <h3>{post.title}</h3>
        // </div>
    );
};

export default Post;