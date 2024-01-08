import React, {useContext, createContext, useState, ChangeEventHandler} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    // Route,
    Navigate,
    Route,
    NavLink,
    // Redirect,
    useNavigate,
    useLocation, Outlet,
    // useHistory,
} from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Room from 'pages/Room';
// import LoginPage from 'pages/Login';
import RegistrationPage from 'pages/Registration';
import HomePage from 'pages/Home';
import Contact from 'pages/Contact';
import Profile from 'pages/Profile';
import styles from "./pages/Login/Login.module.scss";
import {AxiosError} from "axios";
import {LoginErrorPayload} from "./api-client/account";
// import Icon from '/src/assets/images/;
// @ts-ignore
import Icon from '/src/assets/images/icon.svg';

// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import value from "*.jpg";
// import PrivateRoute from '../src/components/routing/PrivateRoute';
// import { v} from 'uuid';
//
// const App: React.FC = () => {
//   return (
//
//
//
//
//
//     <Router>
//       <Header />
//
//       <routing>
//           {/*<Route path='/' element={<PrivateRoute/>}>*/}
//           {/*    /!*<Route exact path='/' element={<Home/>}/>*!/*/}
//           {/*    <Route path='Room' element={<Room />} />*/}
//           {/*</Route>*/}
//         <Route path='/'>
//           <Route path='About' element={<HomePage />} />
//           <Route path='Contacts' element={<h3>Contacts</h3>} />
//           <Route path='Login' element={<LoginPage/>} />
//           <Route path='Registration' element={<RegistrationPage/>} />
//           <Route path='Info' element={<h3>Info</h3>} />
//
//
//           <Route path='Account' element={<Profile />} />
//
//           <Route path='' element={<Navigate to='/About' replace />} />
//         </Route>
//       </routing>
//
//       <Footer />
//     </Router>
//   );
// };
//
// export default App;

//
// export default function App() {
//     return (
//         <ProvideAuth>
//             <Router>
//                 <div>
//                     <AuthButton />
//
//                     <ul>
//                         <li>
//                             <Link to="/public">Public Page</Link>
//                         </li>
//                         <li>
//                             <Link to="/protected">Protected Page</Link>
//                         </li>
//                     </ul>
//
//                     <routing>
//                         <Route path="/public">
//                             <PublicPage />
//                         </Route>
//                         <Route path="/login">
//                             <LoginPage />
//                         </Route>
//                         <PrivateRoute path="/protected">
//                             <ProtectedPage />
//                         </PrivateRoute>
//                     </routing>
//                 </div>
//             </Router>
//         </ProvideAuth>
//     );
// }
//
// const fakeAuth = {
//     isAuthenticated: false,
//     signin(cb) {
//         fakeAuth.isAuthenticated = true;
//         setTimeout(cb, 100); // fake async
//     },
//     signout(cb) {
//         fakeAuth.isAuthenticated = false;
//         setTimeout(cb, 100);
//     }
// };
//
// /** For more details on
//  * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
//  * refer to: https://usehooks.com/useAuth/
//  */
// const authContext = createContext();
//
// function ProvideAuth({ children }) {
//     const auth = useProvideAuth();
//     return (
//         <authContext.Provider value={auth}>
//             {children}
//         </authContext.Provider>
//     );
// }
//
// function useAuth() {
//     return useContext(authContext);
// }
//
// function useProvideAuth() {
//     const [user, setUser] = useState(null);
//
//     const signin = cb => {
//         return fakeAuth.signin(() => {
//             setUser("user");
//             cb();
//         });
//     };
//
//     const signout = cb => {
//         return fakeAuth.signout(() => {
//             setUser(null);
//             cb();
//         });
//     };
//
//     return {
//         user,
//         signin,
//         signout
//     };
// }
//
// function AuthButton() {
//     let history = useNavigate();
//     let auth = useAuth();
//
//     return auth.user ? (
//         <p>
//             Welcome!{" "}
//             <button
//                 onClick={() => {
//                     auth.signout(() => history.push("/"));
//                 }}
//             >
//                 Sign out
//             </button>
//         </p>
//     ) : (
//         <p>You are not logged in.</p>
//     );
// }
//
// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
//     let auth = useAuth();
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 auth.user ? (
//                     children
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                             state: { from: location }
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }
//
// function PublicPage() {
//     return <h3>Public</h3>;
// }
//
// function ProtectedPage() {
//     return <h3>Protected</h3>;
// }
//
// function LoginPage() {
//     let history = useHistory();
//     let location = useLocation();
//     let auth = useAuth();
//
//     let { from } = location.state || { from: { pathname: "/" } };
//     let login = () => {
//         auth.signin(() => {
//             history.replace(from);
//         });
//     };
//
//     return (
//         <div>
//             <p>You must log in to view the page at {from.pathname}</p>
//             <button onClick={login}>Log in</button>
//         </div>
//     );
// }

