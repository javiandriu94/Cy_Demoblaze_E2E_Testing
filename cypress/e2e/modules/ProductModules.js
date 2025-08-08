
class ProductModules {
    get allElectronicDevices () {
        return cy.get('.card-title a')
    }
    
    get addToCartButton () {
        return cy.get('.col-sm-12 > .btn')
    }
}

export default ProductModules;