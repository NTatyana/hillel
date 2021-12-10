const userName = prompt('What is your name?');
if (userName) {
    document.querySelector('#welcome').innerHTML = `Hello, ${userName}! How are you?`;
} else {
    document.querySelector('#welcome').innerHTML = 'Hello, guest! How are you?';
}guest