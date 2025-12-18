
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('right-0');
        mobileMenu.classList.toggle('right-[-100%]');
    });
       document.querySelectorAll('.accordion-box').forEach(item => {
        item.addEventListener('click', () => {
            const content = item.querySelector('.accordion-content');
            const icon = item.querySelector('.icon');

            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });
    menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");

  const spans = menuBtn.querySelectorAll("span");

  if (menuBtn.classList.contains("open")) {

    spans[0].classList.add("translate-y-[7px]", "rotate-45");
    
    spans[1].classList.add("opacity-0");
    
    spans[2].classList.add("-translate-y-[7px]", "-rotate-45");
  } else {
    
    spans[0].classList.remove("translate-y-[7px]", "rotate-45");
    spans[1].classList.remove("opacity-0");
    spans[2].classList.remove("-translate-y-[7px]", "-rotate-45");
  }
});
