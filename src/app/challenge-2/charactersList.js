function houseOfTheDragon() {
    let charactersList = ['Rhaenerya', 'Daemon', 'Viserys', 'Alicent'];

    charactersList.forEach((item, index) => {
       document.write('<li>' + (index+1) + " " + item + '</li>');
    })
}

houseOfTheDragon();