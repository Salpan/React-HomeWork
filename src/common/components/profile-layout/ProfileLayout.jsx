import { NavLink, useNavigate } from 'react-router-dom'
import './styles.css'
import cn from 'classnames'
import { useCallback } from 'react'

const ProfileLayout = ({ children }) => {
    const navigate = useNavigate()

    const handleBackClick = useCallback(() => {
        navigate(-1)
    }, [navigate])

    return (
        <div className="profile-wrapper">
            <nav className="profile-main-menu">
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
                <button onClick={handleBackClick} className={cn('clear-btn', 'profile-menu-item')} type='button'>Back</button>
            </nav>
            <div className="profile-content">
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout