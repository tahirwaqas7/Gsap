// gsap.to("#box1", {
//   x: 1040,
//   y: 300,
//   duration: 3,
//   delay: 2,
// });

// gsap.to("#box2", {
//   x: 500,
//   y: 500,
//   duration: 4,
//   delay: 2.5,
// });

gsap.to("#box1", {
  x: 900,
  duration: 3,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 0.2,
});

gsap.from("#box2", {
  x: 900,
  duration: 3,
  delay: 1,
  rotate: 90,
  backgroundColor: "purple",
  borderRadius: "40%",
  scale: 0.3,
});

gsap.from("h1", {
  // color: "red",
  color: "white",
  opacity: 0,
  y: 30,
  duration: 2,
  delay: 1,
  stagger: -0.5,
});

// console.log("hello");

gsap.to(".wrap", {
  x: 1050,
  duration: 4,
  delay: 1,
  repeat: -1,
  rotate: 360,
  borderRadius: "52%",
  scale: ".25",
});
