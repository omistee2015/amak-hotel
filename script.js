/* =========================
   AMAK HOTEL JAVASCRIPT
========================= */


/* =========================
   ROOM PRICES
========================= */

const roomPrices = {

    "Single Room": 25000,

    "Double Room": 40000,

    "Suite": 65000

};


/*
   CHANGE THE PRICES ABOVE
   WHEN AMAK HOTEL GIVES YOU
   THE REAL PRICES.
*/



/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");


menuButton.addEventListener("click", function () {

    mainNav.classList.toggle("open");

});



/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks =
    document.querySelectorAll("#mainNav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.remove("open");

    });

});



/* =========================
   HERO SLIDER
========================= */

const heroImages =
    document.querySelectorAll(".hero-image");

const dots =
    document.querySelectorAll(".dot");

const nextButton =
    document.getElementById("nextSlide");

const previousButton =
    document.getElementById("previousSlide");


let currentSlide = 0;



function showSlide(index) {

    heroImages.forEach(function (image) {

        image.classList.remove("active");

    });


    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    heroImages[index].classList.add("active");

    dots[index].classList.add("active");


    currentSlide = index;

}



function nextSlide() {

    currentSlide++;

    if (currentSlide >= heroImages.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}



function previousSlideFunction() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            heroImages.length - 1;

    }

    showSlide(currentSlide);

}


nextButton.addEventListener(
    "click",
    nextSlide
);


previousButton.addEventListener(
    "click",
    previousSlideFunction
);



/* =========================
   AUTOMATIC SLIDER
========================= */

setInterval(function () {

    nextSlide();

}, 5000);



/* =========================
   SLIDER DOTS
========================= */

dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        showSlide(index);

    });

});



/* =========================
   ROOM BOOK BUTTONS
========================= */

const roomButtons =
    document.querySelectorAll(".room-button");


roomButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedRoom =
            button.getAttribute("data-room");


        const bookingRoom =
            document.querySelector(
                '#booking select[name="room"]'
            );


        const quoteRoom =
            document.getElementById("quoteRoom");


        bookingRoom.value =
            selectedRoom;


        quoteRoom.value =
            selectedRoom;


        document
            .getElementById("booking")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});



/* =========================
   CALCULATE NIGHTS
========================= */

function calculateNights(
    checkIn,
    checkOut
) {

    const start =
        new Date(checkIn);

    const end =
        new Date(checkOut);


    const difference =
        end - start;


    const nights =
        Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
        );


    return nights;

}



/* =========================
   QUOTE FORM
========================= */

const quoteForm =
    document.getElementById(
        "quoteForm"
    );


quoteForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const formData =
            new FormData(quoteForm);


        const name =
            formData.get("name");


        const phone =
            formData.get("phone");


        const room =
            formData.get("room");


        const checkIn =
            formData.get("checkin");


        const checkOut =
            formData.get("checkout");


        const message =
            formData.get("message");


        const nights =
            calculateNights(
                checkIn,
                checkOut
            );


        const result =
            document.getElementById(
                "quoteResult"
            );


        if (nights <= 0) {

            result.textContent =
                "Please select a valid check-in and check-out date.";

            return;

        }


        const total =
            nights *
            roomPrices[room];


        result.textContent =

            "Hello " +
            name +
            ", your estimated quote is ₦" +
            total.toLocaleString() +
            " for " +
            nights +
            " night(s) in a " +
            room +
            ".";


        /*
           WHATSAPP NUMBER

           REPLACE THE NUMBER BELOW
           WITH AMAK HOTEL'S REAL
           WHATSAPP NUMBER.

           Example:
           2348012345678
        */


        const hotelWhatsApp =
            "2348073721903";


        const whatsappMessage =

            "AMAK HOTEL QUOTE REQUEST" +
            "\n\n" +

            "Name: " +
            name +

            "\nPhone: " +
            phone +

            "\nRoom: " +
            room +

            "\nCheck-in: " +
            checkIn +

            "\nCheck-out: " +
            checkOut +

            "\nNights: " +
            nights +

            "\nEstimated Total: ₦" +
            total.toLocaleString() +

            "\nSpecial Request: " +
            message;


        /*
           OPEN WHATSAPP
        */

        if (
            hotelWhatsApp !==
            "234XXXXXXXXXX"
        ) {

            const whatsappURL =

                "https://wa.me/" +
                hotelWhatsApp +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                whatsappURL,
                "_blank"
            );

        }

    }
);



