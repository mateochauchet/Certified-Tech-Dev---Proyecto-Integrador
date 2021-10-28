import {useState } from 'react';
import ContextLoginRegistro from '../Contexts/ContextLoginRegistro';
import { useContext } from 'react';



const useAuthentication = (username, password)=>{

    const [validCredentials, setValidCredentials] = useState();

    const {contextLoginRegistro, setContextLoginRegistro} = useContext(ContextLoginRegistro);


    const objetoPrueba = [{
        nombre: 'Ever',
        apellido: 'Sardoth',
        email: 'eversardoth@gmail.com',
        password: 'secret'
    }]


    const authenticate = () =>{

        let usuario = objetoPrueba.find((user)=>user.email===username)

        if(usuario && usuario.password===password){
            console.log("you're in")
            setContextLoginRegistro(usuario)
            window.location.href='http://localhost:3000/home'

        }else{
            console.log('wrong credentials')
            setValidCredentials(false);
        }
    }

    return {authenticate,validCredentials}
}

export default useAuthentication;