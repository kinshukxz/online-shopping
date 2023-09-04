// Sample product data (you can replace this with your own data)
const products = [
  {
      id: 1,
      name: 'Product 1',
      price: 20.99,
  },
  {
      id: 2,
      name: 'Product 2',
      price: 15.49,
  },
  {
      id: 3,
      name: 'Product 3',
      price: 12.99,
  },
];

// Initialize the shopping cart
let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
      cart.push(product);
      updateCart();
  }
}

// Function to update the cart display
function updateCart() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
      cart.forEach((product) => {
          const cartItem = document.createElement('div');
          cartItem.className = 'cart-item';
          cartItem.innerHTML = `<span>${product.name} - $${product.price.toFixed(2)}</span>`;
          cartContainer.appendChild(cartItem);
      });
  }
}

// Add event listeners for "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
          const productId = parseInt(event.target.getAttribute('data-product-id'));
          addToCart(productId);
      });
  });
});

// Initialize the cart display
updateCart();
// Select elements
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Define bot responses
const botResponses = {
    greeting: "Hello! How can I assist you today?",
    products: "We have a wide range of products available. What are you looking for?",
    contact: "You can contact us at support@example.com for any inquiries.",
    default: "I'm sorry, I couldn't understand that. Please ask another question.",
};

// Function to add a message to the chat
function addMessage(message, isUser = false) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    if (isUser) {
        messageElement.classList.add('user-message');
    } else {
        messageElement.classList.add('bot-message');
    }

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value;
    addMessage(userMessage, true);
    userInput.value = "";

    // Check user input and provide a response
    if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
        addMessage(botResponses.greeting);
    } else if (userMessage.toLowerCase().includes("products")) {
        addMessage(botResponses.products);
    } else if (userMessage.toLowerCase().includes("contact")) {
        addMessage(botResponses.contact);
    } else {
        addMessage(botResponses.default);
    }
}

// Event listener for sending messages
sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

// Initial greeting from the bot
addMessage(botResponses.greeting);

