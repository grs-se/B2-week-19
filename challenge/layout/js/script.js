// Mobile navigation
// ================================================================================================= //
const btnNavEl = document.querySelector("#btn-mobile-nav");
const headerEl = document.querySelector("#header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Sticky navbar
// ================================================================================================= //
function stickyNav() {
  const sectionHeroEl = document.querySelector("#banner-primary");
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);

      if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
      }

      if (ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
      }
    },
    {
      // In the viewport
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  obs.observe(sectionHeroEl);
}

// Sticky hamburger
// ================================================================================================= //
function stickyHamburger() {
  const hamburger = document.querySelector("#btn-mobile-nav");
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);

      if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
      }

      if (ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
      }
    },
    {
      // In the viewport
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  obs.observe(hamburger);
}
// Smooth scroll
// ================================================================================================= //
function smoothScroll(e) {
  // console.log(event.target);
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href");
  let destination = document.querySelector(targetId).offsetTop;
  window.scrollTo({
    top: destination,
    behavior: "smooth",
  });
}

// Scroll up / back to top image
const scrollBtn = document.getElementById("scrollUp");
const section1 = document.getElementById("section1");
scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let destination = section1.offsetTop;
  window.scrollTo({
    top: destination,
    behavior: "smooth",
  });
});

// Nav highlighter
// ================================================================================================= //
function navHighlighter() {
  let scrollY = window.scrollY;

  sections.forEach((current) => {
    //const href = this.getAttribute("href");
    //const offsetTop = document.querySelector(href).offsetTop;
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - navbarHeight;
    const sectionId = current.getAttribute("id");

    //console.log(sectionHeight);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-links a[href*=" + sectionId + "]").classList.add("current");
    } else {
      document.querySelector(".nav-links a[href*=" + sectionId + "]").classList.remove("current");
    }
  });
}

// Parallax Effect
// ================================================================================================= //
function parallaxEffect() {
  const parallax = document.querySelectorAll(".parallax");
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    for (let i = 0; i < parallax.length; i++) {
      parallax[i].style.backgroundPositionY = (offset - parallax[i].offsetTop) * 0.7 + "px";
      // console.log((parallax[i].style.backgroundPositionY = (offset - parallax[i].offsetTop) * 0.7 + "px"));
    }
  });
}

// Init
// ================================================================================================= //
const pageFunction = () => {
  parallaxEffect();
  // stickyNav();
  // stickyHamburger();
  window.addEventListener("scroll", navHighlighter);
};

pageFunction();
