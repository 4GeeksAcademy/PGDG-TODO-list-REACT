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
    
    return (<li className="list-group-item" key={index}>{comanda}</li>)     
})

let tareasPendientes = listaTareas.length;
       

    return (
    <>

        <form id="Form" onSubmit={handleSubmit}>
		    <input type="text" className=""  placeholder="Añade una nueva tarea" onChange={(e) => setTarea(e.target.value)}></input>
        </form>
        <ul>
            
            {listaHTML}
        </ul>
        <p>Quedan {tareasPendientes} pendientes</p>
    </>
	);
};


export default Form