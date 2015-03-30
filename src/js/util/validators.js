module.exports.validateNumberInput = function(input){
    if(input !== undefined){
        try{
            parseInt(input);
            return true;
        }catch(e){
            return false;
        }
    }else{
        return false;
    }
};
module.exports.validatePercentInput = function(percent){
    if(percent !== undefined){
        try{
            return !isNaN(parseFloat(percent));
        }catch(e){
            return false;
        }
    }else{
        return false;
    }
};