const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer){
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
    }
    })
}

const observer = new IntersectionObserver (handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
    observer.observe(r)
})



//header responsive
let imgheader = document.querySelector('.imgheadertel');
let navlist2 = document.querySelector('.navlist2');
let tatam = document.querySelector('.tatam');

imgheader.onclick = () => {
    navlist2.classList.toggle('active');
}

tatam.onclick = () => {
    if (navlist2.classList.contains('active')) {
        navlist2.classList.remove('active');
    }
}
