module.exports.monthlyCost = function(vehiclePrice, downPayment, tradeIn, interestRate, salesTax, term){
    var adjustedInterestRatePercent = interestRate * .01;
    var adjustedSalesTaxPercent = salesTax * .01; // 2.9 => .029
    var salesTaxAmount = vehiclePrice * adjustedSalesTaxPercent;
    var netCost = vehiclePrice + salesTaxAmount - downPayment - tradeIn;
    var rate = adjustedInterestRatePercent / 12;
    var rateCalc = (rate * Math.pow((1 + rate), term))/(Math.pow((1 + rate), term) - 1);
    return (netCost * rateCalc).toFixed(2);
};