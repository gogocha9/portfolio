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

function oninputPhone(target) {
  target.value = target.value
    .replace(/[^0-9]/g, "")
    .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3");
}

// 이메일 보내기
function sendEmail(event) {
  event.preventDefault();
  var name = document.getElementById("Fname").value;
  var phone = document.getElementById("Fphone").value;
  var message = document.getElementById("Fcontent").value;
  var subject = "홈페이지 문의하기 : " + name;
  var body = "이름: " + name + "\n연락처: " + phone + "\n내용: " + message;
  var mailtoLink =
    "mailto:belief8585@naver.com?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
  window.location.href = mailtoLink;
}

function popup() {
  var url = "popup/term_01.html";
  var name = "약관보기";
  var option =
    "width = 700, height = 500, top = 100, left = 200, location = no";
  window.open(url, name, option);
}
