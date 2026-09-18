```javascript
/* =====================================================
   AMAK HOTEL - COMPLETE JAVASCRIPT
===================================================== */


/* =====================================================
   HOTEL WHATSAPP NUMBER
===================================================== */

const hotelWhatsApp = "2348073721903";


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

}


/* Close mobile menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/* =====================================================
   ROOM BUTTONS
===================================================== */

const roomButtons = document.querySelectorAll(".book-room");
const roomSelect = document.getElementById("roomType");

roomButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedRoom = button.dataset.room;

        if (selectedRoom === "Single Room") {
            roomSelect.value = "35000";
        }

        if (selectedRoom === "Double Room") {
            roomSelect.value = "50000";
        }

        if (selectedRoom === "Suite") {
            roomSelect.value = "75000";
        }


        /* Scroll to booking form */

        document.getElementById("booking").scrollIntoView({
            behavior: "smooth"
        });


        /* Calculate price */

        calculateBooking();

    });

});


/* =====================================================
   BOOKING CALCULATOR
===================================================== */

const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const roomType = document.getElementById("roomType");


if (checkIn && checkOut && roomType) {

    checkIn.addEventListener("change", calculateBooking);

    checkOut.addEventListener("change", calculateBooking);

    roomType.addEventListener("change", calculateBooking);

}


function calculateBooking() {

    const price = Number(roomType.value);


    /* If room or dates have not been selected */

    if (!price || !checkIn.value || !checkOut.value) {

        document.getElementById("bookingTotal").textContent = "₦0";

        document.getElementById("nightsText").textContent =
            "Select your room and dates";

        return;

    }


    const start = new Date(checkIn.value);

    const end = new Date(checkOut.value);


    const difference = end - start;


    const nights = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );


    /* Invalid dates */

    if (nights <= 0) {

        document.getElementById("bookingTotal").textContent = "₦0";

        document.getElementById("nightsText").textContent =
            "Check-out must be after check-in";

        return;

    }


    /* Calculate total */

    const total = price * nights;


    document.getElementById("bookingTotal").textContent =
        "₦" + total.toLocaleString("en-NG");


    document.getElementById("nightsText").textContent =
        nights + (nights === 1 ? " night" : " nights");

}


/* =====================================================
   BOOKING FORM
===================================================== */

const bookingForm = document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();


        /* Get customer information */

        const name =
            document.getElementById("guestName").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();


        /* Get room */

        const room =
            document.getElementById("roomType");


        const roomName =
            room.options[room.selectedIndex].text;


        /* Get dates */

        const checkInDate =
            document.getElementById("checkIn").value;

        const checkOutDate =
            document.getElementById("checkOut").value;


        /* Get number of guests */

        const guests =
            document.getElementById("guests").value;


        /* Get calculated total */

        const total =
            document.getElementById("bookingTotal").textContent;


        /* Create WhatsApp message */

        const message =
`Hello AMAK HOTEL,

I would like to make a booking.

Name: ${name}
Phone: ${phone}
Email: ${email}

Room: ${roomName}
Check-in: ${checkInDate}
Check-out: ${checkOutDate}
Guests: ${guests}

Estimated Total: ${total}

Please confirm availability and booking details.`;


        /* Create WhatsApp link */

        const whatsappURL =
            "https://wa.me/" +
            hotelWhatsApp +
            "?text=" +
            encodeURIComponent(message);


        /* Open WhatsApp */

        window.open(whatsappURL, "_blank");

    });

}


/* =====================================================
   GET A QUOTE FORM
===================================================== */

const quoteForm = document.getElementById("quoteForm");


if (quoteForm) {

    quoteForm.addEventListener("submit", function(event) {

        event.preventDefault();


        /* Get quote information */

        const name =
            document.getElementById("quoteName").value.trim();

        const phone =
            document.getElementById("quotePhone").value.trim();

        const room =
            document.getElementById("quoteRoom").value;

        const guests =
            document.getElementById("quoteGuests").value;

        const request =
            document.getElementById("quoteMessage").value.trim();


        /* Create WhatsApp message */

        const message =
`Hello AMAK HOTEL,

I would like to request a quote.

Name: ${name}
Phone: ${phone}
Room Type: ${room}
Number of Guests: ${guests}

Additional Request:
${request}

Please send me a quotation.`;


        /* Create WhatsApp link */

        const whatsappURL =
            "https://wa.me/" +
            hotelWhatsApp +
            "?text=" +
            encodeURIComponent(message);


        /* Open WhatsApp */

        window.open(whatsappURL, "_blank");

    });

}


/* =====================================================
   DATE SETTINGS
===================================================== */

const today =
    new Date().toISOString().split("T")[0];


if (checkIn && checkOut) {

    /* Customers cannot select a date in the past */

    checkIn.min = today;

    checkOut.min = today;


    /* Checkout must be after check-in */

    checkIn.addEventListener("change", () => {

        checkOut.min = checkIn.value;


        if (
            checkOut.value &&
            checkOut.value <= checkIn.value
        ) {

            checkOut.value = "";

        }


        calculateBooking();

    });

}


/* =====================================================
   PHONE NUMBER
===================================================== */

/*
   AMAK HOTEL CONTACT:

   +234 807 372 1903

   WhatsApp:

   https://wa.me/2348073721903
*/


/* =====================================================
   END OF AMAK HOTEL JAVASCRIPT
===================================================== */
```
