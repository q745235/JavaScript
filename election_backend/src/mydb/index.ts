import mydb from "./loadDB";

import voterList from './model/voterList';
import electionList from "./model/electionList";
import candidateList from "./model/candidateList";
import votes from "./model/votes";


const voterList_tb = mydb.define('voterList', voterList, {
    tableName: 'voterList'
})

const electionList_tb = mydb.define('electionList', electionList, {
  tableName: 'electionList'
})
const candidateList_tb = mydb.define('candidateList', candidateList, {
  tableName: 'candidateList'
})
const votes_tb = mydb.define('votes', votes, {
  tableName: 'votes'
})

export {
  voterList_tb,
  electionList_tb,
  candidateList_tb,
  votes_tb,
}

export default mydb;