console.log("nav.js hello word === checked it's working 😁😁😁");

const nav = gsap.timeline();

nav.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1.2,
  // repeat: -1,
  delay: 0.5,
});

nav.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

nav.from("h1", {
  y: 20,
  opacity: 0,
  scale: 0.2,
    duration: 1,
});
