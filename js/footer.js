const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
                <img src="img/llp.jpg" class="logo" alt="">
                <div class="footer-ul-container">
                    <ul class="category">
                        <li class="category-title">normal houses</li>
                        <li><a href="#" class="footer-link">3 bedroom apartment</a></li>
                        <li><a href="#" class="footer-link">4 bedroom apartment</a></li>
                        <li><a href="#" class="footer-link">3 bedroom with a garage</a></li>
                        <li><a href="#" class="footer-link">4 bedroom with a garage</a></li>
                        <li><a href="#" class="footer-link">3 bedroom with an attic</a></li>
                        <li><a href="#" class="footer-link">4 bedroomwith an attic</a></li>
                        <li><a href="#" class="footer-link">3 bedroom with a garage and attic</a></li>
                        <li><a href="#" class="footer-link">4 bedroom with a garage and attic</a></li>
                        <li><a href="#" class="footer-link">a normal house with a swimming pool</a></li>
                        
                    </ul>
                    <ul class="category">
                        <li class="category-title">luxury housess</li>
                        <li><a href="#" class="footer-link">30 bedrooms without a swimming pool</a></li>
                        <li><a href="#" class="footer-link">30 bedrooms with a swimming pool</a></li>
                        <li><a href="#" class="footer-link">7 bedrooms with a home gym and roof view</a></li>
                        <li><a href="#" class="footer-link">7 bedrooms without a home gym and roof view</a></li>
                        <li><a href="#" class="footer-link">7 bedrooms with a home gym without a roofview</a></li>
                        <li><a href="#" class="footer-link">luxury house with a home gym and in-built library</a></li>
                    </ul>
                </div>
            </div>
            <p class="footer-credit">Providing You With The Best Houses Everywhere In The World</p>
            `;
}

createFooter();