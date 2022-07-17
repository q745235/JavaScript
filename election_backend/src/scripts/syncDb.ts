import {syncAll} from '../mydb/migrate';

(async function(){
    await syncAll()
})()