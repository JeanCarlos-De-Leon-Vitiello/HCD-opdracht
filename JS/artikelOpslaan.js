function artikelOpslaan() {
    const activeElement = document.activeElement
    const artikel = activeElement.closest("article")
    if (!artikel) return

    const artikelH3 = artikel.querySelector("h3")
    const artikelLink = artikelH3.querySelector("a")
    const url = artikelLink.href
    // bron: https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
    const h3Kopie = artikelH3.cloneNode(true)

    const paneelBookmark = document.getElementById("opgeslagen-links")
    const opgeslagenLinks = paneelBookmark.querySelectorAll("a");

    // controlle voor als er al een link met dezelfde URL bestaat in het paneel
    // bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    // bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    const bestaatAl = [...opgeslagenLinks].some(function(link) {
        return link.href === url;
    });

    if (bestaatAl) return;

    // bron: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
    paneelBookmark.prepend(h3Kopie);

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
