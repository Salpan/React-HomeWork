import { useNavigate } from 'react-router-dom';

const ProfileSettings = () => {
    const navigate = useNavigate();
    return (
        <>
            Profile Settings{' '}
            <button type="button" onClick={() => navigate(-1)}>
                {'<-'}
            </button>
        </>
    );
};

export default ProfileSettings;
