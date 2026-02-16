/**
 * Job Notification Tracker — Routing System
 * Simple hash-based routing for static site
 */

// Route configuration
const routes = {
  '/': 'Dashboard',
  '/dashboard': 'Dashboard',
  '/saved': 'Saved',
  '/digest': 'Digest',
  '/settings': 'Settings',
  '/proof': 'Proof'
};

// Normalize route - ensure leading slash
function normalizeRoute(route) {
  if (!route || route === '') return '/';
  return route.startsWith('/') ? route : `/${route}`;
}

// Initialize router
function initRouter() {
  // Set default route if no hash
  if (!window.location.hash || window.location.hash === '#') {
    window.location.hash = '#/dashboard';
  }
  
  // Handle initial load
  handleRoute();
  
  // Handle hash changes
  window.addEventListener('hashchange', handleRoute);
  
  // Handle navigation clicks
  document.addEventListener('click', (e) => {
    const navLink = e.target.closest('[data-route]');
    if (navLink) {
      e.preventDefault();
      const route = navLink.getAttribute('data-route');
      navigateTo(route);
    }
  });
}

// Navigate to a route
function navigateTo(route) {
  window.location.hash = route;
  handleRoute();
}

// Handle route changes
function handleRoute() {
  const hash = window.location.hash.slice(1);
  const route = normalizeRoute(hash);
  const normalizedRoute = route === '/' ? '/dashboard' : route;
  const pageName = routes[normalizedRoute] || routes['/'];
  
  // Update active navigation link
  updateActiveNav(normalizedRoute);
  
  // Render page content
  renderPage(pageName);
}

// Update active navigation link
function updateActiveNav(activeRoute) {
  const navLinks = document.querySelectorAll('[data-route]');
  navLinks.forEach(link => {
    const linkRoute = link.getAttribute('data-route');
    // Handle root route mapping to dashboard
    const normalizedActiveRoute = activeRoute === '/' ? '/dashboard' : activeRoute;
    if (linkRoute === normalizedActiveRoute) {
      link.classList.add('kn-nav__link--active');
    } else {
      link.classList.remove('kn-nav__link--active');
    }
  });
  
  // Close mobile menu if open
  const mobileMenu = document.querySelector('.kn-nav__mobile-menu');
  if (mobileMenu && mobileMenu.classList.contains('kn-nav__mobile-menu--open')) {
    toggleMobileMenu();
  }
}

// Render page content
function renderPage(pageName) {
  const contentArea = document.getElementById('app-content');
  if (!contentArea) return;
  
  contentArea.innerHTML = `
    <section class="kn-context-header">
      <h1 class="kn-context-header__headline kn-heading kn-heading-xl">${pageName}</h1>
      <p class="kn-context-header__subtext">This section will be built in the next step.</p>
    </section>
  `;
}

// Toggle mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.kn-nav__mobile-menu');
  const hamburger = document.querySelector('.kn-nav__hamburger');
  
  if (mobileMenu) {
    mobileMenu.classList.toggle('kn-nav__mobile-menu--open');
    if (hamburger) {
      hamburger.classList.toggle('kn-nav__hamburger--active');
    }
  }
}

// Initialize mobile menu toggle
function initMobileMenu() {
  const hamburger = document.querySelector('.kn-nav__hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('.kn-nav');
    const mobileMenu = document.querySelector('.kn-nav__mobile-menu');
    if (nav && mobileMenu && 
        !nav.contains(e.target) && 
        mobileMenu.classList.contains('kn-nav__mobile-menu--open')) {
      toggleMobileMenu();
    }
  });
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initMobileMenu();
});
