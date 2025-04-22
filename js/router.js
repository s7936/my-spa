let pageUrls = {
    about: '/index.html?about',
    contact: '/index.html?contact'
};

function OnStartUp() {
    popStateHandler();
}

OnStartUp();

document.querySelector('#about-link').addEventListener('click', (event) => {
    let stateObj = { page: 'about' };
    document.title = 'About';
    history.pushState(stateObj, "about", "?about");
    RenderAboutPage();
});

document.querySelector('#contact-link').addEventListener('click', (event) => {
    let stateObj = { page: 'contact' };
    document.title = 'Contact';
    history.pushState(stateObj, "contact", "?contact");
    RenderContactPage();
});

function RenderAboutPage() {
    document.querySelector('main').innerHTML = `
        <h1 class="title">Coś o mnie</h1>
        <p>Teraz czuje smak wakacji, wstaje rano, ale do pracy.</p>
    `;
}

function RenderContactPage() {
    document.querySelector('main').innerHTML = `
        <h1 class="title">Skontakuj się ze mną</h1>
        <form id="contact-form">
            <label for="name">Imie:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Wiadomość:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Wyślij</button>
        </form>
    `;

    document.getElementById('contact-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Wiadomość wysłana!');
    });
}

function popStateHandler() {
    let loc = window.location.search;

    if (loc === "?contact") {
        RenderContactPage();
    } else if (loc === "?about") {
        RenderAboutPage();
    } else {
    }
}

window.onpopstate = popStateHandler;

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
   });
   