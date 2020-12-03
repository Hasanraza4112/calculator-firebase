var list=document.getElementById("list");

firebase.database().ref('calculator').on('child_added',function(data){
  // // create li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode( "Answer : " +" "+ data.val().value )
    li.appendChild(liText)



    list.appendChild(li)

})
// var hello
function valueButton(e){
//  calculatorForm.screen.value += e.value;
 calculatorForm.screen.value+=e.value 
//   set.setAttribute("id","set")
} 
// var helo =hello
// console.log(helo)
function Clear(){
    calculatorForm.screen.value = null;
}

function Calculate(){
    calculatorForm.screen.value = eval(calculatorForm.screen.value);
    var input = document.getElementById('input').value


    // // create li tag with text node
    // var li = document.createElement('li')
    // var liText = document.createTextNode( "Answer : " +" "+ todo_item )
    // li.appendChild(liText)



    // list.appendChild(li)
    var database = firebase.database().ref("calculator")
    var key = database.push().key
    var todos ={
        value:input,
        key:key
    }
    database.child(key).set(todos)
    input.value = ""


  
}

function del(){
    firebase.database().ref("calculator").remove()

    list.innerHTML=""
}
console.log(firebase.database)