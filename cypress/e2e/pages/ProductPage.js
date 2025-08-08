import ProductModules from '../modules/ProductModules'
import NavbarModules from '../modules/NavbarModules';

class ProductPage {
    constructor() {
        this.product = new ProductModules()
        this.navbar = new NavbarModules();
        
    }

    selectRandomProducts(times = 4) {
        if (times === 0) return;

        this.product.allElectronicDevices
            .should('have.length.greaterThan', 0)
            .then(($products) => {
                const count = $products.length;
                const randomIndex = Math.floor(Math.random() * count);

                cy.wrap($products)
                    .eq(randomIndex)
                    .scrollIntoView()
                    .click({ force: true }, { timeout: 3500 });
               
                // Espera que cambie la página o que algún elemento visible indique que cargó
                cy.get('.name').should('be.visible');

                this.product.addToCartButton
                    .should('be.visible')
                    .click({ force: true },{ timeout: 3500 });

                cy.on('window:alert', (str) => {
                    expect(str).to.equal('Product added.');
                });

                this.navbar.homeLink.click();

            })
           
        .then(() => {
        // Llama recursivamente para la siguiente iteración
            this.selectRandomProducts(times - 1);
        });

           
    }
}

export default ProductPage; 