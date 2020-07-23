// Grabbing all timeline list items
const items = document.querySelectorAll('#timeline li');


const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Going through each item to check if it's in the view port
// If it is then add the show class
const run = () =>
    items.forEach(item => {
        if (isInViewport(item)){
            item.classList.add('show');
        }
    });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
