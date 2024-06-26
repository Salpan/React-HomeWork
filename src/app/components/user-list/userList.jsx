import { useCallback, useEffect, useState } from "react"
import './styles.css'

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

        <div>
            <h1>User List</h1>
            {isLoading && <span class="loader"></span>}
            {!isLoading && <ol className="userList">
                {userList.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ol>}
            <button type="button" onClick={clickHandler}>Reload</button>
        </div>
    )
}

export default UserList