import {React, useState} from "react";
import { useNavigate } from "react-router-dom";

function Edit({user, e}){

    let navigate = useNavigate()
    console.log(e)
    const id = e.id;
    const [title, setTitle] = useState(e.title)
    const [content, setContent] = useState(e.content)
    // const updateBlog = { id, title, content}

    function handleSubmit(e){
        e.preventDefault()

        fetch(`/posts/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                title,
                content
            })
        }) 
        navigate('/')      
    }
    


    return (
        <>
    
        <div className='edit-form'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)} >
                </input>
                <input type='text' value={content} onChange={(e)=> setContent(e.target.value)}>
                </input>
                <button type='submit'>Submit</button>
            </form>
        </div>

        </>

    )
}
export default Edit;