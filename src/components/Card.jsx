import '../styles/card.css';
import PropTypes from 'prop-types';
const Card = (img, name, title, email) => {

    return (
        <div className="profile-card">
            <div className="profile-card_image">
                <img src={img} alt={name} />
            </div>
            <div className="profile-card_content">
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={'mailto:${email}'}>{email}</a></p>
            </div>
        </div>
    );
}

Card.PropTypes = {

    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    email: PropTypes.string.isRequired
}
export default Card;