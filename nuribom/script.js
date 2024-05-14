document.addEventListener('DOMContentLoaded', function () {
    function moveIdiomPrev() {
        const idiomList = document.querySelector('.idiom ul');
        const lastItem = idiomList.lastElementChild;
        idiomList.removeChild(lastItem);
        idiomList.insertBefore(lastItem, idiomList.firstElementChild);
    }

    function moveIdiomNext() {
        const idiomList = document.querySelector('.idiom ul');
        const firstItem = idiomList.firstElementChild;
        idiomList.removeChild(firstItem);
        idiomList.appendChild(firstItem);
    }

    const prevIdiomButton = document.querySelector('.idiom button:first-of-type');
    prevIdiomButton.addEventListener('click', function () {
        moveIdiomPrev();
    });

    const nextIdiomButton = document.querySelector('.idiom button:last-of-type');
    nextIdiomButton.addEventListener('click', function () {
        moveIdiomNext();
    });
});
