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
    
    return (<li className="tarea list-group-item  pb-3 pt-3" key={index}>{comanda}<i className="cruz fa-regular fa-circle-xmark float-end mt-2 mb-2"></i></li>)     
})


// TAREAS PENDIENTES 
let tareasPendientes = listaTareas.length;


// BORRADO DE LISTADO






    return (
    <>
        <div className="contenedor container m-auto">
            <form id="Form" onSubmit={handleSubmit} >
                <input type="text" className="float-left p-4 pb-0"  placeholder=" &#x1F589; Añade una nueva tarea " onChange={(e) => setTarea(e.target.value)}></input>
            </form>
            <ul className="p-4 mb-0">
                
                {listaHTML}
            </ul>
            <p className="tareasPendientes ps-4 pe-4">Quedan {tareasPendientes} pendientes</p>
        </div>
    </>
	);
};


export default Form