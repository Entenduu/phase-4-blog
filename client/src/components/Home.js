import Adbar from "./AdBar";
import DisplayPosts from "./DisplayPosts";
import NewPost from "./NewPost";
import TopicsBar from "./TopicsBar";

function Home({ user, posts, setPosts, getData, handleClickE, setReload }) {

    if (user) {
        return (
            <div>
                <TopicsBar posts={posts}/>
                <Adbar/>
                <NewPost posts={posts} user={user} setPosts={setPosts} getData={getData} setReload={setReload}/>
                <DisplayPosts posts={posts} user={user} getData={getData} handleClickE={handleClickE}/>
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
