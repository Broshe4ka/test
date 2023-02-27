let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
};

select();

$('.pay-bot__radio').click(function() {
  $('.pay-bot__radio input').each(function() {
    $(this).prop('checked', false)
    $(this).parent().removeClass('pay-selected')
  })
  $(this).find('input').prop('checked', true)
  $(this).addClass('pay-selected')
})