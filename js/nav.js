const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/rlogo.jpg" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search house type">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="home.html" class="link">home</a></li>
            <li class="link-item"><a href="product.html" class="link">luxury houses</a></li>
            <li class="link-item"><a href="normal.html" class="link">normal houses</a></li>
            <li class="link-item"><a href="about.html" class="link">about</a></li>
            <li class="link-item"><a href="cv.html" class="link">cv</a></li>
        </ul>
    `;
}

createNav();