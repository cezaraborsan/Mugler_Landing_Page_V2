class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
   <footer>
     <div class="footer-content">
       <div class="footer-logo">
         <img src="./images/mugler_logo.svg" alt="MUGLER" />
       </div>
       <nav class="footer-menu">
         <div class="footer-col">
           <div class="item">
             <input type="checkbox" id="w-fragrances" />
             <div class="col-section">
               <label for="w-fragrances">
                 <h5>WOMEN'S FRAGRANCES</h5>
               </label>
               <ul class="links-list">
                 <li><a href="#">Angel</a></li>
                 <li><a href="#">Alien</a></li>
                 <li><a href="#">Aura Mugler</a></li>
                 <li><a href="#">Womanity</a></li>
                 <li><a href="#">Innocent</a></li>
               </ul>
             </div>
           </div>
         </div>

         <div class="footer-col">
           <div class="item">
             <input type="checkbox" id="m-fragrances" />
             <div class="col-section">
               <label for="m-fragrances">
                 <h5>MEN'S FRAGRANCES</h5>
               </label>
               <ul class="links-list">
                 <li><a href="#">Alien Man</a></li>
                 <li><a href="#">A* Men</a></li>
               </ul>
             </div>
           </div>
         </div>

         <div class="footer-col">
           <div class="item">
             <input type="checkbox" id="featured" />
             <div class="col-section">
               <label for="featured">
                 <h5>FEATURED</h5>
               </label>
               <ul class="links-list">
                 <li><a href="#">Refill bottles</a></li>
                 <li><a href="#">Gifts for her</a></li>
                 <li><a href="#">Gifts for him</a></li>
                 <li><a href="#">What's new</a></li>
                 <li><a href="#">Best Sellers</a></li>
                 <li><a href="#">Online Exclusives</a></li>
               </ul>
             </div>
           </div>
         </div>

         <div class="footer-col">
           <div class="item">
             <input type="checkbox" id="mugler" />
             <div class="col-section">
               <label for="mugler">
                 <h5>MUGLER</h5>
               </label>
               <ul class="links-list">
                 <li><a href="#">MUGLER World</a></li>
                 <li><a href="#">MUGLER Mag</a></li>
                 <li><a href="#">The Mugler Fountain</a></li>
               </ul>
             </div>
           </div>
         </div>

         <div class="footer-col">
           <div class="item">
             <input type="checkbox" id="help" />
             <div class="col-section">
               <label for="help">
                 <h5>HELP</h5>
               </label>
               <ul class="links-list">
                 <li><a href="#">FAQ</a></li>
                 <li><a href="#">Terms & Conditions</a></li>
                 <li><a href="#">Circle Terms & Conditions</a></li>
                 <li><a href="#">Privacy Policy</a></li>
                 <li><a href="#">Contact Us</a></li>
                 <li><a href="#">Cookie Settings</a></li>
               </ul>
             </div>
           </div>
         </div>
       </nav>
       <hr />
       <section class="footer-base-bar">
         <div class="copy-rights">
           <span>© Mugler 2022</span>
           <ul>
             <li>Terms & Conditions</li>
             <li>Site Map</li>
             <li>Privacy Policy</li>
           </ul>
         </div>
         <div class="social-links">
           <p>FIND A STORE</p>
           <div class="social-wrapper">
             <ul>
               <li><img src="../images/twitter.svg" /></li>
               <li><img src="../images/facebook.svg" /></li>
               <li><img src="../images/youtube.svg" /></li>
               <li><img src="../images/pinterest.svg" /></li>
               <li><img src="../images/instagram.svg" /></li>
             </ul>
           </div>
         </div>
       </section>
     </div>
   </footer>`;
  }
}

customElements.define("footer-component", Footer);
