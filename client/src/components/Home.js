import Adbar from "./AdBar";
import NewPost from "./NewPost";
import TopicsBar from "./TopicsBar";

function Home({ user, posts }) {

    if (user) {
        return (
            <div>
                <TopicsBar posts={posts}/>
                <Adbar/>
                <NewPost posts={posts} user={user}/>
            </div>
        )
    } else {
        return (
            
            <div className='background-div'>
                <h1 style={{color:'#FFFAA0'}}>Please Login or Sign Up</h1>;
            </div>
            
        )
    }
}

export default Home;
