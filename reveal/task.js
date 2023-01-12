const revealArray = Array.from(document.querySelectorAll('.reveal'))

window.onscroll = () => {
    revealArray.forEach(rev => {
        if (rev.getBoundingClientRect().top <= 600) {
            rev.classList.add('reveal_active')
    }})
}


