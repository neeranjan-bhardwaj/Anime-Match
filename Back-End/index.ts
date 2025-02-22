import express,{type Application} from 'express';
import { Delete, Get, post } from './src/Control';

const App:Application=express()
const port:number= 3000;

App.use(express.json());

App. route('/').get(Get).post(post).delete(Delete);

App.listen(port, () => {
    console.log(`Server started on port ${port}`);
});