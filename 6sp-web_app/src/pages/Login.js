import { useNavigate } from 'react-router-dom';

import NavBar1 from '../components/NavBar1';
import LoginForm from '../components/LoginForm';
import Layout from '../components/layout/Layout';

function LoginPage(){

    const navigate = useNavigate();

    async function loginHandler(loginData) {
        const response = await fetch(
            'https://react-6sp-default-rtdb.firebaseio.com/users.json',
            {
                method: 'POST',
                body: JSON.stringify(loginData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        /*replace this later and develop the function for else part*/
        /* 
        const data = await response.json();
        if(data.status==="LoggedIn"){
            navigate('/upload');
        }
        */
        navigate('/upload');
        
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

