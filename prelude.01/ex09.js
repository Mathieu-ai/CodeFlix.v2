var str = new String( "chopper" ); 
        // new = Permet de créer une instance d'un certain type d'objet à partir du constructeur qui existe pour celui-ci (natif ou défini par l'utilisateur).
        // Le mot-clé new, utilisé avec une fonction, applique les 4 étapes suivantes :
        // Il crée un nouvel objet à partir de zéro
        // Il lie cet objet à un autre objet en le définissant comme son prototype.
        // Le nouvel objet, créé à l'étape 1, est passé comme valeur this à la fonction
        // Si la fonction ne renvoie pas d'objet, c'est la valeur this qui est renvoyée.

         console.log("str.charAt(0) is : " + str.charAt(0)); 
         console.log("str.charAt(1) is : " + str.charAt(1)); 
         console.log("str.charAt(2) is : " + str.charAt(2)); 
         console.log("str.charAt(3) is : " + str.charAt(3)); 
         console.log("str.charAt(4) is : " + str.charAt(4)); 
         console.log("str.charAt(5) is : " + str.charAt(5)); 
         console.log("str.charAt(5) is : " + str.charAt(6));
