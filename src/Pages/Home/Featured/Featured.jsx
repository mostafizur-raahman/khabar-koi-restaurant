import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featuedItems text-white bg-fixed pt-8 pb-8 ">
            <SectionTitle subHeading='check in out' heading='Featured Items'></SectionTitle>
            <div className="md:flex justify-center items-center py-10 px-20 md:gap-5 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="space-y-2">
                    <p>Aug 10, 2026</p>
                    <p className="uppercase text-2xl font-bold">Where can i get Some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque architecto iusto inventore, ullam temporibus adipisci nemo iste molestias dolor sunt numquam deleniti ex doloribus necessitatibus quia asperiores, magnam impedit quos. Eos eligendi, nemo iusto voluptatum veniam id ullam officiis quaerat magni laudantium! Commodi ex officiis, deleniti labore accusantium ut?</p>
                    <button className=" btn btn-outline bg-sky-500 border-0 border-b-4">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;