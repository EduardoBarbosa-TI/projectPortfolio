const redirectionPages  = document.querySelectorAll(".page");

redirectionPages.forEach(page => {
    page.addEventListener("click", () => {
        if(page.classList.contains("active")){
            return;
        }

        const btnPageSelected = document.querySelector(".page.active");

        
      
        btnPageSelected.classList.remove("active");

        page.classList.add("active");

        const contentSelected = document.querySelector(".information.active");

        contentSelected.classList.remove("active");

    })
})