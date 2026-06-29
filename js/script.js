/* ===========================
   Common (All Pages)
=========================== */

const header = document.querySelector(".header");

if (header) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// Hero Video Custom Timing (Start at 3s, loop 10s before end)
const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  // Set start time to 3 seconds once the video metadata loads
  heroVideo.addEventListener("loadedmetadata", () => {
    heroVideo.currentTime = 3;
  });

  // Monitor playback time to loop back to 3 seconds
  heroVideo.addEventListener("timeupdate", () => {
    const duration = heroVideo.duration;
    if (duration) {
      const endTime = duration - 10; // Ends 10 seconds before the total duration
      if (heroVideo.currentTime >= endTime) {
        heroVideo.currentTime = 3;
        heroVideo.play();
      }
    }
  });
}

// Mobile Menu
const menu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
    if (menu && overlay) {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    }
}

/* ===========================
   Rooms Page
=========================== */

// Room Filtering
const filterBtns = document.querySelectorAll(".filter-btn");
const roomCards = document.querySelectorAll(".rooms-grid .room-card");

if (filterBtns.length) {

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {

            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            roomCards.forEach(card => {
                if (
                    filterValue === "all" ||
                    card.getAttribute("data-category") === filterValue
                ) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

        });
    });

}

// Modal
const modal = document.getElementById("bookingModal");
const openModalBtns = document.querySelectorAll(".open-booking");
const closeModalBtn = document.getElementById("closeModalBtn");
const roomSelect = document.getElementById("roomSelect");
const bookingForm = document.getElementById("resortBookingForm");

if (
    modal &&
    closeModalBtn &&
    roomSelect &&
    bookingForm
) {

    openModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const roomName = btn.getAttribute("data-room");
            roomSelect.value = roomName;
            modal.classList.add("show");
        });
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        alert(
            `Thank you, ${document.getElementById("fullName").value}! Your reservation request for the ${roomSelect.value} has been submitted successfully.`
        );

        modal.classList.remove("show");
        bookingForm.reset();
    });

}

/* ===========================
   Contact Page
=========================== */

const contactForm = document.getElementById("contactUsForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        alert(
            `Thank you, ${document.getElementById("contactName").value}! Your inquiry has been sent successfully. We will get back to you within 24 hours.`
        );

        e.target.reset();
    });

}

/* ===========================
   Blog Page
=========================== */

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Thank you for subscribing to the Mantra Resort newsletter!");

        e.target.reset();
    });

}