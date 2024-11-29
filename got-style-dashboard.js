 const toggleBtn = document.getElementById('toggleSidebar');
 const navbartoggleBtn = document.getElementById('toggleNavbar');
 const gotSidebar = document.querySelector('.got-sidebar');
 const gotSidebarHeader = document.querySelector('.got-sidebar-header');
 const gotSidebarToggle = document.querySelector('.got-sidebar-toggle');
 const gotNavbarToggle = document.querySelector('.got-navbar-toggle-btn');
 const gotMainContent = document.querySelector('.got-main-content');
 const gotNavbar = document.querySelector('.got-navbar');
 const dropdownIcon = document.getElementById('dropdownIcon');
 const dropdownContent = document.getElementById('dropdownContent');

 toggleBtn.addEventListener('click', () => {
     gotSidebar.classList.toggle('collapsed');
     gotSidebarHeader.classList.toggle('collapsed');
     gotSidebarToggle.classList.toggle('collapsed');
     gotNavbarToggle.classList.toggle('collapsed');
     gotNavbarToggle.classList.toggle('expanded');
     gotMainContent.classList.toggle('expanded');
     gotNavbar.classList.toggle('expanded');
 });

 navbartoggleBtn.addEventListener('click', () => {
     gotSidebar.classList.toggle('collapsed');
     gotSidebarHeader.classList.toggle('collapsed');
     gotSidebarToggle.classList.toggle('collapsed');
     gotNavbarToggle.classList.toggle('collapsed');
     gotNavbarToggle.classList.toggle('expanded');
     gotMainContent.classList.toggle('expanded');
     gotNavbar.classList.toggle('expanded');
 });

 // Add a click event to toggle the dropdown
 document.querySelector('.got-dropbtn').addEventListener('click', function () {
     document.querySelector('.got-dropdown-content').classList.toggle('show');
 });

 // Close the dropdown if the user clicks outside of it
 window.onclick = function (event) {
     if (!event.target.matches('.got-dropbtn')) {
         var dropdowns = document.getElementsByClassName("got-dropdown-content");
         for (var i = 0; i < dropdowns.length; i++) {
             var openDropdown = dropdowns[i];
             if (openDropdown.classList.contains('show')) {
                 openDropdown.classList.remove('show');
             }
         }
     }
 };

 document.addEventListener('DOMContentLoaded', () => {
    // Click dropdown
    const clickDropdowns = document.querySelectorAll('.click-dropdown .got-dropbtn');
    clickDropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            const dropdownContent = dropdown.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Animated dropdown
    const animatedDropdowns = document.querySelectorAll('.animated-dropdown .got-dropbtn');
    animatedDropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            const dropdownContent = dropdown.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.got-dropbtn')) {
            const dropdowns = document.querySelectorAll('.got-dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    };
});