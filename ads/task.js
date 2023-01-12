const rotatorArray = Array.from(document.querySelectorAll('.rotator'))

rotatorArray.forEach(rotator => {
    let rotatorCaseArray = Array.from(rotator.children)
    let rotatorActiveId = rotatorCaseArray.findIndex(rotator => rotator.classList.contains('rotator__case_active'))
    let textColor = rotatorCaseArray[rotatorActiveId].getAttribute('data-color');
    rotatorCaseArray[rotatorActiveId].style.color = textColor;
})

setInterval(() => {
    rotatorArray.forEach(rotator => {
        let rotatorCaseArray = Array.from(rotator.children)
        let rotatorActiveId = rotatorCaseArray.findIndex(rotator => rotator.classList.contains('rotator__case_active'))
        rotatorCaseArray[rotatorActiveId].classList.remove('rotator__case_active')
        if (rotatorActiveId < rotatorCaseArray.length-1) {
            rotatorCaseArray[rotatorActiveId+1].classList.add('rotator__case_active')
            let textColor = rotatorCaseArray[rotatorActiveId+1].getAttribute('data-color')
            rotatorCaseArray[rotatorActiveId+1].style.color = textColor
        }
        else {  
            rotatorCaseArray[0].classList.add('rotator__case_active')
            let textColor = rotatorCaseArray[0].getAttribute('data-color')
            rotatorCaseArray[0].style.color = textColor
        }  
    })
}, 1000)


