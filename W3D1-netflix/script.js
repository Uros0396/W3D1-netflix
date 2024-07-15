const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    breakPoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: "auto"
        }

    }
})


// function show section

const hideSection = document.querySelector(".hide-section");

let lastKnownScrollPosition = 0;
 
const showSection = (actualScrollPosition) => {
    if (actualScrollPosition > 100) {
        console.log("funzione eseguita");
        hideSection.classList.remove("hide-section")
    }

}



document.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;
    console.log(lastKnownScrollPosition);
    showSection(lastKnownScrollPosition)
})

// function for make navigation bar and to remove it

const divContainerSearch = document.getElementById("divContainerSearch");
const a = document.getElementById("navigation");


const createInput = () => {
    let containerInput = document.querySelector("#divContainerSearch input");
    
    if(!containerInput) {
        input = document.createElement("input");
        input.setAttribute("type", "text");
        divContainerSearch.insertBefore(input, a);
    } else {
        containerInput.remove()
    }
};

a.addEventListener("click", createInput);







    


    

       


    
       
       
    
    



    

    
    
