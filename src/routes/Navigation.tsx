import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

import {
    RegisterPage,
    FormikPage,
    FormikYupPage,
    FormikComponentsPage,
    FormikAbstractPage,
    RegisterFormikPage,
    DynamicsFormPage,
} from '../03-forms/pages';

import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" activeClassName="nav-active" exact>Register page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register-formik" activeClassName="nav-active" exact>Register Formik</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstract" activeClassName="nav-active" exact>Formik Abstract</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form" activeClassName="nav-active" exact>Dynamic Form</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/formik-basic">
                        <FormikPage />
                    </Route>
                    <Route path="/register-formik">
                        <RegisterFormikPage />
                    </Route>
                    <Route path="/formik-yup">
                        <FormikYupPage />
                    </Route>
                    <Route path="/formik-components">
                        <FormikComponentsPage />
                    </Route>
                    <Route path="/formik-abstract">
                        <FormikAbstractPage />
                    </Route>

                    <Route path="/dynamic-form">
                        <DynamicsFormPage />
                    </Route>
                    <Route path="/register">
                        <RegisterPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}