const Lightbox = (function () {
    const { lockScroll, unlockScroll } = Lock || {};

    let backdrop = null;
    let instanceName = null;
    let items = null;
    let globalIndex = 0;

    const setActiveSlide = (index, duration = 300) => {
        window[instanceName].slideTo(index, duration);
    };

    const keyDown = (e) => {
        switch (e.keyCode) {
            case 39:
                if (globalIndex !== items.length - 1) globalIndex += 1;
                setActiveSlide(globalIndex);
                break;
            case 37:
                if (globalIndex !== 0) globalIndex -= 1;
                setActiveSlide(globalIndex);
                break;
            case 27:
                hideBackdrop(false);
                break;
        }
    };

    const onSlideChange = (e) => (globalIndex = e.activeIndex);

    const showBackdrop = (toggle) => {
        backdrop = document.querySelector(toggle.dataset.target).closest(".backdrop");
        instanceName = document.querySelector(toggle.dataset.target).dataset.instanceName;

        window[instanceName].on("slideChange", onSlideChange);

        items = backdrop.querySelectorAll(".swiper-slide");
        backdrop.style.display = "block";
        setTimeout(() => backdrop.classList.add("show"), 0);
        if (lockScroll) lockScroll();
        document.addEventListener("keydown", keyDown);
        setActiveSlide(parseInt(toggle.dataset.index), 0);

        if (toggle.dataset.cover) {
            const image = items[0].querySelector("img");
            image.src = ''
            image.src = toggle.dataset.cover

            // const image = items[0].querySelector("img");
            // image.src = "/src/assets/images/cover-preloader.gif";
            // image.style = "width: 100px";
            // const virtualImage = new Image();
            // virtualImage.src = toggle.dataset.cover;
        
            // virtualImage.onerror = () => (image.src = "");
            // virtualImage.onload = ()=>{
            //     image.style = "";
            //     image.src = virtualImage.src;

            // }
       
        }
    };

    const hideBackdrop = (dismiss) => {
        window[instanceName].off("slideChange", onSlideChange);
        backdrop = dismiss ? document.querySelector(dismiss.dataset.target).closest(".backdrop") : backdrop;
        backdrop.classList.remove("show");
        backdrop.addEventListener(
            "transitionend",
            () => {
                backdrop.style.display = "none";
                if (unlockScroll) unlockScroll();
                document.removeEventListener("keydown", keyDown);
            },
            {
                once: true,
            }
        );
    };

    const init = (e) => {
        const toggle = e.target.closest("[data-toggle='lightbox']");
        const dismiss = e.target.closest('[data-dismiss="lightbox"]');

        if (toggle) showBackdrop(toggle);
        if (dismiss) hideBackdrop(dismiss);
    };

    document.addEventListener("click", init);
})();
