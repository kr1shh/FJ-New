// class Footer_comp extends HTMLElement {
//     connectedCallback() {
//       this.innerHTML = `

//       `
//     }
//   }





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
                            <a href="#">
                                <i class="fa-brands fa-square-instagram" style="color: white;"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-square-facebook" style="color: white;"></i>
                            </a>
                            <a href="#">
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