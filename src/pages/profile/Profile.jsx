import { Outlet } from "react-router-dom"
import ProfileLayout from "../../common/components/profile-layout/ProfileLayout"

const Profile = () => {
    return (
        <ProfileLayout>
            <Outlet />
        </ProfileLayout>
    )
}

export default Profile