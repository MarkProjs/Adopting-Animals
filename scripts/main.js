function loadPageFromHash() {
    let page = window.location.hash.substring(1) || "./components/home";
    loadPage("./components/"+page + ".html");
}

function loadPage(page) {
    fetch(page)
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.text();
    })
    .then(html => {
        document.getElementById("content").innerHTML = html;
        window.location.hash = page.replace(".html", "");
    })
    .catch(error => {
        console.log(error);
    });
}

window.addEventListener("load", loadPageFromHash);
window.addEventListener("hashchange", loadPageFromHash);