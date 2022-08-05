import {React, useState, useEffect} from "react";



function NewPost({user, posts, getData, setReload}) {
    let unique = [...new Set(posts.map(post => post.genre))];
    console.log(unique)
    let genres = unique.map(x => <option value={x} key={x}>{x}</option>)


    const [content, setContent] = useState('')
    const [genre, setGenre] = useState('Folklore')
    const [title, setTitle] = useState('')
    let id = user.id;
    function handleSubmit(e) {
        e.preventDefault()
        fetch("/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id,
            content,
            genre,
            title
        }),
        }).then(r => r.json())
    
        setGenre(genres[0])
        setContent('')
        setTitle('')
    }


    return (
        <div>
            
            <form className="post-form" onSubmit={handleSubmit}>
                <div className="input-field">
                        <span>Signed in as {user.username}</span>
                    <h4>Create a new post here!</h4>
    
                    <label htmlFor='title'>Title:</label><br></br>
                    <input 
                            type='text' 
                            name='title' 
                            value={title}
                            className='content-input'
                            placeholder="title"
                            onChange={(e)=>setTitle(e.target.value)}
                        /><br></br>
                    <label htmlFor='content'> New post: </label><br></br>
                    <input 
                        type='text' 
                        name='content' 
                        value={content}
                        className='content-input'
                        placeholder="content"
                        onChange={(e)=>setContent(e.target.value)}
                    /><br></br>
                    
                    <label htmlFor='genre'> Select Genre: </label><br></br>
                    <select className="select" value={genre} onChange={(e) => setGenre(e.target.value)}>
                        {genres}
                    </select>
                    <button type='submit'>post</button>
                </div>
                </form>
            
        </div>
    )
}
export default NewPost;