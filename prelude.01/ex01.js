function lowerCase(str = '') {
    const result = []
  
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i)
  
      if (charCode >= 65 && charCode <= 90) {  // est-ce une valeur minuscule ?
        charCode = charCode + 32
      }  
      result[i] = String.fromCharCode(charCode);
    }
    return result.join('')
  }
  
  // TESTS
  console.log(lowerCase('Chopper'), 'RESULT: chopper')
  console.log(lowerCase('TONY TONY'), 'RESULT: tony tony')
