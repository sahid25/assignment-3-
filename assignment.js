
// kilometerToMeter
function kilometerToMeter(kilo) {
    var meter = kilo * 1000;
    return meter;
}

// BudgetCalculator

function budgetCalculator(watch, phone, laptop) {
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;

}

//HotelCost

function hotelCost(day) {
    var payment = 0;
    if (day <= 10) {
        var payment = day * 100;
    }
    else if (day <= 20) {
        var firstpart = 10 * 100;
        var remaining = day - 10;
        var secoundPart = remaining * 80;
        var payment = firstpart + secoundPart;
    }
    else {
        var firstpart = 10 * 100;
        var secoundPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        var payment = firstpart + secoundPart + thirdPart;
    }
    return payment;
}


// megaFriend 

function megaFriend(friends) {
    var find = friends[0].length;
    var filter = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i].length;
        if (element > find) {
            find = element;
            filter = friends[i];
        }

    }
    return filter;
}

