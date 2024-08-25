import { NavLink, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import cn from 'classnames';

import './styles.css';

const ProfileLayout = ({ children }) => {
    const navigate = useNavigate();

    const handleBackClick = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <div className="profile-wrapper">
            <nav className="profile-main-menu">
                <NavLink
                    className={({ isActive }) =>
                        cn('profile-menu-item', isActive && 'nav-active')
                    }
                    to=""
                    end
                >
                    Dashboard
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        cn('profile-menu-item', isActive && 'nav-active')
                    }
                    to="security"
                >
                    Security
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        cn('profile-menu-item', isActive && 'nav-active')
                    }
                    to="settings"
                >
                    Settings
                </NavLink>
                <button
                    type="button"
                    onClick={handleBackClick}
                    className={cn('back-btn-clear')}
                >
                    Back
                </button>
            </nav>
            <div className="profile-content">{children}</div>
        </div>
    );
};

export default ProfileLayout;
