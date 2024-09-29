import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProfileDashboard = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const { id } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        if (id) {
            fetch(`${url}/${id}`)
                .then((r) => r.json())
                .then((data) => setUser(data));
        }
    }, [id]);

    const navigate = useNavigate();

    return (
        <>
            {JSON.stringify(user, 2, 2)}
            <button onClick={() => navigate('/')} type="button">
                Go to main manu
            </button>
        </>
    );
};

export default ProfileDashboard;
