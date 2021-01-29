//  creat function by using $ sign to use document.getElememtByid
function $(selectedId) {
    return document.getElementById(selectedId);
}

$('first-class-plush-count').addEventListener('click', function() {
    SelecteAirTricket('first', true);
});
$('first-class-minus-count').addEventListener('click', function() {
    SelecteAirTricket('first', false);
});

$('economy-class-plush-count').addEventListener('click', function() {
    SelecteAirTricket('economy', true);
});
$('economy-class-minus-count').addEventListener('click', function() {
    SelecteAirTricket('economy', false);
});

// main  function  is created  for controlling tricket Quentity and other function

function SelecteAirTricket(tricketClass, quentity) {
    const tricketQuentity = ConvertStringToNumber(tricketClass);

    let newTricketQuentity = tricketQuentity;
    if (quentity == true) {
        newTricketQuentity = newTricketQuentity + 1;
    }
    if (quentity == false && newTricketQuentity >= 1) {
        newTricketQuentity = newTricketQuentity - 1;
    }

    $(tricketClass + '-count').value = newTricketQuentity;

    TotalPriceCount();
}

// this function is created  for calculate total cost vat and subtotal
function TotalPriceCount() {
    const numberOfEconomyTricket = ConvertStringToNumber('economy');
    const numberofFirstClassTricket = ConvertStringToNumber('first');
    // subTotal
    const subTotalCost = numberOfEconomyTricket * 100 + numberofFirstClassTricket * 150;
    $('sub-total-count').innerText = '$' + subTotalCost;
    // vat
    const vatCost = Math.round(subTotalCost / 10);
    $('vat-count').innerText = '$' + vatCost;

    // total
    const totalCost = subTotalCost + vatCost;
    $('total-cost').innerText = '$' + totalCost;
}

// this function is created  for converting a number to a string
function ConvertStringToNumber(targetId) {
    const input = $(targetId + '-count').value;
    const convertToInt = parseInt(input);
    return convertToInt;
}