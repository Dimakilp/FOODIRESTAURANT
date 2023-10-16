let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  total += itemPrice;
  updateCart();
}

function removeFromCart(index) {
  const removedItem = cart.splice(index, 1)[0];
  total -= removedItem.price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const cartEmpty = document.getElementById("cart-empty");
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartEmpty.style.display = "block"; // Показываем сообщение
  } else {
    cartEmpty.style.display = "none"; // Скрываем сообщение, если есть товары
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerText = `${item.name}: ${item.price}$`;

      const removeButton = document.createElement("button");
      removeButton.innerText = "-";
      removeButton.classList.add("remove-button"); // Добавляем класс кнопке
      removeButton.onclick = () => removeFromCart(index);

      li.appendChild(removeButton);
      cartList.appendChild(li);
    });
  }

  const totalElement = document.getElementById("total");
  totalElement.innerText = `Итого: ${total}$`;
}
const links = document.querySelectorAll(".color-change");
let currentLink = null;
if (window.innerWidth < 769) {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (currentLink) {
        currentLink.style.color = "white";
      }
      link.style.color = "green";
      currentLink = link;
    });
  });
} else {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (currentLink) {
        currentLink.style.color = "black";
      }
      link.style.color = "green";
      currentLink = link;
    });
  });
}

function showMessage() {
  alert("Ваш заказ уже готовится! Оплата при пролучении ;)");
}

var button = document.getElementById("button_orderr");

button.addEventListener("click", showMessage);
