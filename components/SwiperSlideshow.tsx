'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

interface SwiperSlideshowProps {
    images: {
        title: string;
        url: string;
        width: number;
        height: number;
    }[];
}

const SwiperSlideshow: React.FC<SwiperSlideshowProps> = ({ images }) => {
    return (
        <Swiper
            effect={'cards'}
            modules={[Autoplay, Pagination, EffectCards]}
            spaceBetween={50}
            centeredSlides
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="w-full h-full"
            grabCursor={true}
        >
            {images.map(({ title, url, width, height }, index) => (
                <SwiperSlide key={index} style={{ width: '100%', height: '100%' , objectFit: 'fill'}}>
                    <Image
                        src={url}
                        alt={`${title} `}
                        width={width}
                        height={height}
                        className="size-full object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperSlideshow;
