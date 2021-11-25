let endpointRegistro = "http://localhost:8080/api/usuarios";
let endpointLogin = "http://localhost:8080/api/authenticate";
import { useHistory } from 'react-router-dom';

const [status, setStatus] = useState()
const [token, setToken] = useState()
const [avisoFalloRegistro, setAvisoFalloRegistro] = useState("avisoNoVisible")
const {contextLoginRegistro, setContextLoginRegistro} = useContext(ContextLoginRegistro);
const history = useHistory();

function handleClick(e){
    e.preventDefault()
    fetch(endpointRegistro, {
    "method": "POST",
    "body": JSON.stringify(usuarioData),
    "headers": {
        "content-type": "application/json"
        }   
    })
    .then(response=>{
        response.json()
    })
    .then(array=>{
        setStatus(array.status)
    })
}

function redireccionCondicionada(){
    if(status != 201){
        //setAvisoFalloRegistro("avisoVisible")
        console.log("ups male sale")
    }else{
        fetch(endpointLogin, {
        "method": "POST",
        "body": JSON.stringify(dataParaLogin),
        "headers": {
            "content-type": "application/json"
            }   
        })
        .then(response=>{
            response.json()
        })
        .then(array=>{
            setToken(array.token)
            setContextLoginRegistro(usuario)
            history.push('/home')
            console.log( "no entre aun a la variable " + array.status)
        })
    }
}