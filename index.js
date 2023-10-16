function handleWindowResize() {
  if (window.innerWidth < 769) {
    const cards = document.querySelectorAll(".section_3_card");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function showCard(index) {
      cards.forEach((card, i) => {
        if (i === index) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showCard(currentIndex);
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
    });

    showCard(currentIndex);
  } else {
    // Удалить обработчики событий или выполнить другие действия
  }
}

// Вызвать функцию при загрузке страницы и изменении размера окна
window.addEventListener("load", handleWindowResize);
window.addEventListener("resize", handleWindowResize);

document.getElementById("popupButton").addEventListener("click", function () {
  document.getElementById("videoPopup").style.display = "grid";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("videoPopup").style.display = "none";
});
function showMessage() {
  alert(
    "Ваше сообщение успешно отправлено! Ожидайте ответ на ваши контактные данные ;)"
  );
}

var button = document.getElementById("button_orderr");

button.addEventListener("click", showMessage);
/*forcareer+page*/
function openPage(url) {
  window.location.href = url;
}
// Получаем все элементы с классом "arrow"
// Получаем все элементы с классом "arrow"
// Получаем все элементы с классом "strelka_header"
