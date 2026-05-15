// Subtask 4.1: Access DOM Elements
const clickBtn = document.getElementById('clickBtn');
const hoverBox = document.getElementById('hoverBox');
const textInput = document.getElementById('textInput');
const keyDisplay = document.getElementById('keyDisplay');
const userForm = document.getElementById('userForm');
const formInput = document.getElementById('formInput');
const status = document.getElementById('status');

// Subtask 4.2: click Event
clickBtn.addEventListener('click', () => {
    status.innerText = "Button was clicked!";
});

// Subtask 4.3: input and change Events
textInput.addEventListener('input', (e) => {
    status.innerText = `Typing: ${e.target.value}`;
});

// Subtask 4.4: submit Event
userForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    status.innerText = `Form submitted with: ${formInput.value}`;
    userForm.reset();
});

// Subtask 4.5: keyup Event
textInput.addEventListener('keyup', (e) => {
    keyDisplay.innerText = `Last key: ${e.key}`;
});

// Subtask 4.6: mouseover and mouseout Events
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = '#ffcc00';
    hoverBox.innerText = "Inside!";
});

hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = '#e0e0e0';
    hoverBox.innerText = "Hover Over Me";
});

// Subtask 4.7: focus and blur Events
formInput.addEventListener('focus', () => {
    console.log("Input is in focus");
});

formInput.addEventListener('blur', () => {
    console.log("Input lost focus");
});