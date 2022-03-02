import {Request, Response} from 'express'
import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/pet'

export const home = (req:Request, res: Response) =>{
    let list = Pet.getAll()
    res.render("pages/pages",{
        menu:createMenuObject('all'),
        banner:{
            title:'Todos os animais',
            background:'allanimals.jpg'
        },
        list
    })
}
export const dogs = (req:Request, res: Response) =>{
    let list = Pet.getFromType('dog')

    res.render("pages/pages",{
        menu:createMenuObject('dog'),
        banner:{
            title:'Todos os cachorros',
            background:'banner_dog.jpg'
        },
        list
    })
}
export const cats = (req:Request, res: Response) =>{
    let list = Pet.getFromType('cat')
    res.render("pages/pages",{
        menu:createMenuObject('cat'),
        banner:{
            title:'Todos os gatos',
            background:'banner_cat.jpg'
        },
        list
    })
}
export const fishes = (req:Request, res: Response) =>{
    let list = Pet.getFromType('fish')
    res.render("pages/pages",{
        menu:createMenuObject('fish'),
        banner:{
            title:'Todos os peixes',
            background:'banner_fish.jpg'
        },
        list
    })
}

export const birds = (req:Request, res: Response) =>{
    let list = Pet.getFromType('bird')
    res.render("pages/pages",{
        menu:createMenuObject('bird'),
        banner:{
            title:'Todas as aves',
            background:'banner_bird.jpg'
        },
        list
    })
}