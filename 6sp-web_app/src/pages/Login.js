import { useNavigate } from 'react-router-dom';

import NavBar1 from '../components/NavBar1';
import LoginForm from '../components/LoginForm';
import Layout from '../components/layout/Layout';

function LoginPage(){

    const navigate = useNavigate();

    function loginHandler(loginData) {
        fetch(
            'https://jsonplaceholder.typicode.com/todos/1.json',
            {
                method: 'POST',
                body: JSON.stringify(loginData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            navigate('/');
        });
    }

    return (
        <>
        <NavBar1 link1="" link1_name="Features" link2="" link2_name="Pricing" link3="" link3_name="Contact" link4="/" link4_name="Back to Homepage" link5="/registration" link5_name="Create Account" />
        <Layout>
            <LoginForm onLogin={loginHandler} />
        </Layout>
        </>
    );
}

export default LoginPage;

