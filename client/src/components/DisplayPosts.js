import {React, useState} from "react"

function DisplayPosts({posts, user, getData}){
    const [editPost, setEditPost] = useState({})
    const [edit, setEdit] = useState(false)

    function handleClick(x){
        fetch(`/posts/${x.id}`, { method: 'DELETE' }) 
        .then(()=>{getData()}) 
    }

    function handleClickE(x){
        setEditPost(x)
        setEdit(true)
    }



    let post = posts.map(x => <div className='post'>
        <h1>{x.title}</h1>
        <p>{x.content}</p>
        {user.id === x.user_id ?  <button onClick={() => handleClick(x)}>delete</button> : null }
        {user.id === x.user_id ?  <button onClick={() => handleClickE(x)}>edit</button> : null }
    </div>)
    return (
        <div className='posts'>
            {post}
        </div>
    )
}
export default DisplayPosts;