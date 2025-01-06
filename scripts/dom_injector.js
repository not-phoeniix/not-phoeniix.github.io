function getNavbarHtml(relPrefix) {
    return `
        <div class="bar-container">
            <h1 class="bar-title"><a href="${relPrefix}">not-phoeniix</a></h1>

            <a href="javascript:void(0)" class="bar-link menu-opener" onclick="toggleSideNav()">
                <i class="nf nf-md-menu"></i>
            </a>

            <a class="bar-link" href="${relPrefix}about_me.html">About Me</a>

            <a class="bar-link" href="${relPrefix}media/resume.pdf" target="_blank">Resume</a>

            <div class="dropdown">
                <a class="bar-link" href="javascript:void(0)">Projects <i class="nf nf-fa-angle_down"></i></a>
                <div class="dropdown-content">
                    <a href="${relPrefix}nullspace.html">Nullspace</a>
                    <a href="${relPrefix}desktop.html">Linux Desktop</a>
                    <a href="${relPrefix}watchfaces.html">Watchfaces</a>
                    <a href="${relPrefix}changeling.html">Changeling</a>
                    <a href="${relPrefix}adumbration.html">Adumbration</a>
                    <a href="${relPrefix}quoth_the_raven.html">Quoth the Raven</a>
                </div>
            </div>

        </div>

        <div class="bar-container">
            <a class="bar-link" href="https://github.com/not-phoeniix" target="_blank">
                <i class="nf nf-fa-github"></i>
            </a>

            <a class="bar-link" href="https://www.linkedin.com/in/nmurello/" target="_blank">
                <i class="nf nf-dev-linkedin"></i>
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
let timeoutId = 0;

function closeSideNav(menuOpener, links, navbar) {
    // cancel any previous timers if they exist
    clearTimeout(timeoutId);

    menuOpener.innerHTML = `<i class="nf nf-md-menu"></i>`;
    for (let link of links) {
        link.style.display = "none";
    }

    navbar.style.paddingBottom = "0px";

    navOpen = false;
}

function openSideNav(menuOpener, links, navbar) {
    menuOpener.innerHTML = `<i class="nf nf-cod-close"></i>`;
    for (let link of links) {
        link.style.display = "inline";
    }

    navbar.style.paddingBottom = "20px";

    navOpen = true;

    // in 5 seconds, close the navigation
    timeoutId = setTimeout(() => {
        closeSideNav(menuOpener, links);
        timeoutId = 0;
    }, 5000);
}

function toggleSideNav() {
    const menuOpener = document.querySelector(".menu-opener");
    const links = document.querySelectorAll(":not(.menu-opener).bar-link");
    const navbar = document.querySelector(".navbar");

    if (navOpen) {
        closeSideNav(menuOpener, links, navbar);
    } else {
        openSideNav(menuOpener, links, navbar)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const navHeader = document.querySelector(".navbar");
    navHeader.innerHTML = getNavbarHtml(navHeader.dataset.relToRoot || "./");

    const footer = document.querySelector("footer");
    footer.innerHTML = getFooterHtml();
});
