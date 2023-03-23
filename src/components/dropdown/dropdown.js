// const Dropdown = (function () {
//     const init = (e) => {
//         const dropdownButton = e.target.closest("[data-toggle='dropdown']");
//         // if (!dropdownButton && e.target.closest(".dropdown")) return; // prevents dropdown closing when clicking on menu items

//         let currentDropdown = null;
//         if (dropdownButton) {
//             currentDropdown = e.target.closest(".dropdown");
//             currentDropdown.classList.toggle("active");
//         }
//         const activeDropdowns =  document.querySelectorAll(".dropdown.active")
//         activeDropdowns.forEach((activeDropdown) => {
//             if (activeDropdown === currentDropdown) return;
//             activeDropdown.classList.remove("active");
//         });
//     };

//     document.addEventListener("click", init);
// })();

document.addEventListener("click", (e) => {
    const dropdown = document.querySelector(".dropdown.active");
    const dropdownButton = e.target.closest("[data-toggle='dropdown']");
    const dropdownMenu = e.target.closest(".dropdown-menu")

    if (dropdownButton) dropdownButton.closest(".dropdown").classList.add("active");
    if (dropdown && !dropdownMenu) dropdown.classList.remove("active")
});
