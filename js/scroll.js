document.addEventListener("DOMContentLoaded", () => {
    const scrollTo = (triggerSelector, targetSelector, duration = 800) => {
        const triggers = document.querySelectorAll(triggerSelector);
        const target = document.querySelector(targetSelector);

        if (!target) return;

        triggers.forEach(trigger => {
            trigger.addEventListener("click", (e) => {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
        });
    };

    scrollTo(".js--scroll-to-contacts", ".js--contacts-scroll-point");
    scrollTo(".js--scroll-to-products", "#scroll-products-point", 400);
});
