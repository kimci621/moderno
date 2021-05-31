$(".tabgroup > div").hide();
$(".tabgroup > div:first-of-type").show();
$(".tabs a").click(function (e) {
  e.preventDefault();
  var $this = $(this),
    tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
    others = $this.closest("li").siblings().children("a"),
    target = $this.attr("href");
  others.removeClass("active");
  $this.addClass("active");
  $(tabgroup).children("div").hide();
  $(target).show();
});

// other tabs

$(".tabs-stage .tab").hide();
$(".tabs-stage .tab:first-child").show();
$(".tabs-nav li:first").addClass("tab-active");

// Change tab class and display content
$(".tabs-nav a").on("click", function (event) {
  event.preventDefault();
  let parent = $(this).parents(".tabs-container");
  $(".tabs-nav li", parent).removeClass("tab-active");
  $(this).parent().addClass("tab-active");
  $(".tabs-stage .tab", parent).hide();
  $($(this).attr("href")).show();
});
