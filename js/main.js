// عندما يقوم المستخدم بالتمرير، قم بتنفيذ وظيفة scrollFunction
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // إذا قام المستخدم بالتمرير لأكثر من 20 بكسل من أعلى الصفحة، أظهر الزر
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        // إذا لم يقم المستخدم بالتمرير لأكثر من 20 بكسل، اخفِ الزر
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

// عند النقر على الزر، قم بالتمرير إلى أعلى الصفحة بسلاسة
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // التمرير بسلاسة
    });
}
