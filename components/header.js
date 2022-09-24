class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = ` <header class="header">
    <div class="top-bar">
      <div class="mobile-menu">
        <button class="hamburger-icon">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <button class="search-icon">
          <img src="../images/Search-icon.svg" />
        </button>
      </div>
      <form class="search-form">
        <button class="search-btn">
          <img src="../images/Search-icon.svg" />
        </button>
        <div class="search-input-container">
          <img src="../images/Search-icon.svg" />
          <input
            type="search"
            placeholder="Search.."
            name="search"
            class="search-input opacity"
          />
        </div>
      </form>

      <div class="logo">
        <a href="index.html"
          ><img
            src="../images/MUGLER-logo.svg"
            alt="MUGLER"
            class="top-bar-logo"
        /></a>
      </div>

      <div class="top-bar-buttons">
        <button class="account-btn">
          <a href="login.html"
            ><img src="../images/Account-icon.svg" alt="tiny man"
          /></a>
        </button>
        <button class="basket-btn">
          <img src="../images/Basket-icon.svg" alt="basket" />
        </button>
      </div>
    </div>

    <nav class="nav-links menu-wrapper">
      <ul class="menu-main">
        <li class="menu-item nav-expand">
          <a href="#" class="menu-bar-link nav-expand-link">
            Frangrance
            <img class="menu-chevron" src="../images/Chevron-menu.svg" alt=""
          /></a>
          <div class="menu-sub nav-expand-content">
            <div class="menu-flex">
              <div class="menu-col-1 nav-expand">
                <a class="menu-category nav-expand-link">
                  New
                  <img
                    class="menu-chevron"
                    src="../images/Chevron-menu.svg"
                    alt=""
                  />
                </a>
                <ul class="nav-expand-content">
                  <li><a href="#">Alien Goddess</a></li>
                  <li><a href="#">Angel Nova</a></li>
                  <li><a href="#">Alien Mirage</a></li>
                </ul>

                <div class="nav-expand">
                  <a class="menu-category nav-expand-link">
                    Gifts
                    <img
                      class="menu-chevron"
                      src="../images/Chevron-menu.svg"
                      alt=""
                    />
                  </a>
                  <ul class="nav-expand-content">
                    <li><a href="#">Gifts Sets for Her</a></li>
                    <li><a href="#">Gifts Sets for Him</a></li>
                  </ul>
                </div>
              </div>

              <div class="menu-col-2 nav-expand">
                <a class="menu-category nav-expand-link">
                  Womens' Fragrance
                  <img
                    class="menu-chevron"
                    src="../images/Chevron-menu.svg"
                    alt=""
                  />
                </a>
                <ul class="nav-expand-content">
                  <li><a href="#">Angel</a></li>
                  <li><a href="#">Alien</a></li>
                  <li><a href="#">Alien Goddess</a></li>
                  <li><a href="#">Aura MUGLER</a></li>
                  <li><a href="#">Angel Muse</a></li>
                  <li><a href="#">Womanity</a></li>
                  <li><a href="#">Innocent</a></li>
                </ul>
              </div>

              <div class="menu-col-3 nav-expand">
                <a class="menu-category nav-expand-link">
                  Mens' Fragrance
                  <img
                    class="menu-chevron"
                    src="../images/Chevron-menu.svg"
                    alt=""
                  />
                </a>
                <ul class="nav-expand-content">
                  <li><a href="#">Alien Man</a></li>
                  <li><a href="#">A *Men</a></li>
                </ul>
              </div>

              <div class="menu-col-4 nav-expand">
                <a class="menu-category nav-expand-link">
                  Exclusivities
                  <img
                    class="menu-chevron"
                    src="../images/Chevron-menu.svg"
                    alt=""
                  />
                </a>
                <ul class="nav-expand-content">
                  <li><a href="#">Les Exceptions</a></li>
                  <li><a href="#">MUGLER Cologne</a></li>
                  <li><a href="#">Refills</a></li>
                  <li><a href="#">MUGLER Fountain</a></li>
                </ul>
              </div>

              <div class="menu-col-5 nav-expand">
                <a class="menu-category nav-expand-link">
                  Selections
                  <img
                    class="menu-chevron"
                    src="../images/Chevron-menu.svg"
                    alt=""
                  />
                </a>
                <ul class="nav-expand-content">
                  <li><a href="#">What's New</a></li>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">Gifts & Sets</a></li>
                  <li><a href="#">Scented Candles</a></li>
                  <li><a href="#">Travel Size</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li class="menu-item nav-expand">
          <a href="#" class="menu-bar-link nav-expand-link">
            Fashion
            <img class="menu-chevron" src="../images/Chevron-menu.svg" alt=""
          /></a>
          <div class="menu-sub nav-expand-content">
            <div class="menu-flex">
              <div class="menu-col-1">
                <p class="menu-category">
                  Collections
                  <img
                    class="menu-chevron"
                    src="images\Chevron-menu.svg"
                    alt=""
                  />
                </p>
              </div>

              <div class="menu-col-2">
                <p class="menu-category">
                  Collections 2
                  <img
                    class="menu-chevron"
                    src="../images/Chevron-menu.svg"
                    alt=""
                  />
                </p>
              </div>

              <div class="menu-col-3">
                <p class="menu-category">
                  Collections 3
                  <img
                    class="menu-chevron"
                    src="../images/Chevron-menu.svg"
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>
        </li>

        <li class="menu-item nav-expand">
          <a href="#" class="menu-bar-link nav-expand-link">
            The fountain
            <img class="menu-chevron" src="../images/Chevron-menu.svg" alt=""
          /></a>
          <div class="menu-sub nav-expand-content">
            <div class="menu-flex">
              <div class="menu-col-1">
                <p class="menu-category">
                  Fountain 1
                  <img
                    class="menu-chevron"
                    src="../images/Chevron-menu.svg"
                    alt=""
                  />
                </p>
              </div>

              <div class="menu-col-2">
                <p class="menu-category">
                  Fountain 2
                  <img
                    class="menu-chevron"
                    src="../images/Chevron-menu.svg"
                    alt=""
                  />
                </p>
              </div>

              <div class="menu-col-3">
                <p class="menu-category">
                  Fountain 3
                  <img
                    class="menu-chevron"
                    src="../images/Chevron-menu.svg"
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>
        </li>
        <li class="menu-item nav-expand">
          <a href="#" class="menu-bar-link nav-expand-link">
            About
            <img class="menu-chevron" src="../images/Chevron-menu.svg" alt=""
          /></a>
        </li>
      </ul>
    </nav>
  </header>`;
  }
}

customElements.define("header-component", Header);
