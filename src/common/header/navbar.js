import "../header/navbar.css";

const Navbar = () => {
  return (
    <header class="site-header">
      <div class="wrapper site-header__wrapper">
        <div class="site-header__start">
          <a href="#" class="brand">
            furni.shop
          </a>
        </div>
        <div class="site-header__middle">
          <nav class="nav">
            <ul class="nav__wrapper">
              <li class="nav__item">
                <a href="#">Home</a>
              </li>
              <li class="nav__item">
                <a href="#">About</a>
              </li>
              <li class="nav__item">
                <a href="#">Features</a>
              </li>
              <li class="nav__item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="site-header__end">
          <a href="#">
            <svg
              width="20"
              height="20"
              viewBox="0 0 17 18"
              class=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="black" fill-rule="evenodd">
                <path
                  class="_34RNph"
                  d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                ></path>
                <path
                  class="_34RNph"
                  d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                ></path>
              </g>
            </svg>
          </a>
          <a href="">
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H96C78.33 288 64 273.7 64 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
