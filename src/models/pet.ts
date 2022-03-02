type PetType = 'dog' | 'cat' | 'fish' | 'bird'

type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: 'Masculino' | 'Feminino'
}
const data: Pet[] = 
[
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'bird',
        image: 'arara-azul.jpg',
        name: 'Arara Azul',
        color:'Azul e Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'bird',
        image: 'arara-caninde.jpg',
        name: 'Arara Canindé',
        color: 'Azul e Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'bird',
        image: 'pato-mandarim.jpg',
        name: 'Pato Mandarim',
        color: 'Marrom e Preto',
        sex: 'Masculino'
    },
    {
        type: 'bird',
        image: 'ringneck.jpg',
        name: 'Periquito de Colar',
        color: 'Verde',
        sex: 'Masculino'
    },
    {
        type: 'bird',
        image: 'tucano.jpg',
        name: 'Tucano de Bico Preto',
        color: 'Preto e Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'bird',
        image: 'cacatua-rosa.jpg',
        name: 'Cacatua Rosa',
        color: 'Rosa e Branco',
        sex: 'Masculino'
    },
    {
        type: 'bird',
        image: 'calopsita.jpg',
        name: 'Calopsita',
        color: 'Branco e Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        sex: 'Masculino'
    },
]

export const Pet = {
    getAll: () =>{
        return data
    },
    getFromType: (type: PetType): Pet[] =>{

        return data.filter(item =>{
            if(item.type == type){
                return true
            }else{
                return false
            }
        })
    },
    getFromName: (name: string): Pet[] =>{
        return data.filter(item => {
            if(item.name.toLowerCase().indexOf(name.toLowerCase()) > -1){
                return true
            } else {
                return false
            }
        })
    }
}

