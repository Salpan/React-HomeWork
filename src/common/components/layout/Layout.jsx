import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import './styles.css';

export const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <header>
                <h1>Welcome to my first React App</h1>
                <h2>Choos app</h2>
                <div>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar
                                sx={{
                                    backgroundColor: '#5dccf8',
                                    color: 'black',
                                }}
                            >
                                <Button
                                    component={Link}
                                    to="/gallery"
                                    color="inherit"
                                >
                                    Gallary
                                </Button>
                                <Button
                                    component={Link}
                                    to="/userlist"
                                    color="inherit"
                                >
                                    User List
                                </Button>
                                <Button
                                    component={Link}
                                    to="/counter"
                                    color="inherit"
                                >
                                    Counter
                                </Button>
                                <Button
                                    component={Link}
                                    to="/posts"
                                    color="inherit"
                                >
                                    Posts
                                </Button>
                                <Button
                                    component={Link}
                                    to="/calculator"
                                    color="inherit"
                                >
                                    Calculator
                                </Button>
                                <Button
                                    component={Link}
                                    to="/form"
                                    color="inherit"
                                >
                                    Form
                                </Button>
                                <Button
                                    component={Link}
                                    to="/profile"
                                    color="inherit"
                                >
                                    Profile
                                </Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </div>
            </header>
            <main>{children}</main>
            <footer>Made by: Mentor Shut56 and Salpan</footer>
        </div>
    );
};
