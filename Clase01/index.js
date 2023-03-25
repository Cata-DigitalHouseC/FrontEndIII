 

const lista = [
    'cars',
    'nemo',
    'pencil',
    'dog',
    'cat'
];

document.getElementById("root").style.color="green"
document.getElementById("root2").innerHTML = `<ul${lista
    .map((pelis) => `<li>${pelis}</li>`)
    .join("")}</ul>}`
    
 alert("hola")    
    
     
    
     
    