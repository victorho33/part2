import createAuth0Client from '@auth0/auth0-spa-js';
import { reactive } from 'vue';
import axios from 'axios';

export const AuthState = reactive({
    user: null,
    loading: false,
    isAuthenticated: false,
    auth0: null,
    idToken: null,
    //accessToken: null
});

const config = {
    domain: 'dev-4cf1oa5h.us.auth0.com',
    client_id: 'ZtiWq7XN5FCivnGzDb0Nkv8cJNyfVKOz'
};

export const useAuth0 = (state) => {
    const handleStateChange = async () => {
        state.isAuthenticated = !!(await state.auth0.isAuthenticated());
        state.user = await state.auth0.getUser();
        state.loading = false;
        state.idToken = await state.auth0.getIdTokenClaims();
        //state.accessToken = await state.auth0.getTokenSilently();
    }

    const initAuth = () => {
        state.loading = true;
        const auth0 = createAuth0Client({
            domain: config.domain,
            client_id: config.client_id,
            cacheLocation: 'localstorage',
            //responseType: 'token id_token',
            redirect_uri: window.location.origin
        }).then(async auth => {
            state.auth0 = auth;
            await handleStateChange();
        });
        
    }

    const login = async () => {
        await state.auth0.loginWithPopup();
        await handleStateChange();
        //console.log('JWT: ', state.idToken.__raw );
        //console.log('Token: ', state );
        const data = { 
            "first_name": state.user.given_name,
            "last_name": state.user.family_name,
            "email_address" : state.user.email,
            "login_time" :  state.user.updated_at,
        }
  
        const headeroption = { 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.idToken.__raw}`
//            'Authorization': `Bearer ${state.idToken.__raw}`
          }
        }

        const response = await axios.post('auth/login', data,  headeroption )        
    };

    const logout = async () => {
        state.auth0.logout({
            returnTo: window.location.origin,
        });
    }

    return {
        login,
        logout,
        initAuth,
    }

}