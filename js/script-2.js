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

        //Phone Number and Next Button Functionality
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

//Utility Function
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


////////////////////////////////////////
/**
 * একটা সিট একবার সিলেক্ট করতে হবে।
 * দ্বিতীয়বার ওইসিটে ক্লিক করলে সেটা বাতিল হয়ে যাবে।
 * 
 * 
 * নেক্সট বাটনে ক্লিক করলে সব সরে গিয়ে নতুন উইন্ডো আসবে।
 * নতুন উইন্ডোর কন্টিনিউউ বাটনে ক্লিক করলে আবার এই উইন্ডো আসবে।
 * সিট চারটার বেশি সিলেক্ট করা যাবে না।
 * চারটা সিট সিলেক্ট করার পর, +কুপন দিলে বাটন অ্যাকটিভ হবে। সিট চারটা না হলে কুপনে কাজ হবে না।
 * কুপনের বাটনে ক্লিক করলে ২০ বা ১৫ পারসেন্ট মাইনাস হয়ে গ্রান্ড প্রাইসে বসবে।
 * একেক কুপনের জন্য একেক প্রাইস ডিসকাউন্ট হবে।
 */
/////////////////////////////////