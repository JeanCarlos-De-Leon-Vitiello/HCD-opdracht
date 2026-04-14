function toggleHulppaneel() { 
    const hulpPaneel = document.getElementById("hulp-paneel");
    const hulpPaneelIsOpen = hulpPaneel.classList.toggle("hulpPaneelOpen");
    
    if (hulpPaneelIsOpen) {
        hulpPaneel.focus();
    }
}

document.addEventListener("keydown", function (event) { 
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "h") {
        event.preventDefault();
        toggleHulppaneel();
    }
})