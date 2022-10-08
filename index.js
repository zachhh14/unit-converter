const ConvertButton = document.getElementById("convert-bttn");
let InputNumber = document.getElementById("input-num");
let OutputLength = document.getElementById("output-le");
let OutputVolume = document.getElementById("output-vo");
let OutputMass = document.getElementById("output-ma");
// let Button = document.getElementById("buttn");
let SentenceLength = "";
let SentenceVolume = "";
let SentenceMass = "";
let tf = true;
let unit = {
  Feet: 3.281,
  Gallon: 0.264,
  Pound: 2.204,
};

ConvertButton.addEventListener("click", function () {
  if (tf) {
    InputNumber = InputNumber.value;
    console.log(InputNumber);
    render(InputNumber);
  }
});

// if (tf) {
//   Button.innerHTML = `<button id="convert-bttn">Convert</button>`;
// }
// else{
//   Button.innerHTML = `<button id="convert-bttn" disabled>Convert</button>`;
// }

function render(num) {
  length(num);
  volume(num);
  mass(num)
  tf = false; 
}

function length(num) {
  SentenceLength = `
    ${num} meters = ${(num * unit.Feet).toFixed(3)} feet | ${num} feet = ${(
    num / unit.Feet
  ).toFixed(3)} meters
  `;
  OutputLength.innerHTML = SentenceLength;
}

function volume(num) {
  SentenceVolume = `${num} liters = ${(num * unit.Gallon).toFixed(3)}  gallons | ${num} gallons = ${(num / unit.Gallon).toFixed(3)} liters`;
  OutputVolume.innerHTML = SentenceVolume;
}

function mass(num) {
  SentenceMass = `${num} kilos = ${(num * unit.Pound).toFixed(3)}  pounds | ${num} pounds = ${(num / unit.Pound).toFixed(3)} kilos`;
  OutputMass.innerHTML = SentenceMass;
}



// volume 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// mass 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
