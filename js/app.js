////////////////////////
// HEADER
////////////////////////

////////////////////////
// MAIN
////////////////////////

//Project Cards
const $projects = $(".projects");
$.ajax("./json/projects.json").then((data) => {
  data.forEach((project, index) => {
    const $div = $("<div>");
    $div.html(
      `<img src='${project.image}'/><h5 class ="project-title">${project.title}</h5><p class="project-description">${project.description}</p>`
    );
    $projects.append($div);
  });
});

////////////////////////
// FOOTER
////////////////////////
