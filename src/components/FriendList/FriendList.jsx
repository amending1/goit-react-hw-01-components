import PropTypes from 'prop-types';
import css from './friendlist.module.css';
import FriendListItem from './FriendListItem';

function FriendList({friends}) {
    return (
<ul className={css.friendList}>
    {friends.map((friend) => (
    <FriendListItem
    key={friend.id}
    avatar={friend.avatar}
    name={friend.name}
    isOnline={friend.isOnline}
  />))}        
</ul>
    )
}
 
FriendList.propTypes = {
    friends: PropTypes.array.isRequired,   
}
export default FriendList;