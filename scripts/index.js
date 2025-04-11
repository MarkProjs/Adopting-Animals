document.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById('content');

  function loadPage(page) {
    fetch(`./components/${page}`)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.text();
      })
      .then(html => {
        contentDiv.innerHTML = html;

        // Load corresponding JS file
        const scriptName = page.replace('.html', '.js');
        loadScript(`../scripts/${scriptName}`);
      })
      .catch(err => {
        contentDiv.innerHTML = `<p>Error loading page.</p>`;
        console.error(err);
      });
  }

  function loadScript(scriptUrl) {
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (existingScript) {
      // If the script is already loaded, reload it (optional)
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.onload = () => console.log(`${scriptUrl} loaded`);
    script.onerror = () => console.warn(`Script ${scriptUrl} failed to load.`);
    document.body.appendChild(script);
  }

  // Load home page by default
  loadPage('home.html');

  // Attach click handlers
  document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = e.target.closest('a').getAttribute('data-page');
      loadPage(page);
    });
  });
});


function dateAndTime() {
  const now = new Date();

  const dateOptions ={
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  };

  document.getElementById("date").textContent = now.toLocaleString("en-US", dateOptions);
  document.getElementById("time").textContent = now.toLocaleString("en-US", timeOptions);
}
setInterval(dateAndTime, 1000);
dateAndTime();
