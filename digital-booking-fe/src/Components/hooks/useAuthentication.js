import {useState } from 'react';
import ContextLoginRegistro from '../Contexts/ContextLoginRegistro';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';



const useAuthentication = (username, password)=>{

    const [validCredentials, setValidCredentials] = useState();

    const {contextLoginRegistro, setContextLoginRegistro} = useContext(ContextLoginRegistro);

    const history = useHistory();

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
            history.push('/home')

        }else{
            console.log('wrong credentials')
            setValidCredentials(false);
        }
    }

    return {authenticate,validCredentials}
}

export default useAuthentication;