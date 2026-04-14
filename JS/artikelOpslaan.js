function artikelOpslaan() {
    const activeElement = document.activeElement
    const artikel = activeElement.closest("article")
    if (!artikel) return

    const artikelH3 = artikel.querySelector("h3")
    // bron: https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
    const h3Kopie = artikelH3.cloneNode(true)

    const paneelBookmark = document.getElementById("opgeslagen-startposities")
    // bron: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
    paneelBookmark.appendChild(h3Kopie);

    // bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio?utm_source=chatgpt.com
    const savesound = new Audio("audio/saveSound.mp3")
    savesound.play()
}

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "s") {
        event.preventDefault();
        artikelOpslaan();
    }
});
