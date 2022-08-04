import {React, useState, useEffect} from "react";



function NewPost({user, posts, getData}) {
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
        .then(getData())
        setGenre(genres[0])
        setContent('')
        setTitle('')
    }


    return (
        <div>
            
            <form className="post-form" onSubmit={handleSubmit}>
            {user.username}
                <div className="input-field">
                    <label htmlFor='title'>Title:</label>
                    <input 
                            type='text' 
                            name='title' 
                            value={title}
                            className='content-input'
                            placeholder="title"
                            onChange={(e)=>setTitle(e.target.value)}
                        /><br></br>
                    <label htmlFor='content'> New post: </label>
                    <input 
                        type='text' 
                        name='content' 
                        value={content}
                        className='content-input'
                        placeholder="content"
                        onChange={(e)=>setContent(e.target.value)}
                    /><br></br>
                    
                    <label htmlFor='genre'> Select Genre: </label>
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