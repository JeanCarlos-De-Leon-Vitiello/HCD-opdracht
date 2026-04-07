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

document.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.key.toLowerCase() === "p") {
        event.preventDefault();
        saveStartPositie();
    }
});

window.addEventListener("load", function () {
    restoreStartPositie();
});
