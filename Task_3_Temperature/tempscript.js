document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    const inputTemp = document.getElementById('inputTemp');
    const inputUnit = document.getElementById('inputUnit');
    const outputTemp = document.getElementById('outputTemp');
    const outputUnit = document.getElementById('outputUnit');
  
    convertBtn.addEventListener('click', function() {
      const temp = parseFloat(inputTemp.value);
      const fromUnit = inputUnit.value;
      const toUnit = outputUnit.value;
  
      if (fromUnit === toUnit) {
        outputTemp.innerText = temp;
      } else if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
          outputTemp.innerText = (temp * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
          outputTemp.innerText = temp + 273.15;
        }
      } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
          outputTemp.innerText = (temp - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
          outputTemp.innerText = (temp - 32) * 5/9 + 273.15;
        }
      } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
          outputTemp.innerText = temp - 273.15;
        } else if (toUnit === 'fahrenheit') {
          outputTemp.innerText = (temp - 273.15) * 9/5 + 32;
        }
      }
    });
  });
  