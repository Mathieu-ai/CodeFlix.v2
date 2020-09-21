function lowerCase(str = '') {
    const result = []
    var oldCharCode

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i)
        if (charCode == 32) {    // Si caractère Espace
          //console.log(charCode + ' '+oldCharCode)
          if (oldCharCode == 45)
            continue;  
          charCode = 45       // Remplace 32 par 45, remplace espace par tiret
        } else if (charCode >= 65 && charCode <= 90) {  // est-ce une valeur minuscule ?
          charCode = charCode + 32
        }

        result.push(String.fromCharCode(charCode));
        oldCharCode = charCode
    } 
    return result.join('')
  }
  

  // TESTS
  console.log(lowerCase('Chopper -Tony Tony'), 'RESULT: chopper')

/*

Avc utilisation de la librarie JS
"     AAA   ffff BB     lkdfjgkj  ".trim().replace( /\s+/g, "-").toLowerCase()

*/