/* =========================
   BOOKING FORM
========================= */

const bookingForm =
    document.getElementById(
        "bookingForm"
    );


bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const formData =
            new FormData(
                bookingForm
            );


        const name =
            formData.get("name");


        const phone =
            formData.get("phone");


        const checkIn =
            formData.get("checkin");


        const checkOut =
            formData.get("checkout");


        const room =
            formData.get("room");


        const guests =
            formData.get("guests");


        const message =
            formData.get("message");


        const nights =
            calculateNights(
                checkIn,
                checkOut
            );


        const result =
            document.getElementById(
                "bookingResult"
            );


        if (nights <= 0) {

            result.textContent =
                "Please select valid check-in and check-out dates.";

            return;

        }


        const total =
            nights *
            roomPrices[room];


        result.textContent =

            "Booking request prepared for " +
            name +
            ". Estimated total: ₦" +
            total.toLocaleString() +
            ".";


        /*
           REPLACE WITH AMAK HOTEL
           WHATSAPP NUMBER
        */

        const hotelWhatsApp =
            "234XXXXXXXXXX";


        const whatsappMessage =

            "AMAK HOTEL BOOKING REQUEST" +

            "\n\n" +

            "Name: " +
            name +

            "\nPhone: " +
            phone +

            "\nRoom: " +
            room +

            "\nGuests: " +
            guests +

            "\nCheck-in: " +
            checkIn +

            "\nCheck-out: " +
            checkOut +

            "\nNights: " +
            nights +

            "\nEstimated Total: ₦" +
            total.toLocaleString() +

            "\nSpecial Request: " +
            message;


        if (
            hotelWhatsApp !==
            "234XXXXXXXXXX"
        ) {

            const whatsappURL =

                "https://wa.me/" +
                hotelWhatsApp +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                whatsappURL,
                "_blank"
            );

        }

    }
);



/* =========================
   DATE VALIDATION
========================= */

const today =
    new Date()
    .toISOString()
    .split("T")[0];


const dateInputs =
    document.querySelectorAll(
        'input[type="date"]'
    );


dateInputs.forEach(function (input) {

    input.min = today;

});



/* =========================
   TESTIMONIAL SLIDER
========================= */

const testimonials = [

    {
        text:
            "Amazing staff, beautiful environment, great food and excellent service. I will definitely come again!",

        name:
            "— AMAK Guest"
    },


    {
        text:
            "A comfortable place to relax and enjoy your stay in Ibadan.",

        name:
            "— Hotel Guest"
    },


    {
        text:
            "The atmosphere was pleasant and the service was welcoming.",

        name:
            "— Happy Guest"
    }

];


let testimonialIndex = 0;


const testimonialText =
    document.getElementById(
        "testimonialText"
    );


const testimonialName =
    document.getElementById(
        "testimonialName"
    );


const testimonialDots =
    document.querySelectorAll(
        ".testimonial-dot"
    );


function showTestimonial(index) {

    testimonialText.textContent =
        testimonials[index].text;


    testimonialName.textContent =
        testimonials[index].name;


    testimonialDots.forEach(
        function (dot) {

            dot.classList.remove(
                "active"
            );

        }
    );


    testimonialDots[index]
        .classList.add("active");

}


setInterval(function () {

    testimonialIndex++;

    if (
        testimonialIndex >=
        testimonials.length
    ) {

        testimonialIndex = 0;

    }


    showTestimonial(
        testimonialIndex
    );

}, 6000);
