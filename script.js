document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');

    if (myButton) {
        myButton.addEventListener('click', () => {
            alert('Hello from JavaScript!');
            console.log('Button was clicked!');
        });
    }
});