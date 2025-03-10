
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const listItems = document.getElementById('bands');

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort(function (a, b) {
    return (strip(a) > strip(b)) ? 1 : -1;
})

bands.forEach(item => {
    listItems.innerHTML += (`
        <li>${item}</li>
    `);
    bands.sort();
    console.log(item);

})