export function setupThemeController() {
  const themeController = document.querySelector('.theme-controller') as HTMLInputElement;
  const html = document.documentElement;
  
  function setTheme(theme: 'light' | 'dark') {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeController.checked = theme === 'light';
  }

  // Initialize theme
  const savedTheme = (localStorage.getItem('theme') || 'dark') as 'light' | 'dark';
  setTheme(savedTheme);

  // Theme toggle event listener
  themeController?.addEventListener('change', () => {
    setTheme(themeController.checked ? 'light' : 'dark');
  });
}

export function setupNavHighlighter() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a, .menu a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('bg-primary', 'text-primary-content');
    }
  });
}

