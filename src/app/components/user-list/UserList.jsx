import { useCallback, useEffect, useState } from 'react';
import './styles.css';
import { Loader } from '../../../common/components/loader/Loader';
import { Button } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useNavigate } from 'react-router-dom';

const url = 'https://jsonplaceholder.typicode.com/users';

const UserList = () => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [reload, setReload] = useState(false);

    const clickHandler = useCallback(() => {
        setReload((prev) => !prev);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                setTimeout(() => {
                    setUserList(data);
                }, 2000);
            });
    }, [reload]);

    useEffect(() => {
        setIsLoading(userList.length === 0);
    }, [userList]);

    const rowClickHandler = useCallback(
        (id) => () => {
            navigate(`/profile/${id}`);
        },
        [navigate],
    );

    return (
        <>
            <Button
                sx={{
                    color: 'black',
                    backgroundColor: '#5dccf8',
                    borderRadius: 8,
                }}
                className="reload-button"
                variant="contained"
                onClick={clickHandler}
                startIcon={<CachedIcon />}
            >
                Reload
            </Button>
            {!isLoading ? (
                <TableContainer
                    component={Paper}
                    sx={{ maxWidth: 1000, minWidth: 600 }}
                >
                    <Table
                        sx={{ maxWidth: 1000, minWidth: 600 }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow
                                key={1}
                                sx={{
                                    backgroundColor: '#cfc9c9',
                                    fontWeight: 'bold',
                                }}
                            >
                                <TableCell
                                    sx={{ fontWeight: 'bold', fontSize: 16 }}
                                >
                                    #
                                </TableCell>
                                <TableCell
                                    align="left"
                                    sx={{ fontWeight: 'bold', fontSize: 16 }}
                                >
                                    Name
                                </TableCell>
                                <TableCell
                                    align="left"
                                    sx={{ fontWeight: 'bold', fontSize: 16 }}
                                >
                                    Phone
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userList.map((user, index) => (
                                <TableRow
                                    key={user.id}
                                    onClick={rowClickHandler}
                                >
                                    <TableCell align="left">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="left">
                                        {user.name}
                                    </TableCell>
                                    <TableCell align="left">
                                        {user.phone}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Loader loading={isLoading} />
            )}
        </>
    );
};

export default UserList;
