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

//Project Cards JSON
const $projects = $(".projects-grid");
$.ajax("./json/projects.json").then((data) => {
  data.forEach((project, index) => {
    const $div = $('<div class="project-card">');
    $div.html(
      `<h5 class ="project-title">${project.title}</h5>
      <img src='${project.image}'/>
      <p class="project-description">${project.description}</p>
      <a href='${project.livelink} class="live-link">${project.livelink}</a>`
    );
    $projects.append($div);
    // const $goToWebsite = $(".live-link");
    //   $goToWebsite.on("click", () => {
    //     window.location = $(".live-link")
    //     return false 
    //   })

  });
});

// Links project cards to website.
// const $projectCard = $(".project-card");
  $(".project-card").on("click", () => {
    $(".live-link") = $(this).find(".live-link").atrr("href");
    return false;
  });

////////////////////////
// FOOTER
////////////////////////
