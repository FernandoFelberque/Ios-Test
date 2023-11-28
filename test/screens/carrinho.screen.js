class Carrinho {

    get #Selectproduct(){
        return $(`-ios class chain:**/XCUIElementTypeImage`)
    }

    get #SelectSize(){
        return $(`-ios class chain:**/XCUIElementTypeStaticText[1]`)
    }

    get #SelectColor(){
        return $(`-ios class chain:**/XCUIElementTypeStaticText[2]`)
    }
    
    get #SelecTypeOfSizeColor(){
        return $(`-ios class chain:**/XCUIElementTypeStaticText[1]`)
    }
    
    get #ADDButton1(){
        return $(`-ios class chain:**/XCUIElementTypeButton[3]`)
    }
    get #ADDButton2(){
        return $(`-ios class chain:**/XCUIElementTypeButton`)
    }

    get #CarrinhoIcon(){
        return $(`-ios class chain:**/XCUIElementTypeButton[3]`)
    }

    async AddProduto(){
        await this.#Selectproduct.click()
        await this.#ADDButton1.click()
        await this.#SelectSize.click()
        await this.#SelecTypeOfSizeColor.click()
        await this.#SelectColor.click()
        await this.#SelecTypeOfSizeColor.click()
        await this.#ADDButton2.click()
    }

    async VerifyCarrinho(){
        await this.#CarrinhoIcon.click()   
    }

}

module.exports = new Carrinho()