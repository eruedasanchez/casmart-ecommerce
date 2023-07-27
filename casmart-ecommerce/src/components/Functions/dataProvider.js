import data from '../Json/products.json';

export const dataProvider = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);            
        }, 1000)
    })
}

export const requestItemById = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((elem) => elem.id === id);
        if (item){
            resolve(item)
        } else {
            reject({error: "No se encontro el producto"})  
        }
    })
}