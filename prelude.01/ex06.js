function spinalCase(str = '') {
    const result = []
    var oldCharCode              // contiendra le dernière caractère lu

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

        result.push(String.fromCharCode(charCode));     // empile le caractère transformé ou non
        oldCharCode = charCode
    } 
    return result.join('')
  }
  

  // TESTS
  console.log(spinalCase('Chopper -Tony Tony'), 'RESULT: chopper')

/*
<<<<<<< HEAD
Avc utilisation de la librarie JS
"-----  AAA   ffff BB --------    lkdfjgkj  ".replace( /-+/g, " ").trim().replace( /\s+/g, "-").toLowerCase()
*/
=======

Avc utilisation de la librarie JS
"-----  AAA   ffff BB --------    lkdfjgkj  ".replace( /-+/g, " ").trim().replace( /\s+/g, "-").toLowerCase()

*/
>>>>>>> 0c693b3362eea14875f4078005f6572883fb867d
