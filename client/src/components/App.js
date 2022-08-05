import React, { useEffect, useState } from "react";
import {  Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Edit from "./Edit";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  const [posts, setPosts] = useState([])

  const [reload, setReload] = useState(false)

  const [e ,setE] = useState({})

  let navigate = useNavigate()

  useEffect(() => {
    getData()  
  }, [reload]);

  function getData(){
    fetch("/posts").then((r) => {
      if (r.ok) {
        r.json().then(setPosts);
      }
    });
  }

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleClickE(x){
    setE(x)
    navigate(`/edit/${x.id}`)
    console.log(x)
}


 
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Routes>
            <Route path="/" element={<Home posts={posts} user={user} setPosts={setPosts} getData={getData} setReload={setReload} handleClickE={handleClickE}/> }/>
            <Route path="/edit/:id" element={<Edit user={user}  e={e}/>}/>
          </Routes>
          
        ) : (
          <Routes>
            <Route path="/signup" element={<Signup setUser={setUser} />}>
            </Route>
            <Route path="/login" element={ <Login setUser={setUser} />}>
            </Route>
            <Route path="/" element={ <Home user={user}/>}>
            </Route>
            
          </Routes>
        )}
      </main>
    </>
  );
}

export default App;
