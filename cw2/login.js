
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
    e.preventDefault(); // Zapobieganie domyślnej akcji formularza

    // Pobranie wartości nazwy użytkownika i hasła
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Sprawdzenie, czy pole nazwa użytkownika i hasło są puste
    if (username === "" && password === "") {
        // Wyświetlenie alertu o udanym zalogowaniu i przeładowanie strony
        alert("You have successfully logged in.");
        location.reload();
    } else {
        // Jeśli pole nazwy użytkownika lub hasła nie jest puste, ustawienie komunikatu o błędzie
        loginErrorMsg.style.opacity = 1;
    }
})
