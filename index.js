let names = ["Andy", "Maryl", "Jolie", "Matt", "Melissa", "Ryan", "Seth", "Jaque"];


let arr1 = names.slice(),
    arr2 = names.slice();

arr1.sort(function () { return 0.5 - Math.random(); });
arr2.sort(function () { return 0.5 - Math.random(); });

while (arr1.length) {
    let name1 = arr1.pop(),
        name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();

    if (name1 == name2) {
        console.log('its fucked you dingus')
    } else if (name1 == 'Andy' && name2 == 'Melissa') {
        console.log('buy your spouse your own present you cheap bastard')
    } else if (name1 == "Maryl" && name2 == 'Ryan') {
        console.log('Spouse detected')
    } else if (name1 == 'Jolie' && name2 == 'Seth') {
        console.log('Buy Seth a real present!')
    } else if (name1 == 'Matt' && name2 == 'Jaque') {
        console.log('Matt % jac error')
    } else {
        console.log(name1 + ' gets ' + name2);
    }
}
