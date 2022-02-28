import {Request, Response} from 'express'
import { createMenuObject } from '../helpers/createMenuObject'

export const home = (req:Request, res: Response) =>{
    res.render("pages/pages",{
        menu:createMenuObject('all'),
        banner:{
            title:'Todos os animais',
            background:'allanimals.jpg'
        }
    })
}
export const dogs = (req:Request, res: Response) =>{
    res.render("pages/pages",{
        menu:createMenuObject('dog'),
        banner:{
            title:'Todos os cachorros',
            background:'banner_dog.jpg'
        }
    })
}
export const cats = (req:Request, res: Response) =>{
    res.render("pages/pages",{
        menu:createMenuObject('cat'),
        banner:{
            title:'Todos os gatos',
            background:'banner_cat.jpg'
        }
    })
}
export const fishes = (req:Request, res: Response) =>{
    res.render("pages/pages",{
        menu:createMenuObject('fish'),
        banner:{
            title:'Todos os peixes',
            background:'banner_fish.jpg'
        }
    })
}