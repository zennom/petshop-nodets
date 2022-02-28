/*criando o type para o activeMenu
o menu pode estar em branco OU ele pode ter all OU ele pode ter dog
OU ele pode ter cat, OU ele pode ter fish */
type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObject = (activeMenu: MenuOptions) =>{

    //agora vamos criar o objeto com todos do tipo FALSE
    let returnObject = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    }
    /*agora vamos transformar o item que queremos para true
    SE activeMenu for diferente de vazio
    então returnObject será true */
    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }
    //depois vamos retornor returnObject
    return returnObject
}
