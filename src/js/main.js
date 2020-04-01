function verMenu() {
    let menu = document.getElementById("menubar");
    if (menu.style.transform === "scale(0)") {
        menu.style.transform = "scale(1)";
    } else {
        menu.style.transform = "scale(0)";
    }
}