import img from '../assets/profilePlaceholder.png';
import '../styles/card.css';
const Card1 = () => {
    const name = 'John Doe';
    const title = 'Software Engineer';
    const email = 'a@a.com';

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
export default Card1;