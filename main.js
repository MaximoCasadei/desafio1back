class ProductManager {
    static ultId = 0;

    constructor(){
        this.products = []
    }

    addProduct(title, description, price, img, code, stock){
        
        
        if(!title || !description || !price || !img || !code || !stock){
            console.log('Completá todos los campos bro')
            return;
        }

        if(this.products.some(item => item.code === code)){
            console.log('El código debe ser único')
            return;
        }

        const newProduct = {
            id : ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        this.products.push(newProduct)

    }

    getProducts(){
        console.log(this.products)
    }

    getPoductsById(id){
        const product = this.products.find(item => item.id === id)

        if(!product){
            console.log('Pdct no encontrado brodi')
        }else{
            console.log('encontrado', product)
        }
        return product
    }

}


const manager = new ProductManager();

manager.getProducts()

manager.addProduct('Caca', 'esto es una caca', 1000, 'la imagen es asquerosa', '0800', 1)

manager.getProducts()
manager.getPoductsById(1)