type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish' | 'bird'

export const createMenuObject = (activeMenu: MenuOptions) =>{
    let returnObject = {
        all:false,
        dog:false,
        cat:false,
        fish:false,
        bird:false
    }
    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }
    return returnObject
}
