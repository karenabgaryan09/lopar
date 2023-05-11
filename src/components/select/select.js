document.addEventListener("click", (e) => {
    const select = document.querySelector(".select.active");
    const selectButton = e.target.closest("[data-toggle='select']");
    const selectItem = e.target.closest(".select-item");

    const setActiveItem = ()=>{
        const wrapper = selectItem.closest(".select").querySelector(".btn > .wrapper");
        wrapper.innerHTML = selectItem.innerHTML;
        const title = wrapper.querySelector(".select-item-title");
        if (title) title.classList.replace("select-item-title", "select-toggle-title");
        if(wrapper.classList.contains('placeholder'))wrapper.classList.remove('placeholder')
    }

    if (selectButton) selectButton.closest(".select").classList.add("active");
    if (select) select.classList.remove("active");
    if (selectItem) setActiveItem()
});