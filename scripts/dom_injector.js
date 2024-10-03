function getNavbarHtml(relPrefix) {
    return `
        <div class="bar-container">
            <h1 class="bar-title"><a href="${relPrefix}">not-phoeniix</a></h1>

            <a href="javascript:void(0)" class="bar-link menu-opener" onclick="toggleSideNav()">
                <i class="nf nf-md-menu"></i>
            </a>

            <a class="bar-link" href="${relPrefix}about_me.html">About Me</a>

            <div class="dropdown">
                <a class="bar-link" href="${relPrefix}projects/">Projects</a>
                <div class="dropdown-content">
                    <a href="${relPrefix}projects/goober_game.html">Goober Game</a>
                    <a href="${relPrefix}projects/watchfaces.html">Watchfaces</a>
                    <a href="${relPrefix}projects/changeling.html">Changeling</a>
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
            <p>Coded by Nikki Murello :]</p>
            <p><a href="https://github.com/not-phoeniix/not-phoeniix.github.io" target="_blank">Source code</a></p>
        </div>
    `;
}

let navOpen = false;

function toggleSideNav() {
    navOpen = !navOpen;

    const menuOpener = document.querySelector(".menu-opener");
    const links = document.querySelectorAll(":not(.menu-opener).bar-link");

    if (navOpen) {
        menuOpener.innerHTML = `<i class="nf nf-oct-x"></i>`;
        for (let link of links) {
            link.style.display = "inline";
        }
    } else {
        menuOpener.innerHTML = `<i class="nf nf-md-menu"></i>`;
        for (let link of links) {
            link.style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const navHeader = document.querySelector(".navbar");
    navHeader.innerHTML = getNavbarHtml(navHeader.dataset.relToRoot || "./");

    const footer = document.querySelector("footer");
    footer.innerHTML = getFooterHtml();
});
