import React, { useRef, useEffect } from "react";
import BlogCard from "../ui/Cards/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Gift, Percent, ShoppingBag, WalletMinimal } from "lucide-react";
import blogData from "../../assets/Data/Blogs.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
    const headingRef = useRef();
    const blogRef = useRef();
    const featureRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            });

            // Animate blog cards
            gsap.from(blogRef.current.querySelectorAll(".swiper-slide"), {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: blogRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });

            // Animate feature items
            gsap.from(featureRef.current.querySelectorAll(".item"), {
                y: 50,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: featureRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-light-yellow">
            <div className="container pt-[8%] mx-auto px-4">
                {/* Heading */}
                <div ref={headingRef} className="text-center w-full mb-16">
                    <span className="title-span">Our Blog</span>
                    <h2 className="heading-1 mb-5">
                        Latest <span className="text-coffee"> news </span>
                    </h2>
                </div>

                {/* Blog Swiper */}
                <div ref={blogRef}>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mb-40"
                    >
                        {blogData.map((blog) => (
                            <SwiperSlide key={blog.id}>
                                <BlogCard
                                    id={blog.id}
                                    image={blog.image}
                                    title={blog.title}
                                    date={blog.date}
                                    category={blog.category}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Features Row */}
                <div className="border-t border-[#DDDAC9]">
                    <div
                        ref={featureRef}
                        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-14 py-16"
                    >
                        <div className="item centered-row gap-3 lg:px-8">
                            <Gift size={50} />
                            <div className="content">
                                <h4 className="text-lg font-semibold text-heading">
                                    Reward program
                                </h4>
                                <span className="text-gray-500">Lorem ipsum</span>
                            </div>
                        </div>

                        <div className="item centered-row gap-3 lg:px-8">
                            <Percent size={50} />
                            <div className="content">
                                <h4 className="text-lg font-semibold text-heading">
                                    Special discounts
                                </h4>
                                <span className="text-gray-500">Lorem ipsum</span>
                            </div>
                        </div>

                        <div className="item centered-row gap-3 lg:px-8">
                            <ShoppingBag size={50} />
                            <div className="content">
                                <h4 className="text-lg font-semibold text-heading">
                                    Fast shipping
                                </h4>
                                <span className="text-gray-500">Lorem ipsum</span>
                            </div>
                        </div>

                        <div className="item centered-row gap-3 lg:px-8">
                            <WalletMinimal size={50} />
                            <div className="content">
                                <h4 className="text-lg font-semibold text-heading">
                                    Great prices
                                </h4>
                                <span className="text-gray-500">Lorem ipsum</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;