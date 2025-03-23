import "./style.css";

const container = document.querySelector("#container");
const cursor = document.querySelector("#cursor");

container.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    ease: "back.out(1)",
  });
});
