const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation =
          "navLinkFade 0.5s ease forwards  ${index / 4 + 0.3}s";
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

const tl = gsap.timeline({ defaults: { ease: "power0.out" } });

tl.fromTo(
  "nav",
  { x: "-10%", opacity: 0 },
  { x: "0%", opacity: 1, duration: 0.5 }
);

tl.fromTo(
  ".logo",
  { x: "-10%", opacity: 0 },
  { x: "0%", opacity: 1, duration: 0.5 }
);

tl.fromTo(
  ".stage",
  { y: "10%", opacity: 0 },
  { x: "0%", opacity: 1, duration: 0.5 }
);

tl.fromTo(
  ".name",
  { y: "10%", opacity: 0 },
  { y: "0%", opacity: 1, duration: 0.65 }
);

tl.from(".name-description", { opacity: 0, duration: 0.75 });
/ tl.from(".landing_pic", { opacity: 0, duration: 1 }, "-=1"); /;

function ReadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("MoreButton");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
    moreText.toggle(more.Text);
  }
}

navSlide();
// const header = document.querySelector("header");
// const home = document.querySelector("home");

// const navobserver = new IntersectionObserver((entries, observer) => {
//  const entry = entries[0];
//  if (!entry.isIntersecting) {
//    header.classList.add("on-scroll");
//  } else {
//    header.classList.remove("on-scroll");
//  }
// }, {});
// navObserver.observe(home); //
