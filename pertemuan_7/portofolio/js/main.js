// ========================================
// TYPING EFFECT
// Hanya berjalan di halaman Home
// ========================================

const typingText = document.getElementById("typing-text");

if (typingText) {

    const names = [
        "Iren Meiliani Taslim",
        "Web Developer",
        "Mahasiswi"
    ];

    let nameIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentName = names[nameIndex];

        if (isDeleting) {

            typingText.textContent =
                currentName.substring(0, charIndex - 1);

            charIndex--;

        } else {

            typingText.textContent =
                currentName.substring(0, charIndex + 1);

            charIndex++;
        }


        let delay = isDeleting ? 50 : 100;


        if (!isDeleting && charIndex === currentName.length) {

            delay = 2000;

            isDeleting = true;

        } else if (isDeleting && charIndex === 0) {

            isDeleting = false;

            nameIndex =
                (nameIndex + 1) % names.length;

            delay = 500;
        }


        setTimeout(typeEffect, delay);
    }


    typeEffect();
}


// ========================================
// PROJECT DATA
// ========================================

const projects = [

    {
        title: "Website Profil",

        desc:
            "Website profil pribadi menggunakan HTML dan CSS.",

        image:
            "https://via.placeholder.com/600x400/ec4899/ffffff?text=Website+Profil"
    },


    {
        title: "Kalkulator",

        desc:
            "Kalkulator interaktif menggunakan JavaScript.",

        image:
            "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Kalkulator"
    },


    {
        title: "Form Pendaftaran",

        desc:
            "Form interaktif dengan validasi menggunakan JavaScript.",

        image:
            "https://via.placeholder.com/600x400/14b8a6/ffffff?text=Form+Pendaftaran"
    }

];


// ========================================
// GENERATE PROJECT CARDS
// Hanya berjalan jika project-grid ada
// ========================================

const projectGrid =
    document.getElementById("project-grid");


if (projectGrid) {

    projects.forEach(function (project) {

        const card =
            document.createElement("div");

        card.className =
            "project-card";


        card.innerHTML = `
            <img
                src="${project.image}"
                alt="${project.title}"
            >

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.desc}
            </p>
        `;


        // Click event
        card.addEventListener(
            "click",
            function () {

                alert(
                    "Anda memilih proyek: " +
                    project.title
                );

            }
        );


        projectGrid.appendChild(card);

    });
}


// ========================================
// ACTIVE NAVIGATION
// Otomatis menentukan halaman aktif
// ========================================

const currentPage =
    window.location.pathname
        .split("/")
        .pop() || "index.html";


const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");


    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});


// ========================================
// CONTACT FORM VALIDATION
// ========================================

const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Ambil input
            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            // Error elements
            const nameError =
                document.getElementById("name-error");

            const emailError =
                document.getElementById("email-error");

            const messageError =
                document.getElementById("message-error");

            const formSuccess =
                document.getElementById("form-success");


            // Reset pesan
            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";
            formSuccess.textContent = "";


            let isValid = true;


            // Validasi nama
            if (name === "") {

                nameError.textContent =
                    "Nama wajib diisi.";

                isValid = false;
            }


            // Validasi email
            if (email === "") {

                emailError.textContent =
                    "Email wajib diisi.";

                isValid = false;

            } else if (!isValidEmail(email)) {

                emailError.textContent =
                    "Format email tidak valid.";

                isValid = false;
            }


            // Validasi pesan
            if (message === "") {

                messageError.textContent =
                    "Pesan wajib diisi.";

                isValid = false;

            } else if (message.length < 10) {

                messageError.textContent =
                    "Pesan minimal 10 karakter.";

                isValid = false;
            }


            // Jika valid
            if (isValid) {

                formSuccess.textContent =
                    "✓ Pesan berhasil dikirim. Terima kasih, " +
                    name + "!";

                contactForm.reset();

            }

        }
    );
}


// ========================================
// EMAIL VALIDATION FUNCTION
// ========================================

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}