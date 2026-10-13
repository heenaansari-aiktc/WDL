// Select all navigation links
const navItems = document.querySelectorAll('.nav-item');
const pageTitle = document.getElementById('page-title');

navItems.forEach(item => {
  item.addEventListener('click', function(e) {
    // Prevent default anchor jump
    e.preventDefault();

    // Remove 'active' class from all links
    navItems.forEach(nav => nav.classList.remove('active'));

    // Add 'active' class to clicked link
    this.classList.add('active');

    // Update main page title using the data-title attribute
    const newTitle = this.getAttribute('data-title');
    if (newTitle) {
      pageTitle.textContent = newTitle;
    }
  });
});
