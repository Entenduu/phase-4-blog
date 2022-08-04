import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setUser(null);
        }
        });
    }

    return (
        <>
            <nav className='navbar'>
                <h1>Super Good Project Name</h1>
                
                <div className='links'>
                    <Link to="/">Home</Link>
                        {user ? (
                            <button onClick={handleLogoutClick}  id='logout-button'>Logout</button>
                        ) : (
                        <>
                            <Link to="/signup">Signup</Link>
                            <Link to="/login">Login</Link>  
                        </>
                    )}
                </div>
            </nav>    
        </>
    );
}



export default NavBar;