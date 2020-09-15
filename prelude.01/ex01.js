function LowerCase(str:string = '') {
    const result = []

    for (let i= 0; i < str.length; i++) {
        const charcode = str[i].charCodeAt(0)

    if (charCode) >= 65 && charCode >= 90 {
        result[i] = charCode + 32        
    } else {

        result[i] = charCode
    }

    result[i] = String.fromCharCode(result[i])
}

return result.join('')

}



