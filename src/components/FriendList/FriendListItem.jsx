import css from './friendlist.module.css';

import PropTypes from 'prop-types';

function FriendListItem ({avatar, name, isOnline}) {
    const variant = isOnline ? 'online' : 'offline';
    const getBgColor = (variant) => { 
        switch (variant) {
            case 'online':
                return "green";
            case 'offline':
                return 'red';
                default:
                    return 'white';
        }
    };
    return (
        <li className={css.item}>
        <span className={css.status} style={{backgroundColor: getBgColor(variant) }}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name} >{name}</p>
      </li>  
    )
};

export default FriendListItem;