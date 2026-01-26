// document.addEventListener('DOMContentLoaded', function () {
//     // Fancybox.bind(".js--product-image", {
//     //     Thumbs: false,
//     // });
//     Fancybox.fromNodes(Array.from(document.querySelectorAll(".js--product-image")), {
//         // Your custom options
//     });
// })

document.addEventListener("DOMContentLoaded", () => {
    Fancybox.bind('[data-fancybox="product"]', {
        Thumbs: false,
        Toolbar: {
            display: [
                { id: "prev", position: "center" },
                { id: "counter", position: "center" },
                { id: "next", position: "center" },
                "close",
            ],
        },
    });
});