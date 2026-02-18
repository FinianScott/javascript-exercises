const removeFromArray = function() {
    const allArgs = Array.from(arguments);
    const arr = allArgs[0];
    args = allArgs.slice(1);




    for (let i = 0; i < arr.length; i++){
        for (let x = 0; x <args.length; x++){
            
            if (arr[i] === args[x]){
                arr.splice(i,1);
                i--;
                break;

            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
