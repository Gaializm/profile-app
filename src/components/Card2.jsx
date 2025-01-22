import img from '../assets/profilePlaceholder.png';
const Card2 = () => {
    const name = 'Jane Doe';
    const title = 'UX Designer';
    const email = 'b@a.com';

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
export default Card2;