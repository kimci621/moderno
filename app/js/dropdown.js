function dropdowns() {
  $(".dropdown-trigger").click(function () {
    $(this).next(".dropdown-content").toggleClass("show");
    return false;
  });

  $("html").click(function () {
    $(".dropdown-content").removeClass("show");
  });

  $(".dropdown, .dropdown-trigger, .dropdown-content").click(function (event) {
    return event.stopPropagation();
  });
}

dropdowns();
