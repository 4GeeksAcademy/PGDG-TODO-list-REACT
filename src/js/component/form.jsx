import React, {useState} from "react";




const Form = () => {

    
// DECLARACIONDE ESTADOS    
    const[tarea,setTarea] = useState("");
    const[listaTareas, setListaTareas] = useState([]);

//  FORM SUBMIT 
    const handleSubmit = (e) => {
        e.preventDefault();
        setListaTareas(listaTareas.concat(tarea));
        setTarea("");
        document.getElementById("Form").reset();
        
    }

console.log(tarea); 
console.log(listaTareas);





// LISTA DE TAREAS

let listaHTML = listaTareas.map(function(comanda, index) { 
    
    return (<li className="tarea list-group-item  pb-3 pt-3" key={index}>{comanda}<button className="botonBorrado float-end" onClick={()=> borrarTarea(comanda)}><i className="cruz fa-regular fa-circle-xmark  mt-2 mb-2"></i></button></li>)     
})


// TAREAS PENDIENTES 
let tareasPendientes = listaTareas.length;


// BORRADO DE LISTADO

function borrarTarea(tarea){
    let tareaActual = tarea;
    let tareaBorrada = listaTareas.filter((tarea) => tarea != tareaActual);
    setListaTareas(tareaBorrada);
    // console.log(tarea);
    // console.log(tareaBorrada);
}




    return (
    <>

        <h1 className="text-center mt-3">Lista de tareas</h1>
        <div className="libreta">
            <div className="contenedor container m-auto">
                
                <form className="formulario" id="Form" onSubmit={handleSubmit} >
                    <input type="text" className="float-left p-4 pb-0"  placeholder=" &#x1F589; Añade una nueva tarea " onChange={(e) => setTarea(e.target.value)}></input>
                </form>
                <hr/>
                <ul className="p-4 pt-0 mb-0">
                    
                    {listaHTML}
                </ul>
                <p className="tareasPendientes ps-4 pe-4">Quedan {tareasPendientes} tareas pendientes</p>
                
            </div>
            <div className="hojaAtras1 m-auto"></div>
            <div className="hojaAtras2 m-auto"></div>
        </div>
    </>
	);
};


export default Form