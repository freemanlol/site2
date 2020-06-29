document.addEventListener("DOMContentLoaded", () => {
    const closeAndOpen = document.querySelector('.btn-burger-menu'),
        body = document.querySelector('body'),
        navigationMobile = document.querySelector('.nav--mobile'),
        serviceItems = document.querySelectorAll('.service__item'),
        newsPost = document.querySelector('.section--post__inner'),
        advantages = document.querySelector('.advantages'),
        sectionReviews = document.querySelector('.section--reviews'),
        newPost2 = document.querySelector('.section--post2'),
        footerNav = document.querySelector('.footer__nav');
    let c = 0;

    closeAndOpen.addEventListener('click', () => {
        c++;

        navigationMobile.classList.remove("animate__backOutUp");
        closeAndOpen.classList.add("active__burger");
        body.classList.add("lock");
        navigationMobile.style.display = "block";
        navigationMobile.classList.add("animate__backInDown");
        if (c == 2) {
            closeAndOpen.classList.remove("active__burger");
            body.classList.remove("lock");
            navigationMobile.classList.add("animate__backOutUp");
            setTimeout(function timeAnime() {
                navigationMobile.style.display = "";
            }, 1000);
            c -= 2;
        }
    });

    // width = 
    // window
    
    if (document.body.clientWidth >= 1300) {
        console.log("я работаю")
        window.addEventListener('scroll', function() {
            if (pageYOffset >= 190) {
                serviceItems.forEach(item => {
                    item.classList.add("animate__backInRight");
                })
            }
            if (pageYOffset >= 700) {
                newsPost.classList.add("animate__backInRight");
            }
            if (pageYOffset >= 1200) {
                advantages.classList.add("animate__backInRight");
            }
            if (pageYOffset >= 1800) {
                sectionReviews.classList.add("animate__backInRight");
            }
            if (pageYOffset >= 2200) {
                newPost2.classList.add("animate__backInRight");
            }
            if (pageYOffset >= 2700) {
                footerNav.classList.add("animate__backInRight");
            }
        });
    }  
});


