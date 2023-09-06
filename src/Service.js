export default class Service {
    static async getUsers(){
        return fetch("https://fakestoreapi.com/users").then((res) => res.json());
    }
    static async getUsersCarts(id){
        return fetch("https://fakestoreapi.com/carts/user/" + id).then(res => res.json());
    }
    static async getProducts(){
        return fetch("https://fakestoreapi.com/products").then((res) => res.json());
    }
    static async getProduct(id){
        return fetch("https://fakestoreapi.com/products/" + id).then((res) => res.json());
    }
}