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
                <label htmlFor='edit-title'>Edit Title:</label><br></br>
                <input 
                    className="edit-title-container"
                    type='text' 
                    value={title} 
                    placeholder="edit title here"
                    onChange={(e)=> setTitle(e.target.value)} >
                </input>
                <br></br>
                <label  htmlFor='edit-content'>Edit Content:</label>
                <input 
                    className="edit-content-container"
                    type='text' 
                    placeholder="edit your content here"
                    value={content} 
                    onChange={(e)=> setContent(e.target.value)}>
                </input>
                <button type='submit'>Submit</button>
            </form>
        </div>

        </>

    )
}
export default Edit;