const switches = document.querySelectorAll('.switch');
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

switches.forEach(btn => {
    btn.addEventListener('change', (e) => {
        check(e.target) //target input changes
        console.log(e.target)
    });
});

function check(element) {
            //if all element is clicked
    if (good.checked && cheap.checked && fast.checked) {
        //if good is checked
        if (good === element) {
            fast.checked = false;
        }

        if(cheap == element) {
            good.checked = false;
        }

        if(fast === element) {
            cheap.checked = false;
        }
    }
}
