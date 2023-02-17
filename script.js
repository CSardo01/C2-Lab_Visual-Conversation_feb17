const unicornDown = document.querySelectorAll(".unicorn-down")
const unicornUp = document.querySelectorAll(".unicorn-up")
const unicornObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
},{
    root: document,
    rootMargin: '-40% 0% -40% 0%',
})

unicornDown.forEach(unicornDown => {unicornObserver.observe(unicornDown)})
unicornUp.forEach(unicornUp => {unicornObserver.observe(unicornUp)})
//---

const hRule = document.querySelectorAll(".h-rule")
const deckard = document.querySelectorAll(".deckard")
const rachel = document.querySelectorAll(".rachel")
const tyrell = document.querySelectorAll(".tyrell")
const tyrellConclusion = document.querySelectorAll(".tyrell-conclusion")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    root: document,
    rootMargin: '-20% 0% -20% 0%',
})

hRule.forEach(hRule => {observer.observe(hRule)})
deckard.forEach(deckard => { observer.observe(deckard) })
rachel.forEach(rachel => { observer.observe(rachel) })
tyrell.forEach(tyrell => { observer.observe(tyrell) })
tyrellConclusion.forEach(tyrellConclusion => { observer.observe(tyrellConclusion) })
//---

const deckardConclusion = document.querySelectorAll(".deckard-conclusion")

const observerTwo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        document.querySelector(".background-2").classList.toggle("show", entry.isIntersecting)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    root: document,
    rootMargin: '200% 0% -50% 0%',
})

deckardConclusion.forEach(deckardConclusion => { observerTwo.observe(deckardConclusion)})





