document.addEventListener("click", (e) => {
    const select = document.querySelector(".select.active");
    const selectButton = e.target.closest("[data-toggle='select']");
    const selectMenu = e.target.closest(".select-menu");
    const selectItem = e.target.closest(".select-item");

    if (selectButton) selectButton.closest(".select").classList.add("active");
    if (select && !selectMenu) select.classList.remove("active");
    if (selectItem) {
        select.querySelector(".select-name").innerText = selectItem.innerText;
        select.classList.remove("active")
    }
});
