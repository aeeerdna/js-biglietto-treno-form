const trainHTMLElement = document.getElementById("train");

const ticketHTMLButton = document.getElementById("calc-button")

ticketHTMLButton.addEventListener('click', function (event) {
    console.log(event);

    // HOW MANY KM?
    const inputKmHTMLElement = document.getElementById('input-km');
    console.log(inputKmHTMLElement);
    console.log(inputKmHTMLElement.value)
    const km = parseInt(inputKmHTMLElement.value);

    // HOW OLD ARE YOU?
    const inputAgeHTMLElement = document.getElementById('input-age');

    const selectAgeValue = inputAgeHTMLElement.value;

    let discount;

    switch (selectAgeValue) {
        case 'Under 18': {
            discount = 20;
            break;
        }

        case 'Over 65': {
            discount = 40;
            break;
        }

        default: {
            discount = 0;
            break;
        }
    }


    // TICKET PRICE
    if (!isNaN(km)) {
        console.log('km is a number');

        // full price
        let fullPrice = 0.21 * km;

        // discounted price
        const discountedPrice = fullPrice / 100 * discount;

        // total
        totalPrice = fullPrice - discountedPrice;

        // output with 2 decimal places
        const train = '<p> The ticket price is ' + totalPrice.toFixed(2) + ' € </p>';
        console.log(train);
        trainHTMLElement.innerHTML = train;
    } else {
        trainHTMLElement.innerHTML = 'The data was entered incorrectly';
    }

})
