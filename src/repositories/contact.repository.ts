import { Alert } from 'react-native';
import { Product } from '../models/product';
import User  from '../models/user';
import productdbService from '../services/productdb';

class ProductRepository {

    public async list(): Promise<Product[]> {
        try{ const response = await productdbService.get('/product/list');
        return response.data;
        }  catch (error) {
            console.error('It was not possible to get Products');
            console.error(error);
            return [];
        }
    }

    public async  addUser(user: User) {
        try { 

            let name = (user.name);
            let email = (user.email);
            let age = (user.age);
            let  address = (user.address);
            let  userPassword = (user.userPassword);
         
            console.log(user.name);
            console.log(user.address);
            console.log(user.email);
            console.log(user.age);
            console.log(user.userPassword);
            const response = await productdbService.post('/user/customer/add', {address,age,email, name,userPassword });
            console.log(response.data);
            Alert.alert('User Created')
            return response.data;
        } catch (error) {
            console.error('Error during user registration:');
            console.error(error);
            return null;
        }
    }

    public async login(login: string, password: string) {
        try {
          
            const response = await productdbService.post('/user/login', { login, password });
            return response.data;
        } catch (error) {
            console.error('Error during authentication:');
            console.error(error);
            return null;
        }
    }
    
}



export default new ProductRepository();