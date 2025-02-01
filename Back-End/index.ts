import express,{type Application} from 'express';
import { Get,patch,post,Delete } from './src/Control';

const App:Application=express()
const port:number= 3000;

App.use(express.json());

App. route('/GetAnime').get(Get);

App.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
