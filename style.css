```javascript
/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


/* Close mobile menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});


/* =========================
   ROOM BUTTONS
========================= */

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

        document.getElementById("booking").scrollIntoView({
            behavior: "smooth"
        });

        calculateBooking();

    });

});


/* =========================
   BOOKING CALCULATOR
========================= */

const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const roomType = document.getElementById("roomType");

checkIn.addEventListener("change", calculateBooking);
checkOut.addEventListener("change", calculateBooking);
roomType.addEventListener("change", calculateBooking);


function calculateBooking() {

    const price = Number(roomType.value);

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

    if (nights <= 0) {

        document.getElementById("bookingTotal").textContent = "₦0";

        document.getElementById("nightsText").textContent =
            "Check-out must be after check-in";

        return;
    }

    const total = price * nights;

    document.getElementById("bookingTotal").textContent =
        "₦" + total.toLocaleString("en-NG");

    document.getElementById("nightsText").textContent =
        nights + (nights === 1 ? " night" : " nights");
}


/* =========================
   BOOKING FORM
========================= */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("guestName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const room = document.getElementById("roomType");

    const roomName =
        room.options[room.selectedIndex].text;

    const checkInDate =
        document.getElementById("checkIn").value;

    const checkOutDate =
        document.getElementById("checkOut").value;

    const guests =
        document.getElementById("guests").value;

    const total =
        document.getElementById("bookingTotal").textContent;


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

    /*
       CHANGE THIS NUMBER LATER
       TO AMAK HOTEL'S REAL WHATSAPP NUMBER.

       Example:
       Nigeria number 08012345678 becomes
       2348012345678
    */

    const hotelWhatsApp = "2348000000000";

    const whatsappURL =
        "https://wa.me/" +
        hotelWhatsApp +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});


/* =========================
   QUOTE FORM
========================= */

const quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("quoteName").value;

    const phone =
        document.getElementById("quotePhone").value;

    const room =
        document.getElementById("quoteRoom").value;

    const guests =
        document.getElementById("quoteGuests").value;

    const request =
        document.getElementById("quoteMessage").value;


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

    /*
       CHANGE THIS TO THE REAL
       AMAK HOTEL WHATSAPP NUMBER.
    */

    const hotelWhatsApp = "2348000000000";

    const whatsappURL =
        "https://wa.me/" +
        hotelWhatsApp +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});


/* =========================
   SET MINIMUM CHECK-IN DATE
========================= */

const today = new Date().toISOString().split("T")[0];

checkIn.min = today;
checkOut.min = today;


/* Prevent checkout before check-in */

checkIn.addEventListener("change", () => {

    checkOut.min = checkIn.value;

    if (checkOut.value && checkOut.value <= checkIn.value) {
        checkOut.value = "";
    }

    calculateBooking();
});
```
