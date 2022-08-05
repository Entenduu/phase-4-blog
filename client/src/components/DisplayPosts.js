import {React, useState} from "react"
import { useNavigate } from "react-router-dom";

function DisplayPosts({posts, user, getData, handleClickE}){
    const [editPost, setEditPost] = useState({})
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate();

    function handleClick(x){
        fetch(`/posts/${x.id}`, { method: 'DELETE' }) 
        .then(()=>{getData()}) 
    }



    let post = posts.map(x => <div className='post'>
        <h1>{x.title}</h1>
        <p>{x.content}</p>
        {user.id === x.user_id ?  <button onClick={() => handleClick(x)}>delete</button> : null }
        {user.id === x.user_id ?  <button onClick={(e) => handleClickE(x,e)}>edit</button> : null }
    </div>)
    return (
        <div className='posts'>
            {post}
        </div>
    )
}
export default DisplayPosts;