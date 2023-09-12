document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const cartMessage = document.getElementById('cart-message');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        cartMessage.style.display = 'block';
      });
    });
  });
  