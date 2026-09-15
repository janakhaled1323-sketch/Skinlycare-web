// =========================
// APPLY SAVED THEME (قبل أي حاجة تانية عشان مايحصلش فلاش)
// =========================
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}


fetch("./navBar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar").innerHTML = data;


        // =========================
        // MOBILE MENU
        // =========================

        const menuBtn = document.getElementById("mobile-menu-btn");
        const navWrapper = document.getElementById("nav-wrapper");

        if (menuBtn && navWrapper) {

            menuBtn.addEventListener("click", () => {

                navWrapper.classList.toggle("active");

                const icon = menuBtn.querySelector("i");

                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");

            });

        }


        // =========================
        // DARK MODE
        // =========================

        const themeBtn = document.getElementById("theme-toggle");
        const themeIcon = document.getElementById("theme-icon");

        if (themeBtn && themeIcon) {

            // ظبطي شكل الأيقونة صح لو الدارك مود متفعل من الأول
            if (document.body.classList.contains("dark-mode")) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            }

            themeBtn.addEventListener("click", () => {

                document.body.classList.toggle("dark-mode");

                themeIcon.classList.toggle("fa-moon");
                themeIcon.classList.toggle("fa-sun");

                // تخزين الاختيار عشان يفضل ثابت
                if (document.body.classList.contains("dark-mode")) {
                    localStorage.setItem("theme", "dark");
                } else {
                    localStorage.setItem("theme", "light");
                }

            });

        }


        // =========================
        // NAVBAR COUNTS
        // =========================

        if (typeof updateCartCount === "function") {
            updateCartCount();
        }

        if (typeof updateWishlistCount === "function") {
            updateWishlistCount();
        }


        // =========================
        // BACK TO TOP
        // =========================

        const backToTop = document.getElementById("backToTop");

        if (backToTop) {

            window.addEventListener("scroll", function () {

                if (window.scrollY > 300) {
                    backToTop.style.display = "flex";
                } else {
                    backToTop.style.display = "none";
                }

            });


            backToTop.addEventListener("click", function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            });

        }

    });