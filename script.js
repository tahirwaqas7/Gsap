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
  y: 100,
  duration: 2,
  delay: 1,
  stagger: -0.5,
  repeat: -1,
  yoyo: true,
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
  yoyo: true,
});

// gsap.to("#dibba1", {
//   x: 990,
//   rotate: 360,
//   duration: 1.5,
//   y: 80,
//   delay: 0.5,
// });

// gsap.to("#dibba2", {
//   x: 990,
//   rotate: 360,
//   duration: 1.5,
//   y: 80,
//   delay: 2,
//   backgroundColor: "red",
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("#dibba3", {
//   x: 990,
//   duration: 1.5,
//   delay: 3.5,
//   borderRadius: "50%",
//   scale: 0.5,
// });

let tl = gsap.timeline();

tl.to("#dibba1", {
  x: 990,
  rotate: 360,
  duration: 1.5,
  y: 80,
  delay: 0.5,
});

tl.to("#dibba2", {
  x: 990,
  rotate: 360,
  duration: 1.5,
  y: 80,
  backgroundColor: "red",
  repeat: -1,
  yoyo: true,
});

tl.to("#dibba3", {
  x: 990,
  duration: 1.5,
  borderRadius: "50%",
  scale: 0.5,
});
