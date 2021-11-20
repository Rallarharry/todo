const inputRuta = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const btnEl = document.getElementById("btn");
const listItems = [];


// event listeners

btnEl.addEventListener("click", addLi);
ulEl.addEventListener("click", deleteCheck)
inputRuta.value = "To do..";
inputRuta.addEventListener("click", clearField)
// funktioner
function clearField() {
    inputRuta.value = "";
}
function addLi() {
    
    // förhindra refresh
    event.preventDefault();
    
    if (inputRuta.value !== "To do.." && inputRuta.value !== "") {
        // Skapa todo DIV
        const toDoDiv = document.createElement('div');
        // lägg till "todo" som class
        toDoDiv.classList.add("todo");
        
        // skapa li
        const nyToDo = document.createElement('li');
        nyToDo.innerHTML += inputRuta.value;
        
        // gör klass till html elementet
        nyToDo.classList.add("todo-item")
        
        // fäst to do item till DIVen
        toDoDiv.appendChild(nyToDo);
        
        // completed knapp
        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fa-solid fa-check"></i>'
        completeButton.classList.add("complete-btn");
        toDoDiv.appendChild(completeButton);
        
        // skräp knapp
        const trashButton = document.createElement('button');
        trashButton.innerHTML = `<i class="fa-solid fa-minus"></i>`
        trashButton.classList.add("trash-btn");
        toDoDiv.appendChild(trashButton);
        
        // appenda till listan
        ulEl.appendChild(toDoDiv);
        
        // reseta input rutan
        inputRuta.value = "To do..";
    }
}
    
    function deleteCheck(e) {
        
        // gör en variabel som håller information vart man klickar
    const item = e.target;
    // om första indexet på items "classList"
    if (item.classList[0] === "trash-btn") {
            // gör en variabel som tar in
            // targets parent element
            const todo = item.parentElement;
            // kör "remove" metoden på den
            todo.remove();
        }
        
        if (item.classList[0] === "complete-btn") {
            
            const todo = item.parentElement
            todo.classList.toggle("completed");
        }   
}




// function deleteListElement() {
//     this.parentElement.remove();
// }

// function addLi() {
//     var txtVal = document.getElementById('txtVal').value,
//     listNode = document.getElementById('list'),
//     liNode = document.createElement("Li"),
//     txtNode = document.createTextNode(txtVal);

// liNode.appendChild(txtNode);
// listNode.appendChild(liNode); 

// }