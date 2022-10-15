const redirectionPages = document.querySelectorAll(".page");

redirectionPages.forEach(page => {

    page.addEventListener("click", () => {

        if (page.classList.contains("active")) {
            return;
        }

        selectedPages(page);

        removePage();

        renderPageSelected(page);
    })
})

function selectedPages(page) {
    const btnPageSelected = document.querySelector(".page.active");

    btnPageSelected.classList.remove("active");

    page.classList.add("active");

    return

}

function removePage() {
    const contentSelected = document.querySelector(".information.active");

    contentSelected.classList.remove("active");
}

function renderPageSelected(page) {
    const idElementPageInformation = `page-${page.id}`

    const informationSelected = document.getElementById(idElementPageInformation)

    informationSelected.classList.add("active")
}