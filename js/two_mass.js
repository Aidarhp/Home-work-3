const two_a = [1,2,3,4,5,6,7,8,9,10,11,];
const mass_b = [1,2,3,4,5,6,7,8,9,10,];
function two_mass() {
    if (two_a.length > mass_b.length){
        alert("Масиив a больше длиной")
        console.log(two_a,"Больше длиной");
    } else if (mass_b.length > two_a.length) {
        alert("Масив b больше длиной")
        console.log(mass_b,"Больше длиной");
    } else {
        alert("Равное значение масивов")
    }
}
two_mass();
