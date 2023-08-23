document.querySelector('.menu-toggle').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const bar1 = document.querySelector('.bar1');
    const bar2 = document.querySelector('.bar2');
    const bar3 = document.querySelector('.bar3');

    sidebar.classList.toggle('menu-active');
    bar1.classList.toggle('transformed');
    bar2.classList.toggle('transformed');
    bar3.classList.toggle('transformed');
});
