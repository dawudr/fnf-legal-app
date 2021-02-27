import '@/styles/icofont/icofont.css'
import 'semantic-ui-css/semantic.min.css'
import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import UserContext from '@/components/UserContext';
import {Container} from 'semantic-ui-react'

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {

    state = {
        user: null
    };

    componentDidMount = () => {
        const user = localStorage.getItem('coolapp-user');
        if (user) {
            this.setState({
                user
            });
        } else {
            // Router.push('/signin');
            Router.push('/');

        }
    };

    signIn = (username, password) => {
        localStorage.setItem('coolapp-user', username);

        this.setState(
            {
                user: username
            },
            () => {
                Router.push('/');
            }
        );
    };

    signOut = () => {
        localStorage.removeItem('coolapp-user');
        this.setState({
            user: null
        });
        // Router.push('/signin');
        Router.push('/');
    };

    render() {
        const {Component, pageProps} = this.props;

        return (
            <Container>
                <UserContext.Provider value={{user: this.state.user, signIn: this.signIn, signOut: this.signOut}}>
                    <Component {...pageProps} />
                </UserContext.Provider>
            </Container>
        );
    }
}
