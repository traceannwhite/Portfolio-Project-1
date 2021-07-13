////////////////////////
// HEADER
////////////////////////
//Hamburger Menu
const $menuButton = $(".menu-button");
const $navLinks = $("#nav-links");
let $menuOpen = false;
$menuButton.on("click", (event) => {
  if (!$menuOpen) {
    $menuButton.addClass("open");
    $menuOpen = true;
    $navLinks.toggle(250);
  } else {
    $menuButton.removeClass("open");
    $menuOpen = false;
  }
});

////////////////////////
// MAIN
////////////////////////

//Project Cards
const $projects = $(".projects");
$.ajax("./json/projects.json").then((data) => {
  data.forEach((project, index) => {
    const $div = $("<div>");
    $div.html(
      `<h5 class ="project-title">${project.title}</h5><img src='${project.image}'/><p class="project-description">${project.description}</p>`
    );
    $projects.append($div);
  });
});

////////////////////////
// FOOTER
////////////////////////
