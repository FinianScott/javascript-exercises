const sumAll = function() {
    const args = Array.from(arguments).sort((a,b)=> a - b);
    let sum = 0;
    let validCheck = Number.isInteger(args[0]) && Number.isInteger(args[1]) && args[0] > 0 && args[1] > 0;
    if (validCheck){
        for (let i = args[0]; i <= args[1]; i++){
            sum+= i;
        }
        return sum;
    }
    else{
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
