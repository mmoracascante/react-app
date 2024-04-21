import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
} from 'react-router-dom';

import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { Suspense } from 'react';
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={null}>
            <Router>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {
                                routes.map(({ path, name }) => (
                                    <li>
                                        <NavLink key={path} to={path} activeClassName="nav-active" >{name}</NavLink>
                                    </li>
                                ))
                            }

                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                    <Switch>
                        {routes.map(({ Component, path }) => (
                            <Route
                                key={path}
                                path={path}
                                render={() => <Component />}
                            />


                        ))}

                        <Redirect to={routes[0].path} />
                    </Switch>
                </div>
            </Router>
        </Suspense>
    );
}