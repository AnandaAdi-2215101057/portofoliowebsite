window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("bg-slate-800", this.window.scrollY > 0)
})