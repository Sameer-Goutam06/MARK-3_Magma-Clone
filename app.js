// Import required libraries
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LocomotiveScroll } from 'locomotive-scroll';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
 el: document.querySelector('#main'),
 smooth: true
});

// Initialize ScrollTrigger
locoScroll.on('scroll', ScrollTrigger.update);

// Sync ScrollTrigger with Locomotive Scroll
ScrollTrigger.scrollerProxy('#main', {
 scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
 },
 getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
 },
 pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed'
});

// Update ScrollTrigger when the window