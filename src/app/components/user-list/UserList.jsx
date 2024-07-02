import { useCallback, useEffect, useState } from "react"
import './styles.css'
import { Loader } from "../../../common/components/loader/Loader"
import { Link } from 'react-router-dom';

const url = 'https://jsonplaceholder.typicode.com/users'

const UserList = () => {

    const [userList, setUserList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [reload, setReload] = useState(false)

    const clickHandler = useCallback(() => {
        setReload((prev) => !prev)
    }, [])

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                setTimeout(() => {
                    setUserList(data)
                }, 2000)
            })
    }, [reload])

    useEffect(() => {
        setIsLoading(userList.length === 0)
    }, [userList])

    return (
        <>
            <Link to="/gallery">Gallery</Link>
            <button type="button" onClick={clickHandler}>
                Reload
            </button>
            {!isLoading ? (
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <Loader loading={isLoading} />
            )}
        </>
    );
};

export default UserList