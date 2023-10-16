const cardHeaders = document.querySelectorAll(".card-header");

cardHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const card = header.parentElement;
    const content = card.querySelector(".card-content");
    const arrow = header.querySelector(".arrow");

    document.querySelectorAll(".card").forEach((otherCard) => {
      if (otherCard !== card) {
        const otherContent = otherCard.querySelector(".card-content");
        const otherArrow = otherCard.querySelector(".arrow");

        otherContent.style.maxHeight = "0px";
        otherContent.style.opacity = "0";
        otherArrow.style.transform = "rotate(0deg)";
      }
    });

    if (content.style.maxHeight === "0px" || content.style.maxHeight === "") {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
      arrow.style.transform = "rotate(180deg)";
    } else {
      content.style.maxHeight = "0px";
      content.style.opacity = "0";
      arrow.style.transform = "rotate(0deg)";
    }
  });
});
function showMessage() {
  alert(
    "Ваша заявка успешно отправлена! Ожидайте ответ на ваши контактные данные ;)"
  );
}

var button = document.getElementById("look_vac");

button.addEventListener("click", showMessage);
/*forcareer+page*/
function openPage(url) {
  window.location.href = url;
}
