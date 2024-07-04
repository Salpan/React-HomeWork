import './styles.css';



export const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <header>
                <h1>Welcome to my first React App</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>Made by: Mentor Shut56 and Salpan</footer>
        </div>
    );
};