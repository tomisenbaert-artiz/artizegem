import './style.css'
const aanbodButton = document.getElementById('aanbod-button');
const aanbodDropdown = document.getElementById('aanbod-dropdown');

// Toggle dropdown on button click
aanbodButton.addEventListener('click', () => {
aanbodDropdown.classList.toggle('hidden');
});

// Close dropdown if clicked outside
window.addEventListener('click', (event) => {
if (!aanbodButton.contains(event.target) && !aanbodDropdown.contains(event.target)) {
    aanbodDropdown.classList.add('hidden');
 }
 });