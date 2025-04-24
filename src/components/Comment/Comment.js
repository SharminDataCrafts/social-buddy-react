import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Comment = ({comment}) => {
    // console.log(comment);

    return (   
        <CardContent sx={{ flex: '1 0 auto', display: 'flex',  borderBottom: 1}}>

           <Box sx={{width:'100px'}}>
            <CardMedia
                component="img"
                sx={{ width: 50, height:50, borderRadius:'50%' }}
                image="https://res.cloudinary.com/dkl8hgdxb/image/upload/v1744654357/podmatch-UpiF461EAHU-unsplash_u65hft.jpg"
                alt="Live from space album cover"
                />

            <Typography
                variant="subtitle1"
                component="p"
                sx={{ color: 'text.secondary'}}>
                Id:{comment.id}  
            </Typography>
           </Box>
          <Box>
            <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: 'text.secondary' , marginLeft:3}}
                >
                    <b>Name:</b> {comment.name}
                </Typography>
                <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: 'text.secondary' , marginLeft:3}}
                >
                 <b>Email:</b> {comment.email}
                </Typography> <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: 'text.secondary' , marginLeft:3}}
                >
                    <b>Comment:</b> <small><i>{comment.body}</i> </small>
                </Typography>
          </Box>
        </CardContent>
    );
};

export default Comment;