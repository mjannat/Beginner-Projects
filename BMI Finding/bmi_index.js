const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector("#results");

    let bmi; // Move the declaration here

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid input ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid input ${weight}`;
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});
