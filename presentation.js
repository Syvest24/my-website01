document.addEventListener("DOMContentLoaded", () => {
    // Sticky Header on Scroll
    const header = document.querySelector(".header_section");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.width = "100%";
        header.style.zIndex = "1000";
      } else {
        header.style.position = "static";
      }
    });
  
    // Fade-in effect for sections
    const sections = document.querySelectorAll("main section, .galery001");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.2 }
    );
  
    sections.forEach(section => {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
      section.style.transition = "all 0.8s ease-in-out";
      observer.observe(section);
    });
  
    // Image Modal
    const galleryImages = document.querySelectorAll(".box img");
    const modal = document.createElement("div");
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s ease-in-out;
    `;
  
    const modalImage = document.createElement("img");
    modalImage.style.cssText = "max-width: 90%; max-height: 90%; border-radius: 10px;";
    modal.appendChild(modalImage);
  
    document.body.appendChild(modal);
  
    galleryImages.forEach(img => {
      img.addEventListener("click", () => {
        modalImage.src = img.src;
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
      });
    });
  
    modal.addEventListener("click", () => {
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
    });
  });
  