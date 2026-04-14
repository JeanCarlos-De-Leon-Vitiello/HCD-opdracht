const startPositieKey = "startPositie";

function krijgHuidigeFocus() {
    const element = document.activeElement;

    if (!element || element === document.body) {
        return null;
    }

    return element;
}

function saveStartPositie() {
    const element = krijgHuidigeFocus();

    if (!element) {
        return;
    }

    if (!element.id) {
        return;
    }

    localStorage.setItem(startPositieKey, element.id);
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
