import './styles.css';



export const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <header>
                <h1>React App</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>8 800 555 35-35</footer>
        </div>
    );
};