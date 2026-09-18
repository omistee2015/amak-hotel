/* =====================================================
   AMAK HOTEL - JAVASCRIPT
===================================================== */

const hotelWhatsApp = "2348073721903";

/* ==================== MOBILE MENU ==================== */
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", () => navMenu.classList.remove("show"));
    });
}

/* ==================== ROOM BUTTONS ==================== */
const roomButtons = document.querySelectorAll(".book-room");
const roomSelect = document.getElementById("roomType");

roomButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedRoom = button.dataset.room;
        if (selectedRoom === "Single Room") roomSelect.value = "25000";
        if (selectedRoom === "Double Room") roomSelect.value = "40000";
        if (selectedRoom === "Suite") roomSelect.value = "65000";

        document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
        calculateBooking();
    });
});

/* ==================== BOOKING CALCULATOR ==================== */
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
    if (!price || !checkIn.value || !checkOut.value) {
        document.getElementById("bookingTotal").textContent = "₦0";
        document.getElementById("nightsText").textContent = "Select your room and dates";
        return;
    }
    const start = new Date(checkIn.value);
    const end = new Date(checkOut.value);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (nights <= 0) {
        document.getElementById("bookingTotal").textContent = "₦0";
        document.getElementById("nightsText").textContent = "Check-out must be after check-in";
        return;
    }

    const total = price * nights;
    document.getElementById("bookingTotal").textContent = "₦" + total.toLocaleString("en-NG");
    document.getElementById("nightsText").textContent = nights + (nights === 1 ? " night" : " nights");
}

/* ==================== BOOKING FORM ==================== */
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("guestName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const room = document.getElementById("roomType");
        const roomName = room.options[room.selectedIndex].text;
        const checkInDate = document.getElementById("checkIn").value;
        const checkOutDate = document.getElementById("checkOut").value;
        const guests = document.getElementById("guests").value;
        const total = document.getElementById("bookingTotal").textContent;

        const message = `Hello AMAK HOTEL,

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

        window.open("https://wa.me/" + hotelWhatsApp + "?text=" + encodeURIComponent(message), "_blank");
    });
}

/* ==================== QUOTE FORM ==================== */
const quoteForm = document.getElementById("quoteForm");
if (quoteForm) {
    quoteForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("quoteName").value.trim();
        const email = document.getElementById("quoteEmail").value.trim();
        const checkInDate = document.getElementById("quoteCheckIn").value;
        const checkOutDate = document.getElementById("quoteCheckOut").value;
        const room = document.getElementById("quoteRoom").value;
        const request = document.getElementById("quoteMessage").value.trim();

        const message = `Hello AMAK HOTEL,

I would like to request a quote.

Name: ${name}
Email: ${email}
Check-in: ${checkInDate}
Check-out: ${checkOutDate}
Room Type: ${room}

Additional Request:
${request}

Please send me a quotation.`;

        window.open("https://wa.me/" + hotelWhatsApp + "?text=" + encodeURIComponent(message), "_blank");
    });
}

/* ==================== DATE SETTINGS ==================== */
const today = new Date().toISOString().split("T")[0];

if (checkIn && checkOut) {
    checkIn.min = today;
    checkOut.min = today;

    checkIn.addEventListener("change", () => {
        checkOut.min = checkIn.value;
        if (checkOut.value && checkOut.value <= checkIn.value) {
            checkOut.value = "";
        }
        calculateBooking();
    });
}

/* ==================== HERO SLIDER (auto-rotate dots) ==================== */
const dots = document.querySelectorAll(".slider-dots .dot");
let currentSlide = 0;

function rotateDots() {
    if (dots.length === 0) return;
    dots.forEach(d => d.classList.remove("active"));
    dots[currentSlide].classList.add("active");
    currentSlide = (currentSlide + 1) % dots.length;
}

if (dots.length > 0) {
    setInterval(rotateDots, 4000);
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            dots.forEach(d => d.classList.remove("active"));
            dot.classList.add("active");
            currentSlide = i;
        });
    });
}
