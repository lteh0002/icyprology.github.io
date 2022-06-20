const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
    navigation.classList.toggle('active');
})
