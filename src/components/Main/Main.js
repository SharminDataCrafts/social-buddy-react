
import Post from '../Post/Post';
import { useContext } from 'react';
import { MainContext } from '../../App';
import Box from '@mui/material/Box';

const Main = () => {
        const allPosts = useContext(MainContext);
   
    return (
  
        //    <h3>{posts.length}</h3>
        <Box
            sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
            gap: 4,
            margin:3
            }}
        >    
           {
            allPosts.map((post)=>(
                <Post key={post.id} post={post}/> 
            ))
           }
        </Box>
    );
};

export default Main;