// 타이핑 효과
const content = "Belief";
const text = document.querySelector(".text");
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    i++;
  }
}
setInterval(typing);

// 텍스트 서서히 올라오는 효과
const articles = document.querySelectorAll(".article");

const articleObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

articles.forEach((article) => {
  articleObserver.observe(article);
});

const delays = document.querySelectorAll(".delay");

delays.forEach((delay) => {
  const delayTime = delay.getAttribute("data-delay");
  delay.style.animationDelay = `${delayTime}s`;
});

const menuToggle = document.querySelector("#wrap nav .menuToggle");
const nav = document.querySelector("nav");
const mNavbar = document.querySelector("#wrap .m-navbar");
const mNavbar_link = document.querySelectorAll("#wrap .m-navbar a");

menuToggle.onclick = () => {
  nav.classList.toggle("active");
  mNavbar.classList.toggle("active");
};

mNavbar_link[0].onclick = () => {
  nav.classList.toggle("active");
  mNavbar.classList.toggle("active");
};

mNavbar_link[1].onclick = () => {
  nav.classList.toggle("active");
  mNavbar.classList.toggle("active");
};

mNavbar_link[2].onclick = () => {
  nav.classList.toggle("active");
  mNavbar.classList.toggle("active");
};

mNavbar_link[3].onclick = () => {
  nav.classList.toggle("active");
  mNavbar.classList.toggle("active");
};
