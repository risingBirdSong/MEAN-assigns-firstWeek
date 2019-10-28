function correctChange(money) {
    var change = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    };
    while (money > 25) {
        money -= 25;
        change.quarters += 1;
    }
    while (money > 10) {
        money -= 10;
        change.dimes += 1;
    }
    while (money > 5) {
        money -= 5;
        change.nickels += 1;
    }
    change.pennies += money;
    return change;
}
console.log(correctChange(167));
