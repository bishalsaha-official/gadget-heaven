import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="hero min-h-min bg-purple-600 py-40">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <button onClick={()=> navigate('/dashboard')} className="btn bg-[white] text-purple-600 rounded-full px-5">Shop Now</button>
                    </div>
                </div>
            </div>
            <div>
                <img className='max-w-5xl -mt-36 mx-auto p-7 border rounded-2xl' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;