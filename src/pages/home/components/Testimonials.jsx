import StarIcon from '../icons_assets/star.png';
import UserIcon from '../icons_assets/user.png';

function Testimonials() {
  return (
    <section id="testimonials">
    <h1>Testimonials</h1>
    <div className="reviews">
        <div className="review-card">
            <span>Osama Babiker</span>
            <div className="d-flex">
                <img src={UserIcon} alt="User Icon" />
                <div className="review-stars">
                    <img src={{StarIcon}} alt="Star Icon" />
                    <img src={{StarIcon}} alt="Star Icon" />
                    <img src={{StarIcon}} alt="Star Icon" />
                    <img src={{StarIcon}} alt="Star Icon" />
                </div>
            </div>
            <p>Lorem ipsum is placeholder text</p>
        </div>
        <div className="review-card">
            <span>Osama Babiker</span>
            <div className="d-flex">
                <img src={UserIcon} alt="User Icon" />
                <div className="review-stars">
                    <img src={{StarIcon}} alt="Star Icon" />
                    <img src={{StarIcon}} alt="Star Icon" />
                    <img src={{StarIcon}} alt="Star Icon" />
                    <img src={{StarIcon}} alt="Star Icon" />
                </div>
            </div>
            <p>Lorem ipsum is placeholder text</p>
        </div>
        <div className="review-card">
            <span>Osama Babiker</span>
            <div className="d-flex">
                <img src={UserIcon} alt="User Icon" />
                <div className="review-stars">
                    <img src={{StarIcon}} alt="Star Icon" />
                    <img src={{StarIcon}} alt="Star Icon" />
                    <img src={{StarIcon}} alt="Star Icon" />
                    <img src={{StarIcon}} alt="Star Icon" />
                </div>
            </div>
            <p>Lorem ipsum is placeholder text</p>
        </div>
        <div className="review-card">
            <span>Osama Babiker</span>
            <div className="d-flex">
                <img src={UserIcon} alt="User Icon" />
                <div className="review-stars">
                    <img src={{StarIcon}} alt="Star Icon" />
                    <img src={{StarIcon}} alt="Star Icon" />
                    <img src={{StarIcon}} alt="Star Icon" />
                    <img src={{StarIcon}} alt="Star Icon" />
                </div>
            </div>
            <p>Lorem ipsum is placeholder text</p>
        </div>
    </div>
</section>
  )
}

export default Testimonials