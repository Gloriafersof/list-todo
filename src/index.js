const createTodo= document.getElementById('createTodo');
const addTodo= document.getElementById('addTodo');
const testList = document.getElementById('test');
const li= document.createElement('li')
const todoList= [];


const doneTodo= () => {
    const valueInputTodo = createTodo.value;
    todoList.push(valueInputTodo);
    console.log(todoList)
    
    const valueInLocalStorage= JSON.stringify(todoList);
    console.log(valueInLocalStorage);
    
    window.localStorage.setItem('myListTodo', valueInLocalStorage)
}
const getListTodo= window.localStorage.getItem('myListTodo');
const originalValue= JSON.parse(getListTodo);
console.log(originalValue);


const listTodoMap= originalValue.map((values) =>{
    
    testList.appendChild(document.createTextNode(`${values}`));
    
    
    
    
    
})

addTodo.addEventListener('click', doneTodo);







// const typed = new Typed('.typed', {
//     strings: ['import', 'day', 'fast']
// })





// quita inicio
const button = document.getElementById('fa-regular')

button.addEventListener('click',() =>{

        document.getElementById('container').style.display= 'block'
        document.getElementById('data-inicio').style.display= 'none'
        document.getElementById('dias').style.display= 'none'
});
// quita agregar mustra 
const cancelar = document.getElementById('cancelarTodo')

cancelar.addEventListener('click',() =>{

    document.getElementById('container').style.display= 'none'
        document.getElementById('data-inicio').style.display= 'block'
        document.getElementById('list-task').style.display= 'none'
    })
    
    
    
    
    
    
    
    
    
    
    
    addTodo.addEventListener('click',() =>{
        document.getElementById('dias').style.display= 'none'
        
        document.getElementById('list-task').style.display= 'flex'
        
        document.getElementById('data-inicio').style.display= 'block'
        document.getElementById('container').style.display= 'none'
    });
    // quita agregar mustra inicio



// const input = document.getElementById('createTodo');
// const listTask= document.getElementById('list-task ul');
// const message= document.getElementById('list-tasks');

// let tasks = [];

// function addTasks(){
//     const task= input.value;
//     if(task=== ''){
//         showError('you should add something')
//         return;
//     }
    
// }


// function showError(error){
//     const messageError= document.createElement('p');
//     messageError.textContent=error;
//     messageError.classList.add('error');

//      message.appendChild(messageError)
//     console.log(error)
// }