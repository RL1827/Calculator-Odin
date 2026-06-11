user = ""
displaying = document.querySelector(".display")
let result
function operator(first, operation, second){
    let resultant
    first = Number(first)
    second = Number(second)
    switch(operation){
        case '+':
            resultant = first + second
            break
        case '-':
            resultant = first - second
            break
        case '*':
            resultant = first * second
            break
        case '/':
            if (second == 0){
                alert("Did you know that division by zero is not allowed")
                break
            }
            resultant = first / second
            break
    }
    return resultant
}
document.body.addEventListener('click',(event) =>{
    let target = event.target
    if (target.classList.contains('zero')){
            user+= "0"
            displaying.textContent = user
    }
    else if (target.classList.contains('one')){
            user+= "1"
            displaying.textContent = user
    }
    else if (target.classList.contains('two')){
            user+= "2"
            displaying.textContent = user
    }
    else if (target.classList.contains('three')){
            user+= "3"
            displaying.textContent = user
    }
    else if (target.classList.contains('four')) {
            user+= "4"
            displaying.textContent = user
    }
    else if (target.classList.contains('five')){
            user+= "5"
            displaying.textContent = user
    }
    else if (target.classList.contains('six')){
            user+= "6"
            displaying.textContent = user
    }
    else if (target.classList.contains('seven')){
            user+= "7"
            displaying.textContent = user
    }
    else if (target.classList.contains('eight')){
            user+= "8"
            displaying.textContent = user
    }
    else if (target.classList.contains('nine')){
            user+= "9"
            displaying.textContent = user
    }
    else if (target.classList.contains('plus')){
            user+= " + "
            displaying.textContent = user
    }
    else if (target.classList.contains('minus')){
            user+= " - "
            displaying.textContent = user
    }
    else if (target.classList.contains('multiply')){
            user+= " * "
            displaying.textContent = user
    }
    else if (target.classList.contains('division')){
            user += " / "
            displaying.textContent = user
    }
    else if (target.classList.contains('clear')){
            user= ""
            displaying.textContent = user
    }
    else if (target.classList.contains('equal')){
            user = user.split(" ")
            operand1 = Number(user[0])
            operation = user[1]
            operand2 = Number(user[2])
            result = operator (operand1, operation, operand2)
            displaying.textContent = result
            user = ""
    }
})




