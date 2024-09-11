import { NavLink } from 'react-router-dom'
import './styles.css'
import cn from 'classnames'

const ProfileLayout = ({ children }) => {
    return (
        <div className="profile-wrapper">
            <div className="profile-main-menu">
                <NavLink className={({ isActive }) => cn('profile-menu-item', { ['nav-active']: isActive })}
                    to='' end
                >
                    Dashboard
                </ NavLink>
                <NavLink className={({ isActive }) => cn('profile-menu-item', isActive && 'nav-active')}
                    to='security'
                >
                    Security
                </ NavLink>
                <NavLink className={({ isActive }) =>
                    [
                        'profile-menu-item', isActive ? 'nav-active' : '',
                    ].join(' ')
                }
                    to='settings'
                >
                    Settings
                </ NavLink>
            </div>
            <div className="profile-content">
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout