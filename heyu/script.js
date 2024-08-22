gsap.registerPlugin(ScrollTrigger);

// Bottle 1 to Bottle 2
gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: "top 100%", 
    end: "top -10%", 
    scrub: true,
    // markers: true,
  }
})
.to("#image1", {
  y: 800, 
  duration: 1,
})
.to("#image2", {
  y: 820, 
  duration: 1,
  zIndex: 1
}, "-=1");

// Bottle 2 to Bottle 3
gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    start: "top 100%", 
    end: "top -10%", 
    scrub: true,
    // markers:true,
  }
})
.to("#image2", {
  y: 1520, 
  duration: 1,
})
.to("#image3", {
  y: 800, 
  duration: 1,
  zIndex: 1
}, "-=1");

// Bottle 3 to Bottle 4
gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    start: "top 100%", 
    end: "top -10%", 
    scrub: true,
    // markers: true,
  }
})
.to("#image3", {
  y: 1530,
  duration: 1,
})
.to("#image4", {
  y: 820,  
  duration: 1,
  zIndex: 1
}, "-=1");

// Bottle 4 to Bottle 5
gsap.timeline({
  scrollTrigger: {
    trigger: "#page5",
    start: "top 100%", 
    end: "top -10%", 
    scrub: true,
    // markers: true,
  }
})
.to("#image4", {
  y: 1565, 
  duration: 1,
})
.to("#image5", {
  y: 820, 
  duration: 1,
  zIndex: 1
}, "-=1");

// Bottle 5 to Bottle 6
gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    start: "top 100%", 
    end: "top -10%", 
    scrub: true,
    // markers: true,
  }
})
.to("#image5", {
  y: 1555, 
  duration: 1,
})
.to("#image6", {
  y: 820, 
  duration: 1,
  zIndex: 1
}, "-=1");

// Bottle 6 to Bottle 7
gsap.timeline({
  scrollTrigger: {
    trigger: "#page7",
    start: "top 100%", 
    end: "top -10%", 
    scrub: true,
    // markers: true,
  }
})
.to("#image6", {
  y: 1585, 
  duration: 1,
})
.to("#image7", {
  y: 820, 
  duration: 1,
  zIndex: 1
}, "-=1");