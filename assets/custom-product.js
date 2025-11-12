const syncAddToCartPrice = () => {
    const priceEl = document.querySelector('[data-product-price]');
    const addToCartPriceEl = document.querySelector('[data-add-to-cart-price]');

    if (!priceEl || !addToCartPriceEl) return;

    const updateAddToCartPrice = () => {
        addToCartPriceEl.textContent = priceEl.textContent;
    };

    // Initial sync
    updateAddToCartPrice();

    // Watch for text/content changes
    const observer = new MutationObserver(() => updateAddToCartPrice());

    observer.observe(priceEl, {
        childList: true,
        characterData: true,
        subtree: true
    });
};

// Initialise
document.addEventListener('DOMContentLoaded', () => {
    syncAddToCartPrice();
});
