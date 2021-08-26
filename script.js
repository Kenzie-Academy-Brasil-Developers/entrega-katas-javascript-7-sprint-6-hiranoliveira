const newForEach = (array, callback) => {
    for(let i = 0; i < array.length; i++){
        let elementoAtual = array[i]
        let index = i
        callback(elementoAtual, index, array)
    }
}

const newFill = (array, valor, inicio, fim) => {
    if (inicio === undefined){
        inicio = 0
    }
    if (fim === undefined){
        fim = array.length
    }
    for (let i = inicio; i < fim; i++){
        let elementoAtual = array[i]
        let index = i
        if ( elementoAtual !== valor){
            elementoAtual = valor
        }
    }
    return array
}

const newMap = (array, callback) => {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        let elementoAtual = array[i]
        let index = i

        newArray.push(callback(elementoAtual, index, array))
    }
    return newArray
}

const newSome = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        let elementoAtual = array[i]
        let index = i
        if (callback(elementoAtual, index, array) === true){
            return true
        }
    }
    return false
}

const newFind = (array, callback) => {
    for(let i  = 0; i < array.length; i++){
        let elementoAtual = array[i]
        let index = i        
        if (callback(elementoAtual, index, array) === true){
            return elementoAtual
        }
    }
    return undefined
}

const newFindIndex = (array, callback) => {
    
    for(let i  = 0; i < array.length; i++){
        let elementoAtual = array[i]
        let index = i        
        if (callback(elementoAtual, index, array) === true){
            return index
        }
    }
    return -1
}

const newEvery = (array, callback) => {
    for(let i  = 0; i < array.length; i++){
        let elementoAtual = array[i]
        let index = i        
        if (callback(elementoAtual, index, array) === false){
            return false
        }
    }
    return true
}

const newFilter = (array, callback) => {
    let newArray = []
    for(let i  = 0; i < array.length; i++){
        let elementoAtual = array[i]
        let index = i        
        if (callback(elementoAtual, index, array) === true){
            newArray.push(elementoAtual)
        }
    }
    return newArray
}

const newConcat = () => {

}

const newIncludes = (array, element, start) => {
    if (start === undefined){
        start = 0
    }
    for (let i = start; i < array.length; i++){
        if (array[i] === element){
            return true
        }
    }
    return false
}

const newIndexOf = (array, element, start) => {
    let output = -1
    if (start === undefined){
        start = 0
    }
    for (let i = start; i < array.length; i++){
        if (array[i] === element){
            output = i
        }
    }    
    return output
}

const newJoin = (array, separador) => {
    let string = ''
    if(separador === undefined){
        separador = ","
    }
    for (let i = 0; i < array.length; i++){
        if ( i !== array.length -1){
            string += array[i] + separador
        }
        string += array[i]
    }
    return string
}

const newReduce = (arr, callback, count) => {
    let output = 0;
    if (count === undefined) {
        for (let index = 0; index < arr.length - 1; index++) {
            if (index === 0) {
                output = callback(arr[0], arr[1], 1, arr);
            } else {
                output = callback(output, arr[index + 1], index + 1, arr);
            }
        }
    } else {
        for (let index = 0; index < arr.length; index++) {
            if (index === 0) {
                output = callback(count, arr[0], 0, arr);
            } else {
                output = callback(output, arr[index], index, arr);
            }
        }
    }
    return output;
};