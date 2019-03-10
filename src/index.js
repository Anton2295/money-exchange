// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    let result = new Object();


    if (currency > 10000) {
        result["error"] = "You are rich, my friend! We don't have so much coins for exchange";

        return result;
    }

    const config = [["H", 50], ["Q", 25], ["D", 10], ["N", 5], ["P", 1]];

    const NAME = 0;
    const VALUE = 1;


    for (let i = 0; i < config.length; i++) {
        if (config[i][VALUE] <= currency) {
            let result_ = parseInt(currency / config[i][VALUE]);

            result[config[i][NAME]] = result_;

            currency = currency % config[i][VALUE];

           // console.log(config[i][NAME] + " " + config[i][VALUE] + " " + result_);

        }

    }

    return result;
}





