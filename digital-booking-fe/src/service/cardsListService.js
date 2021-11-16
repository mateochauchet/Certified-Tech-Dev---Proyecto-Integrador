let baseUrl = "http://localhost:8080/api/productos/";

export async function getProductos () {
    const  response = await fetch(`${baseUrl}`);
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
} 

export async function getCategorias () {
    const  response = await fetch("http://localhost:8080/api/categorias/");
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
} 
export async function getProductosById (id) {
    const  response = await fetch(`http://localhost:8080/api/productos/${id}`);
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
}

export async function getProductosByCategoria (q) {
    const  response = await fetch(`${baseUrl}/categoria/${q}`);
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
}

export async function getProductosByCiudad (q) {
    const  response = await fetch(`${baseUrl}/ciudad/${q}`);
    const resJson = await response.json();
    return Array.isArray(resJson) ?  resJson :  [resJson]
}


export default {
    getProductos,
    getCategorias,
    getProductosById,
    getProductosByCategoria,
    getProductosByCiudad
}