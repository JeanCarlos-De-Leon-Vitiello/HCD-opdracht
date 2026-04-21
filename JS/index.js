const startPositieKey = "startPositie";

function krijgHuidigeFocus() {
    const element = document.activeElement;

    if (!element || element === document.body) {
        return null;
    }

    return element;
}

// geeft feedback wanneer je een start positie opslaat
function geefFeedback(bericht) {
    const feedbackElement = document.getElementById("screenreader-feedback");
    feedbackElement.textContent = "";
    
    setTimeout(function() {
        feedbackElement.textContent = bericht;

        setTimeout(function() {
            feedbackElement.textContent = "";
        }, 1000);
    }, 500);
}

function saveStartPositie() {
    const element = krijgHuidigeFocus();

     if (!element) {
        geefFeedback("Er is geen startpositie geselecteerd.");
        return;
    }

    if (!element.id) {
        geefFeedback("Dit element kan niet worden opgeslagen.");
        return;
    }

    localStorage.setItem(startPositieKey, element.id);
    geefFeedback("Startpositie opgeslagen");
}


// bron: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
function restoreStartPositie() {
    const opgeslagenId = localStorage.getItem(startPositieKey);

    if (!opgeslagenId) {
        return;
    }

    const element = document.getElementById(opgeslagenId);

    if (!element) {
        return;
    }

    element.focus();
}
// bron: https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "p") {
        event.preventDefault();
        saveStartPositie();
    }
});

window.addEventListener("load", function () {
    restoreStartPositie();
});
