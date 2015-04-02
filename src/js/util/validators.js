/*
  undefined's are ok, defaults are set for inputs (and if no default, calc simply isn't made)
 */
module.exports.validateNumberInput = function(input){
    try{
        if(input === undefined){
            return true;
        }else{
            parseInt(input);
        }
        return true;
    }catch(e){
        return false;
    }
};
module.exports.validatePercentInput = function(percent){
    try{
        if(percent === undefined){
            return true;
        }else{
            return !isNaN(parseFloat(percent));
        }
    }catch(e){
        return false;
    }
};