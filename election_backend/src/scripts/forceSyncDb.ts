import {forceSyncAll} from '../mydb/migrate';

(async function(){
    await forceSyncAll()
})()