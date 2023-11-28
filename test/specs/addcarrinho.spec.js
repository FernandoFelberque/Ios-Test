const carrinho = require("../screens/carrinho.screen")
const productViewScreen = require("../screens/productView.screen")

describe('Add Carrinho', () => {
   
    it('shoud add produtos ao carrinho', async () => {
        let searchName = 'Proteus Fitness Jackshirt'
        await productViewScreen.waitProduct(searchName)
        await productViewScreen.search()
        await productViewScreen.searchBy(`${searchName}\n`)
        await carrinho.AddProduto()
        await carrinho.VerifyCarrinho()
        
        expect(await productViewScreen.product("Proteus Fitness Jackshirt")).toExist()
    })
})