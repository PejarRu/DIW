export function renderHeader() {
  var container = document.createElement('header');
  fetch('./partials/header.html')
  .then(response => response.text())
  .then(html => {
    container.innerHTML = html;
  });
  document.body.appendChild(container);
}

export function renderFooter() {
  var container = document.createElement('footer');
  fetch('./partials/footer.html')
  .then(response => {
    response.text()})
  .then(html => {
    container.innerHTML = html;
  });

  document.body.appendChild(container);
}
/*
function renderHeader2() {
  var container = document.createElement('header');
  container.innerHTML = `
  <div class="brand">
    <div class="logo">
      <img class="logo-min" src="img/logo-min.png" alt="logotipo-min" width="100px">
      <img class="logo-full" src="img/logo.png" alt="logotipo-full" width="100px">
    </div>
    <a href="index.html">
      <h2 class="brand_title" data-text="ChainHouse">
        <span class="load"></span>

        ChainHouse
        <span class="underline"></span>
      </h2>
    </a>
    <div class="buscador">
      <form action="#">
        <input type="text" placeholder="Buscar">
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
  </div>

  <!-- NAV START -->
  <nav class="nav">
    <div class="button-menu"></div>
    <ul class="menu">
      <li class="active">
        <a href="index.html">Inicio</a>
      </li>
      <li class="submenu">
        <a class="dropdown-arrow" href="buy-properties.html">Propiedades</a>
        <ul>
          <li>
            <a href="favourites.html">Mis Favoritos</a>
          </li>

          <li class="submenu">
            <a class="dropdown-arrow" href="rent-properties.html">
              Alquiler
            </a>
            <ul>
              <li>
                <a href="rent-properties.html">Viviendas</a>
              </li>
              <li>
                <a href="rent-properties.html">Locales</a>
              </li>
            </ul>
          </li>
          <li class="submenu">
            <a class="dropdown-arrow" href="buy-properties.html">Comprar</a>
            <ul>
              <li>
                <a href="buy-properties.html">Adquisicion total</a>
              </li>
              <li>
                <a href="buy-properties.html">Adquisicion parcial</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="about.html">Sobre nosotros</a></li>
      <li><a href="contact.html">Contacto</a></li>
    </ul>
  </nav>
  <!-- NAV END -->
  `;
  document.body.appendChild(container);
}
function renderFooter2() {
  var container = document.createElement('footer');
  container.innerHTML = `
    <!-- SECCION: ENLACES START -->
    <section class="footer">
      <div class="social">
        <!-- GRID COLUMNA 1:CONTENIDO -->
        <h6 class="section-title">Redes Sociales</h6>
        <i class="icon-search"></i>
        <!-- IZQUIERDA END -->

        <!-- DERECHA START -->
        <div class="footer-card">
            <div class="menu">
            <span>Siguenos en las redes sociales: <br /></span>
            <a href="">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="">
              <i class="fa fa-google"></i>
            </a>
            <a href="">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- GRID COLUMNA 1 -->

      <!-- GRID COLUMNA 2: -->
      <div class="footer-card">
        <div class="product">
          <h6 class="section-title">Propiedades</h6>
          <i class="icon-house"></i>
          <div class="menu">
            <a href="rent-properties.html" class="text-white">
              <p>alquiler viviendas</p>
            </a>
            <a href="rent-properties.html" class="text-white">
              <p>alquiler oficinas</p>
            </a>
            <a href="buy-properties.html" class="text-white">
              <p>viviendas guardadas</p>
            </a>
            <a href="buy-properties.html" class="text-white">
              <p>viviendas para inverison</p>
            </a>
          </div>
        </div>
      </div>
      <!-- GRID COLUMNA 2 -->

      <!-- GRID COLUMNA 3 -->
      <div class="footer-card">
        <div class="links">
          <!-- ENLACES -->
          <h6 class="section-title">Enlaces interesantes</h6>
          <i class="icon-enlace"></i>
          <div class="menu">
            <a href="#!" class="text-white">
              <p>mi cuenta</p>
            </a>
            <a href="#!" class="text-white">
              <p>ser afiliado</p>
            </a>
            <a href="#!" class="text-white">
              <p>trabaja con nosotros</p>
            </a>
            <a href="#!" class="text-white">
              <p>ayuda</p>
            </a>
            <a href="aviso-legal.html" class="text-white">
              <p>aviso legal</p>
            </a>
          </div>
        </div>
      </div>
      <!-- GRID COLUMNA 3 -->

      <!-- GRID COLUMNA 4 -->
      <div class="footer-card">
        <div class="contact">
          <!-- ENLACES -->
          <h6 class="section-title">Contacto</h6>
          <i class="icon-mail"></i>
          <div class="menu">
            <p><i class="fa fa-home mr-3"></i>Madrid, MD 10012, ES</p>
            <p><i class="fa fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fa fa-phone mr-3"></i> + 34 234 567 88</p>
            <p><i class="fa fa-print mr-3"></i> + 34 234 567 89</p>
            <p>
              <a href="contact.html">enviar mensaje</a>
            </p>
          </div>
        </div>
      </div>
      <!-- GRID COLUMNA 4 -->

      <!-- GRID COLUMNA 5 -->
      <div class="buscador">
        <form action="#">
          <input type="text" placeholder="Buscar" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
      <!-- GRID COLUMNA 5 -->
    </section>
    <!-- SECCION: ENLACES END -->
    <!-- DERECHOS AUTOR START -->
    <div class="author">
      © 2022 Copyright:
      <a href="">Berzins Antons</a>
    </div>
    <!-- DERECHOS AUTOR END -->
    `;
  document.body.appendChild(container);
}
*/