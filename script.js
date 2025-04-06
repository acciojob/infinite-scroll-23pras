const list = document.getElementById('infi-list');

function addItems(count, startIndex) {
    for(let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${startIndex + i + 1}`;
        list.appendChild(li);
    }
}

let itemCount = 0;
addItems(10, itemCount);
itemCount += 10;

const sentinel = document.createElement('li');
sentinel.id = 'sentinel';
list.appendChild(sentinel);

const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        addItems(2, itemCount);
        itemCount += 2;
        
        list.appendChild(sentinel);
    }
}, {
    root: document.querySelector('main'),
    threshold: 0.1 
});

observer.observe(sentinel);