function swapCase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) { 
        // match = permet d'obtenir le tableau des correspondances entre la chaîne courante et une expression rationnelle
        // chr = Converts a codepoint number to a character 
        return chr ? match.toUpperCase() : match.toLowerCase(); 
        // ? is an alternative to an if statement where one of two values will be assigned to a variable based on a conditional statement.
    });
}
console.log(swapCase('One Code'));
console.log(swapCase('1337 Fruits'));