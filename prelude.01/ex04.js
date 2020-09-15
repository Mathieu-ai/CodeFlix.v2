var string = "One Code";

string.charAt(0).toUpperCase();; // Returns "O"

string.slice(1); // Returns "ne code"

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  capitalizeFirstLetter(string); // Returns "One Code"


