const form = document.querySelector("form")
// console.log(form)

form.addEventListener('submit', function(e){
e.preventDefault();

const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);
const results = document.querySelector("#results");
const note = document.querySelector('#note');

if ( height === "" || height < 0 || isNaN(height)){
results.innerHTML = `Please enter valid height ${height}`;
} else if ( weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML =  `Please enter valid weight ${weight}`;
    } else {
      const bmi =  (weight / ((height*height)/10000)).toFixed(2);

      //showing result
      results.innerHTML = `<h3>${bmi}</h3>`
    }

    //result summary

    if (bmi.value <= 18.6){
      note.innerHTML = `${bmi}`
    }else if (bmi.value >= 18.6 || bmivalue <= 24.9){
      note.innerHTML = "<h2>your Bmi is in Normal Range <h/2>"
    }else{
      note.value = "you are Overweight"
    }

})
