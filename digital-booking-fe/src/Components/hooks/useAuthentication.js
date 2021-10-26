import {useState } from 'react';

const useAuthentication = (username, password)=>{

    const [validCredentials, setValidCredentials] = useState();

    const objetoPrueba = [{
        email: 'eversardoth@gmail.com',
        password: 'secret'
    }]


    const authenticate = () =>{

        let usuario = objetoPrueba.find((user)=>user.email===username)

        if(usuario && usuario.password===password){
            console.log("you're in")

        }else{
            console.log('wrong credentials')
            setValidCredentials(false);
        }
    }

    return {authenticate,validCredentials}
}

export default useAuthentication;