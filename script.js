//DOMContentLoaded, чтобы показать модальное окно при загрузке страницы.
document.addEventListener("DOMContentLoaded", function() {
    // Показать модальное окно при загрузке страницы
    document.getElementById("modal").style.display = "flex";

    // Закрыть модальное окно при клике на кнопку закрытия
    //обработчик события click для элемента с идентификатором close, чтобы скрыть модальное окно при клике на кнопку закрытия.
    document.getElementById("close").addEventListener("click", function() {
        document.getElementById("modal").style.display = "none";
    });
});