const bookControlArray = Array.from(document.querySelectorAll('.book__control'))
const book = document.querySelector('.book')

bookControlArray.forEach(bookControl => {
    let fontSizeArray = Array.from(bookControl.children)
    fontSizeArray.forEach(fontSize => {
        fontSize.onclick = () => {
            if (fontSize.getAttribute('data-size') === "small")  {
                if (!book.classList.contains('book_fs-small')) {
                    book.classList.add('book_fs-small')
                }
                if (book.classList.contains('book_fs-big')) {
                    book.classList.remove('book_fs-big')
                }
            }
            else if (fontSize.getAttribute('data-size') === 'big') {
                if (!book.classList.contains('book_fs-big')) {
                    book.classList.add('book_fs-big')
                }
                if (book.classList.contains('book_fs-small')) {
                    book.classList.remove('book_fs-small')
                }
            }
            else if (fontSize.getAttribute('data-size') === null) {
                if (book.classList.contains('book_fs-small')) {
                    book.classList.remove('book_fs-small')  
                }
                else if (book.classList.contains('book_fs-big')) {
                    book.classList.remove('book_fs-big')
                }
            }
        return false
        }
    })
})