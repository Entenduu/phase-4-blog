import {React} from "react";

function TopicsBar({posts}){

    let unique = [...new Set(posts.map(post => post.genre))];
    console.log(unique)
    let genres = unique.map(x => <a href='/' key={x} >{x}</a>)
  
    return( 
            <div className="wrapper">
                    <div className="search-wrapper">
                        <div className="vertical-menu">
                            <a href="/" className="active">Genre</a>
                            {genres}
                        </div>
                    </div>
            </div>
    )
}
export default TopicsBar;