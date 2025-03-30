import "./style.css";

const container = document.querySelector("#container");
const cursor = document.querySelector("#cursor");
const imageDiv = document.querySelector("#image");

container.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.6,
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 2,
    duration: 0.6,
    backgroundColor: "#ffe3c280",
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 0.6,
    backgroundColor: "#ffe4c4",
  });
});
