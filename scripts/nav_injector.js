
function getNavbarHtml(relPrefix) {
    return `
        <div class="bar-container menu-opener">
            <a class="bar-link">
                <i class="nf nf-md-menu"></i>
            </a>
        </div>

        <div class="bar-container">
            <h1 class="bar-title"><a href="${relPrefix}">not-phoeniix</a></h1>
            <a class="bar-link" href="${relPrefix}about_me.html">About Me</a>

            <div class="dropdown">
                <a class="bar-link" href="${relPrefix}projects/">Projects</a>
                <div class="dropdown-content">
                    <a href="${relPrefix}projects/goober_game.html">Goober Game</a>
                    <a href="${relPrefix}projects/watchfaces.html">Watchfaces</a>
                    <a href="${relPrefix}projects/adumbration.html">Adumbration</a>
                </div>
            </div>
        </div>

        <div class="bar-container">
            <a class="bar-link" href="https://github.com/not-phoeniix" target="_blank">
                <i class="nf nf-fa-github"></i>
            </a>

            <a class="bar-link" id="theme_switch">
                <i class="nf nf-oct-sun"></i>
            </a>
        </div>
    `;
}

function getFooterHtml() {
    return `
        <div class="footer-links">
            <p>wow a footer!</p>
            <p>coded with love &lt;3</p>
            <p><a href="https://github.com/not-phoeniix/not-phoeniix.github.io" target="_blank">source</a></p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    let navHeader = document.querySelector(".navbar");
    navHeader.innerHTML = getNavbarHtml(navHeader.dataset.relToRoot || "./");

    let footer = document.querySelector("footer");
    footer.innerHTML = getFooterHtml();
});
