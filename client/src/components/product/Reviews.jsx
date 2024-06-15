import React from 'react'
import ProductReview from '../ProductReview';

export default function Reviews() {
    const RatingStars = ({ avg_stars, reviews }) => {
        const totalReviews = reviews.reduce((sum, value) => sum + value, 0);
        const percentage = (count) => (count / totalReviews) * 100;

        return (
            <div className="p-6 bg-white rounded-lg w-10/12">
                <h2 className="text-xl font-bold mb-2">ULASAN PEMBELI</h2>
                <div className="flex items-center mb-2">
                    <div className="text-yellow-500 text-3xl font-bold mr-2">{avg_stars}</div>
                    <div className="text-gray-500 text-xl">/5.0</div>
                </div>
                <div className="text-gray-700 mb-4">100% pembeli merasa puas</div>
                <div className="text-gray-500 mb-4">{totalReviews} rating • {totalReviews} ulasan</div>
                {[5, 4, 3, 2, 1].map((star, index) => (
                    <div key={star} className="flex items-center mb-1">
                        <div className="flex items-center w-8">
                            <span className="text-yellow-500 mr-1">{star}</span>
                            <svg
                                className="w-4 h-4 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.374 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.539 1.118L10 14.347l-3.374 2.455c-.783.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L3.535 9.393c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.966z"></path>
                            </svg>
                        </div>
                        <div className="flex-grow bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                                className="bg-yellow-500 h-2.5 rounded-full"
                                style={{ width: `${percentage(reviews[5 - star])}%` }}
                            ></div>
                        </div>
                        <div className="text-gray-700 w-6">{reviews[5 - star]}</div>
                    </div>
                ))}
            </div>
        );
    };

    const reviews = [
        {
            username: 'Andreas',
            picture: `https://randomuser.me/api/portraits/women/`,
            stars: 5,
            review: 'This product exceeded my expectations in every possible way. From the moment I opened the package, I could tell that a lot of thought and care had been put into its design and manufacture. The quality of the materials is outstanding, and the performance is even better than I had hoped for. It has quickly become an essential part of my daily routine, and I can’t imagine going back to how things were before. The customer service has also been exceptional, responding promptly to all of my inquiries. I highly recommend this product to anyone looking for quality and reliability.',
        },
        {
            username: 'Budi',
            picture: `https://randomuser.me/api/portraits/women/`,
            stars: 5,
            review: 'Absolutely love it! This product offers great value for the price. The build quality is impressive, and it performs its function perfectly. I’ve been using it every day since I got it, and I’m still amazed at how well it works. The design is sleek and modern, making it a nice addition to my home. The setup was straightforward, and the instructions were easy to follow. I’ve already recommended it to several friends and family members, and they’ve all been equally satisfied. If you’re on the fence about buying this, I say go for it – you won’t be disappointed!',
        },
        {
            username: 'Citra',
            picture: `https://randomuser.me/api/portraits/women/`,
            stars: 5,
            review: 'I highly recommend this product to everyone! From the moment I started using it, I noticed a significant difference. It’s extremely efficient and user-friendly. The attention to detail in its design is apparent, and it’s clear that a lot of thought has gone into making this product both functional and attractive. It has made my life so much easier, and I’m very grateful for that. The durability is also commendable – it’s built to last, and I expect to use it for many years to come. Overall, this product has far surpassed my expectations, and I’m very pleased with my purchase.',
        },
        {
            username: 'Dewi',
            picture: `https://randomuser.me/api/portraits/women/`,
            stars: 5,
            review: 'Five stars! I will definitely buy again. This product is fantastic – it’s exactly what I was looking for and more. The quality is top-notch, and it works flawlessly. The user experience is excellent, and the product’s features are both innovative and practical. I’ve been using it consistently since it arrived, and it has not let me down. The packaging was also very secure, ensuring that the product arrived in perfect condition. The company’s attention to customer satisfaction is evident, and I’m very happy with the level of service I’ve received. This is a purchase I’m very happy with!',
        },
        {
            username: 'Eko',
            picture: `https://randomuser.me/api/portraits/women/`,
            stars: 5,
            review: 'This product is simply amazing! I’ve tried many similar products before, but none of them come close to this one. The performance is outstanding, and it works exactly as described. The quality of the materials used is excellent, and it feels very durable. I appreciate the attention to detail in the design – it’s clear that a lot of thought went into making this product. The customer support has been very helpful and responsive as well. I’m very satisfied with this purchase and would highly recommend it to others.',
        },
        {
            username: 'Fajar',
            picture: `https://randomuser.me/api/portraits/women/`,
            stars: 5,
            review: 'This product has truly changed my life for the better. It’s extremely reliable and easy to use, which is exactly what I needed. The build quality is fantastic, and it performs its function flawlessly. I’ve been using it daily for several weeks now, and it has not disappointed me once. The design is both stylish and functional, which is a rare combination. I’m very impressed with the level of customer service I received as well. Overall, this has been a great investment, and I couldn’t be happier with my purchase.',
        },
        {
            username: 'Gita',
            picture: `https://randomuser.me/api/portraits/women/`,
            stars: 5,
            review: 'I’m so glad I decided to buy this product. It has exceeded all of my expectations and more. The quality is outstanding, and it works perfectly every time. The design is beautiful, and it looks great in my home. The instructions were very clear, and I had no trouble setting it up. The customer service has been excellent, answering all of my questions promptly and professionally. I’ve already recommended this product to several friends and family members, and they’ve all been equally impressed. This is definitely a product worth buying!',
        },
        {
            username: 'Hendra',
            picture: `https://randomuser.me/api/portraits/women/`,
            stars: 5,
            review: 'This product is incredible! It has surpassed all of my expectations and then some. The quality of the materials is superb, and it performs its function flawlessly. The design is very elegant, and it fits perfectly with my home décor. The setup was very easy, and the instructions were clear and concise. I’m very pleased with the customer service as well – they’ve been very helpful and responsive. This is a product that I will be using for a long time, and I highly recommend it to anyone looking for quality and reliability.',
        },
        {
            username: 'Intan',
            picture: `https://randomuser.me/api/portraits/women/`,
            stars: 5,
            review: 'This product has made a huge difference in my daily routine. It’s extremely reliable and performs its function perfectly. The quality of the materials is excellent, and it feels very sturdy. I appreciate the thoughtful design – it’s both functional and aesthetically pleasing. The setup was very straightforward, and I had no trouble getting it up and running. The customer service has been very responsive and helpful as well. Overall, I’m very satisfied with this purchase and would highly recommend it to others.',
        },
        {
            username: 'Joko',
            picture: `https://randomuser.me/api/portraits/women/`,
            stars: 5,
            review: 'I couldn’t be happier with this product. It has exceeded all of my expectations in terms of quality and performance. The materials used are of the highest quality, and it works flawlessly. The design is very sleek and modern, making it a great addition to my home. The setup was very easy, and the instructions were clear and easy to follow. The customer service has been excellent as well – they’ve been very helpful and responsive to all of my questions. This is definitely a product that I would recommend to anyone looking for quality and reliability.',
        },
    ];

    return (
        <>
            <div className="grid grid-cols-2">
                <RatingStars avg_stars={4.5} reviews={[1, 10, 0, 12, 230]} />
                <div className="divide-y">
                    {reviews.map((review, index) => (
                        <ProductReview
                            key={index}
                            username={review.username}
                            picture={`${review.picture}${index}.jpg`}
                            stars={review.stars}
                            review={review.review}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
