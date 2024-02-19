const seats = document.getElementsByClassName('seat-button');
let seatRemain = parseInt(document.getElementById('remaining-seat').innerText);
const selectedSeatArray = [];

for (const seat of seats) {
    seat.addEventListener('click', function (e) {
        const seatNumber = e.target.innerText;

        if (!selectedSeatArray.includes(seatNumber)) {
            if (selectedSeatArray.length >= 4) {
                alert('Maximum Seat Selection is 4!');
                return;
            }
            selectedSeatArray.push(seatNumber);
            console.log(seatNumber);
            document.getElementById(seatNumber).classList.add('bg-themecolor');
            console.log(selectedSeatArray);
        }
        else if (selectedSeatArray.includes(seatNumber)) {
            selectedSeatArray.pop();
            e.target.classList.remove('bg-themecolor');
            console.log(selectedSeatArray);
        }

        const selectedSeatCount = selectedSeatArray.length;
        setInnerText('seat-count-indicator', selectedSeatCount);
        const remainingSeatCount = seatRemain - selectedSeatArray.length;
        setInnerText('remaining-seat', remainingSeatCount);

        
        if (selectedSeatArray.length > 0) {
            const phoneNumberInputField = document.getElementById('phone-number');
            phoneNumberInputField.addEventListener('input', function () {
                let phoneNumber = parseInt(phoneNumberInputField.value);
                if (typeof phoneNumber === 'number' && phoneNumber.toString().length >= 10) {
                    document.getElementById('next-button').attributes.removeNamedItem('disabled');
                }
                else {
                    document.getElementById('next-button').disabled = true
                }
            })
        }
    })
}


function setInnerText(idName, value) {
    const newElement = document.getElementById(idName);
    newElement.innerText = value;
}

function textReadyToCompare(elementID) {
    const elementText = document.getElementById(elementID).innerText.toLocaleLowerCase();
    const elementTextSplit = elementText.split(' ');
    const textReady = elementTextSplit.join('');
    return textReady;
}
function inputReadyToCompare(elementID) {
    const elementText = (elementID).value.toLocaleLowerCase();
    const elementTextSplit = elementText.split(' ');
    const textReady = elementTextSplit.join('');
    return textReady;
}
