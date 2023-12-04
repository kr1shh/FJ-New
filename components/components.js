class Navbar_comp extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
            <nav>
                <div class="nav_container">
                    <div class="nav_logo">
                        <a href="/">
                            <h1>FJ</h1>
                        </a>
                    </div>
                    <div class="nav_links">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="../pages/brands.html">Brand</a></li>
                            <li><a href="../pages/gallery.html">Gallery</a></li>
                            <li><a href="../pages/blog.html">Blog</a></li>
                            <li><a href="../pages/contact.html">Contact</a></li>
                            <li><a href="../pages/about.html">About</a></li>
                        </ul>
                    </div>
                    <div class="nav_ham">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>



                <div class="mob_nav">
                    <div class="mob_nav_links">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="../pages/brands.html">Brand</a></li>
                            <li><a href="../pages/gallery.html">Gallery</a></li>
                            <li><a href="../pages/blog.html">Blog</a></li>
                            <li><a href="../pages/contact.html">Contact</a></li>
                            <li><a href="../pages/about.html">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
      `
    }
  }





/* footer components */


class Footer_comp extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
                    <footer>
                    <div class="footer_container">
                        <div class="footer_logo">
                            <h1>FJ</h1>
                        </div>
                        <div class="footer_email">
                            <p>info@youremail.com</p>
                        </div>
                        <div class="footer_icons">
                            <a href="https://www.instagram.com/nouapparels/">
                                <i class="fa-brands fa-square-instagram" style="color: white;"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-square-facebook" style="color: white;"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/nou-apparels-pvt-ltd/">
                                <i class="fa-brands fa-linkedin" style="color: white;"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-square-threads" style="color: white;"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-square-x-twitter" style="color: white;"></i>
                            </a>
                        </div>
                    </div>
                    <div class="footer_copy">
                        <p>&copy; 2023 FJ DESIGNS. All rights reserved.</p>
                    </div>
                </footer>
      `
    }
  }



  /* ================= Defining all custom elements ================ */


  customElements.define('footer-el',Footer_comp);
  customElements.define('navbar-el',Navbar_comp);





  /* Mob nav toggle */

  const hamBurger = document.querySelector(".nav_ham")
  const mobNav = document.querySelector(".mob_nav")

  hamBurger.addEventListener("click",()=>{
    hamBurger.classList.toggle("ham_active")
    mobNav.classList.toggle("mob_nav_active")
  })


  /* Hero bg change */

  const hero = document.querySelector(".hero_container");

  const mediaQuery = window.matchMedia("(max-width: 480px)");
  
  const changeBackgroundImage = (mediaQuery) => {
    if (mediaQuery.matches) {
       hero.style.backgroundImage = "url('../assets/img/hero-mobile.jpg')";
    } else {
      hero.style.backgroundImage = "url('../assets/img/hero-desk.jpg')";
    }
  };
  

  changeBackgroundImage(mediaQuery);
  mediaQuery.addEventListener("change", changeBackgroundImage);
  