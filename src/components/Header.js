import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

import classes from './Header.module.css';

const Header = () => {
    const isLogin = useSelector((state) => state.auth.isLogin);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
    };

    const userNav = (
        <nav>
            <ul>
                <li>
                    <a href="/">My Products</a>
                </li>
                <li>
                    <a href="/">My Sales</a>
                </li>
                <li>
                    <button onClick={logoutHandler}>Logout</button>
                </li>
            </ul>
        </nav>
    );

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isLogin && userNav}
        </header>
    );
};

export default Header;
