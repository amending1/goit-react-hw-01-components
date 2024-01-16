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
 
FriendList.propTypes.friends = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}
export default FriendList;