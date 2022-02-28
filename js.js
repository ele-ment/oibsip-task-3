const tempcal = () => {

    const numb= document.getElementById('temp').value;

    const indexSel = document.getElementById('diff');
    const valuetemp = diff.options[indexSel.selectedIndex].value;
    
  const cel_fah = (cel) => {
        var Fahrenheit = Math.round((cel * 9/5) + 32);
        return Fahrenheit;
    }

    const fah_cel = (fah) => {
        var Celsius = Math.round((fah - 32) *5/9);
        return Celsius;
    }


    let result;

    if (valuetemp == 'cel') {
        result = cel_fah(numb);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;

    } else {
            result = fah_cel(numb);
            document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;


    }

  
}