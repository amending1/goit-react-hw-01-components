import Profile from './components/Profile/Profile.jsx';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics.jsx';
import data from './components/Statistics/data.json';

import FriendList from './components/FriendList/FriendList.jsx';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import transactions from './components/TransactionHistory/transactions.json';


function App() {
  return <div>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>;
}

export default App;