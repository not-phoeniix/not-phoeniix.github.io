let currentlyZoomed = null;

function appendBackground() {
    const background = document.createElement("div");
    background.classList.toggle()
    // background.classList.add();

    // document.getRootNode().appendChild()
}

function toggleZoom(self) {
    if (!currentlyZoomed) {
        currentlyZoomed = self;
        self.classList.add("zoom");
    } else if (self === currentlyZoomed) {
        currentlyZoomed = null;
        self.classList.remove("zoom");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const bg = document.querySelector(".zoom-bg");
    if (bg) {
        bg.addEventListener("click", () => {
            bg.classList.remove("enabled");
            toggleZoom(currentlyZoomed);
        });
    }

    document.querySelectorAll(".click-zoomable")
        .forEach(e => e.addEventListener("click",
            () => {
                bg.classList.toggle("enabled");
                toggleZoom(e);
            }));
});
