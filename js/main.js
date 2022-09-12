function get(){
    const user = prompt("Введите число!");
    const user1 = prompt("Введите число!");
    if(user < user1) {
        alert(`${user} Меньше ${user1}`)
    }else if(user1 < user) {
        alert(`${user1} Меньше ${user}`)
    }else{
        alert(`Равное`)
    }
}
get();


