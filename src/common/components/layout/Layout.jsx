import { Link } from "react-router-dom";
import "./styles.css";

export const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <header>
                <h1>Welcome to my first React App</h1>
                <h2>Choose app</h2>
                <div className="link">
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/userlist">User List</Link>
                    <Link to="/counter">Counter</Link>
                    <Link to="/posts">Posts</Link>
                </div>
            </header>
            <main>{children}</main>
            <footer>Made by: Mentor Shut56 and Salpan</footer>
        </div>
    );
};
