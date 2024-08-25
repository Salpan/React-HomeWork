import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const url = 'https://jsonplaceholder.typicode.com/users';

const ProfileDashboard = () => {
    const { teamId, id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`${url}/${id}`)
            .then((r) => r.json())
            .then((data) => {
                setTimeout(() => {
                    setUser(data);
                }, 500);
            });
    }, [id]);

    return (
        <>
            <div>{teamId}</div>
            {JSON.stringify(user, 2, 2)}
        </>
    );
};

export default ProfileDashboard;
