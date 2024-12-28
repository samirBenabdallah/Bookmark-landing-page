document
  .getElementsByClassName("nav-button")[0]
  .addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("active");
  });

const articlePagesButttons = document.querySelectorAll(".buttons div");
const articlePages = document.querySelectorAll("article .page");

articlePagesButttons.forEach((ele) =>
  ele.addEventListener("click", (e) => {
    const page = e.target.getAttribute("data-page");
    for (let i = 0; i < 3; i++) {
      articlePagesButttons[i].classList.remove("active");
      if (articlePages[i].classList.value.includes(page))
        articlePages[i].classList.add("active");
      else articlePages[i].classList.remove("active");
    }
    e.target.classList.add("active");
  })
);

// faq actions
const questionCard = document.querySelectorAll(".FAQ > div");

function headeClick(e) {
  const parent = e.target.parentElement;
  parent.classList.toggle("active");
  questionCard.forEach(
    (ele) => ele === parent || ele.classList.remove("active")
  );
}

const headCard = document.querySelectorAll(".FAQ > div > .head");
headCard.forEach((ele) => ele.addEventListener("click", headeClick));
// email actions

document.querySelector("section .btn").addEventListener("click", (e) => {
  const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
  const value = document.getElementById("emailInput").value;
  const inputContainer = document.getElementsByClassName("input")[0];
  if (!value || regExp.test(value)) inputContainer.classList.remove("error");
  else inputContainer.classList.add("error");
});