type AppProps = Record<string, never>;

export type AppState = {
    token: string;
    userLogin: string;
    userAvatar: string;
    userName: string;
    userEmail: string;
    rememberMe: boolean;
    showContent: boolean;
    isLoading: boolean;
};


class App extends React.Component<AppProps, AppState> {


    constructor(props: Readonly<AppProps> | AppProps) {
        super(props);
        this.state = {
            token: '',
            userLogin: '',
            userAvatar: '',
            userName: '',
            userEmail: '',
            rememberMe: false,
            showContent: false,
            isLoading: false,
        };
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLoginPage = this.handleLoginPage.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        // this.handleRegistration = this.handleRegistration.bind(this)
    }





    handleLogin (data: any, login:string, pass:string){
        console.log("Handlelogin",this.state)
        fetch('http://93.189.82.184/api/Account/Login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "login": login,
                "password": pass
            })
        })
            // .then (console.log)
            .then(response => response.json())
            .then(response => {
                const user = response
                if (user === null) {
                    return false;
                } else {
                    this.setState({
                        userLogin: user.login,
                        userEmail: user.email,
                        token: user.token,
                    })
                    localStorage.setItem('token', this.state.rememberMe ? this.state.token : '');
                }
                console.log('Login Done',this.state)
            })
    }

    handleLogout(event:any) {
        console.log('before',this.state)
        this.setState({
            userLogin: '',
            userEmail: '',
            userName: '',
            showContent: false,
        })
        if (this.state.userLogin === '') {
            this.setState({showContent: false })
        } else {
            this.setState({showContent: true })
        }
        console.info('You clicked the LOGOUT');
        console.log('after',this.state)

        event.preventDefault();

    }

    handleLoginPage(event:any) {
        // this.setState({
        //     userLogin: '',
        //     userEmail: '',
        //     userName: '',
        //     showContent: false,
        // })
        if (this.state.userLogin === '') {
            this.setState({showContent: false })
        } else {
            this.setState({showContent: true })
        }
        console.info('You clicked the handleLoginpage',this.state.showContent);
        console.log(this.state)

        event.preventDefault();

    }



    public override render() {


        // interface ChildProps {
        //     handleLogin: (data:any) => void
        // }
        // const [formValues, setFormValues] = useState({
        //     login: '',
        //     password: ''
        // });
        // const [state, setState] = useState("");
        // A wrapper for <Route> that redirects to the login

        function PublicPage() {
            return <h3>Public</h3>;
        }

        function ProtectedPage() {
            return <h3>Protected</h3>;
        }

        function AuthButton() {
            // let history = useHistory();
            // let auth = nu;

            return true ? (
                <p>
                    Welcome!{" "}
                    <button
                        onClick={() => {
                            // auth.signout(() => history.push("/"));
                        }}
                    >
                        Sign out
                    </button>
                </p>
            ) : (
                <p>You are not logged in.</p>
            );
        }

        // const authContext = createContext();
        //
        // function useAuth() {
        //     return useContext(authContext);
        // }


        const LoginPage: React.FC<AppProps> = (props) =>{
            // let history = useHistory();
            let location = useLocation();
            // let auth = useAuth();

            // props.handleLogin


            let { from } = location.state || { from: { pathname: "/" } };
            let login = () => {
                // auth.signin(() => {
                //     history.replace(from);
                // });
            };
            let [isLoading, setIsLoading] = useState(false);
            let [formValues, setFormValues] = useState({
                login: '',
                password: ''
            });

            let [errors, setErrors] = useState<string[]>([]);
            const onChange : ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
                setErrors([]);

                const { value, name } = e.currentTarget;
                setFormValues({
                    ...formValues,
                    [name]: value
                });
                console.log(value);
            }

            let processError = (error: AxiosError<LoginErrorPayload>) => setErrors(Object.entries(error?.response?.data ?? []).map(el => el[1]));


            let handleSubmit = () => {
                setIsLoading(true);
                console.log(formValues)
                console.log(this.state)
                // instanceLogin(formValues)
                fetch('http://93.189.82.184/api/Account/Login',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(formValues)
                })
                    .then(response => console.log(response)

                    )
                    /**
                     * `error as AxiosError` doesn't inherit LoginErrorPayload type
                     * that is passed for `then(response...`
                     * .catch(error => processError(error as AxiosError))
                     */
                    .then(response => {
                            const user = response
                            if (user === null) {
                                return false;
                            } else {
                                console.log(user)
                                this.setState({
                                    userLogin: formValues.login,
                                    rememberMe: true,
                                    showContent: true
                                })
                                // state.setState({
                                // userId: user.id,
                                // login: user.login,
                                // userEmail: user.email,
                                //   userName: user.name,
                                //   userAmount: user.amount,
                                // })
                            }
                        }

                    )
                    .catch(error => processError(error as AxiosError<LoginErrorPayload>))
                    .finally(() => setIsLoading(false));
            }

            return (
                <div>
                    {
                        errors.length === 0 ? null
                            : <div>
                                { errors.map((err, idx) => <i key={idx}>{ err }</i>) }
                            </div>
                    }
                    {
                        this.state.userLogin != "" ?
                            <div
                                // id="welcome"
                                style={{ display: this.state.showContent ? 'block' : 'none' }}
                            >
                                <h1>
                                    <span> Hello there, </span>
                                    Welcome Friend 👋 {this.state.userLogin}
                                </h1>
                                <p>
                                    For sing-out press this - {" "}
                                    <Button variant="outlined"
                                        onClick={(props) => {console.log(this.handleLoginPage)}}
                                    >
                                        Выйти
                                    </Button>
                                </p>
                            </div>
                            :
                            <div>

                                <ThemeProvider theme={defaultTheme}>
                                    <Container component="main" maxWidth="xs">
                                        <CssBaseline />
                                        <Box
                                            sx={{
                                                marginTop: 8,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {/*<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>*/}
                                            {/*    <LockOutlinedIcon />*/}
                                            {/*</Avatar>*/}
                                            <NavLink to={'/'} className={styles.logo}>
                                                <img src={Icon} alt="Softbox" />
                                            </NavLink>
                                            <Typography component="h1" variant="h5">
                                                Войти
                                            </Typography>

                                            <Box
                                                component="form"
                                                // onSubmit={handleSubmit}
                                                noValidate sx={{ mt: 1 }}>
                                                <TextField
                                                    onChange={onChange}
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="login"
                                                    label="Логин"
                                                    name="login"
                                                    autoComplete="Логин"
                                                    autoFocus
                                                />
                                                <TextField
                                                    onChange={onChange}
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    label="Пароль"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="current-password"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox value="remember" color="primary" />}
                                                    label="Запомнить меня"
                                                />
                                                <Button
                                                    onClick={handleSubmit}
                                                    disabled={isLoading}
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2 }}
                                                >
                                                    Войти
                                                </Button>
                                                <Grid container>
                                                    <Grid item xs>
                                                        <a href="#" >
                                                            Забыли пароль?
                                                        </a>
                                                    </Grid>
                                                    <Grid item>
                                                        <NavLink to='/registration' >
                                                            {"Нет аккаунта? Регистрация"}
                                                        </NavLink>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Box>
                                        {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
                                    </Container>
                                </ThemeProvider>
                            </div>
                    }
                    {/*<p>You must log in to view the page at {from.pathname}</p>*/}
                    {/*<button onClick={this.props.handleLogin}>Log in</button>*/}
                </div>
            );
        }

        const PrivateRoute = () => {
            const auth = this.state.userLogin; // determine if authorized, from context or however you're doing it

            // If authorized, return an outlet that will render child elements
            // If not, return element that will navigate to login page
            return auth ? <Room /> : <Navigate to="/login" />;
        }


        type props = {
            state: string;
            setState: (val: string) => void;
            onChange: () => void;
            handleLogin: () => void;
            handleLoginPage: () => void;
            placeholder: string;
        };

        const defaultTheme = createTheme();

        const Registration: React.FC<AppProps> = (props) =>{
            const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                console.log({
                    email: data.get('email'),
                    password: data.get('password'),
                });
            };

            let [isLoading, setIsLoading] = useState(false);

            let [formValues, setFormValues] = useState({
                login: '',
                firstName: '',
                lastName: '',
                patronymic: '',
                phone: '',
                email:'',
                password: '',
                confirmPassword: ''
            });

            let [errors, setErrors] = useState<string[]>([]);


            const onChange : ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) =>{
                setErrors([]);

                const { value, name } = e.currentTarget;
                setFormValues({
                    ...formValues,
                    [name]: value
                });
                console.log(value);
            }

            let processError = (error: AxiosError<LoginErrorPayload>) => setErrors(Object.entries(error?.response?.data ?? []).map(el => el[1]));


            let handleRegistration = () => {
                setIsLoading(true);
                console.log(this.state)
                // console.log(this.state)
                // instanceLogin(formValues)
                fetch('http://93.189.82.184/api/Account/Registration',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(formValues)
                })
                    .then(response => console.log(response)

                    )
                    /**
                     * `error as AxiosError` doesn't inherit LoginErrorPayload type
                     * that is passed for `then(response...`
                     * .catch(error => processError(error as AxiosError))
                     */
                    .then(response => {
                            const user = response
                            if (user === null) {
                                console.log(response);
                                return false;
                            } else {
                                console.log(response)
                                console.log("Write to state")
                                console.log(this.state)
                                this.setState({

                                    userLogin: formValues.login,
                                    rememberMe: true,
                                    showContent: true
                                })
                                console.log("Done")
                                console.log(this.state)
                            }
                        }

                    )
                    .catch(error => processError(error as AxiosError<LoginErrorPayload>))
                    .finally(() => setIsLoading(false));
            }




            return (
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/*<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>*/}
                        {/*    <LockOutlinedIcon />*/}
                        {/*</Avatar>*/}
                        <NavLink to={'/'} className={styles.logo}>
                            <img src={Icon} alt="Softbox" />
                        </NavLink>
                        <Typography component="h1" variant="h5">
                            Регистрация
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        onChange={onChange}
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="Имя"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        onChange={onChange}
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Фамилия"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={onChange}
                                        required
                                        fullWidth
                                        id="patronymic"
                                        label="Отчество"
                                        name="patronymic"
                                        autoComplete=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={onChange}
                                        required
                                        fullWidth
                                        id="email"
                                        label="Электронная почта"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={onChange}
                                        required
                                        fullWidth
                                        id="login"
                                        label="Логин"
                                        name="login"
                                        autoComplete="login"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={onChange}
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Телефон"
                                        name="phone"
                                        autoComplete="+7 "
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={onChange}
                                        required
                                        fullWidth
                                        name="password"
                                        label="Пароль"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={onChange}
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label="Подтвердите пароль"
                                        type="password"
                                        id="confirmPassword"
                                        autoComplete="Подтвердите пароль"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="Подтверждаю согласие на обработку персональных данных. Согласен на получение оповещения."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                onClick={handleRegistration}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Регистрация
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <NavLink to='/login' >
                                        Уже есть аккаунт. Войти тут
                                    </NavLink>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    {/*<Copyright sx={{ mt: 5 }} />*/}
                </Container>
            </ThemeProvider>
            );
        }

        function Contacts() {
            return (
                <div>
                        <Contact/>
                </div>
            );
        }



        return (




            <Router>
                <Header
                    handleLoginpage={this.handleLoginPage}
                    handleLogout={this.handleLogout}
                    info={this.state}
                />

                <Routes

                >
                    <Route path='/' element={<PrivateRoute/>}>
                        {/*<Route exact path='/' element={<ProtectedPage/>}/>*/}
                        <Route path='Room' element={<Room />} />

                        <Route path='Account' element={<Profile/>}/>
                    </Route>
                    <Route path='/'

                    >
                        <Route path="*" element={<h2>This is 404 page</h2>} />
                        <Route path='About' element={<HomePage/>}/>
                        <Route path='Contacts' element={<Contacts/>}/>
                        <Route path="/registration"
                                element={
                                <Registration
                                        // handleLogin={this.handleLogin}
                                        // props={this.props}
                                />}
                        />
                        <Route path='Login'
                               element={
                                    <LoginPage
                                        handleLogin = {this.props.handleLogin}
                                        handleLoginPage={this.props.handleLoginPage}
                                    />}
                        />
                        <Route path='Registrations'
                               element={
                            <RegistrationPage
                                handleLogin={this.props.handleLogin}

                            />}/>
                        <Route path='Info' element={<h3>Info</h3>}/>

                        {/*<Route path="/page404" element={<Page404 />} />*/}

                        <Route path='' element={<Navigate to='/About' replace/>}/>
                    </Route>
                </Routes>

                <Footer/>
            </Router>
        );
    }
}

export default App;