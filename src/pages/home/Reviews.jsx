import React from 'react';

const Testimonials = () => {
    return (
        <div className="py-5">
            <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
                <div className="text-sm font-bold tracking-wider text-[#cc3333] uppercase">Testimonials</div>
                <h2 className=" mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-6xl">
                    Here's what our customers said
                </h2>
                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-800 lg:text-xl xl:text-xl">
                    Our Customers believe in us, and Choose us for their business. We are proud to have them as our customers.
                </p>
            </div>
            <div className="container p-6 mx-auto mb-10 font-Monts xl:px-0">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="lg:col-span-2">
                        <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-[#cc3333] md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                            <p className="md:text-lg leading-normal text-white">
                                As a new carrier, partnering with <mark className="mx-1 px-2 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-black dark:bg-black text-white">PGL</mark> Dispatch was the best decision we made. We were facing rejections from almost every single broker due to us being a new MC. They guided us through every step, and their expertise in dealing with new carriers is evident. They were able to start getting us loads and generating great revenue despite being a new MC. Their service is efficient and reliable. They understand their clients and provide them with loads according to the client's preferences. Highly recommended for anyone in the trucking industry, especially for new trucking companies!                            </p>
                            <div className="mt-5">
                                <div>
                                    <div className="text-xl font-semibold text-center text-black">M4 LOGISTICS INC</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 xl:col-auto">
                        <div className="flex flex-col justify-between w-full h-full px-6 py-6  bg-[#cc3333] md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                            <p className="md:text-lg leading-normal text-white">
                                We have been working with <mark className="mx-1 px-2 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-black dark:bg-black text-white">PGL</mark> for almost a year now, since we started the company. They have taken the stress out of managing our loads. Their comprehensive service, from finding loads at the best rates to handling paperwork, allows us to focus on driving and growing our business while they take care of the rest. Their team is always available and responsive. We couldn't be happier.  </p>
                            <div className="mt-5">
                                <div>
                                    <div className="text-xl font-semibold text-center text-black">JET FF LLC</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 xl:col-auto">
                        <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-[#cc3333] md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                            <p className="md:text-lg leading-normal text-white">
                                We’ve been working with <mark className="mx-1 px-2 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-black dark:bg-black text-white">PGL Dispatch</mark> for almost six months now, starting just a few weeks after we launched our trucking company. As a new company running a step-deck, we needed reliable support, and <mark className="mx-1 px-2 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-black dark:bg-black text-white">PGL Dispatch</mark> has been amazing. They handle everything for us, from finding loads to dealing with paperwork, and they always get us great rates. Thanks to them, we've been able to grow our business and make good money. Highly recommended! </p>
                            <div className="mt-5">
                                <div>
                                    <div className="text-xl font-semibold text-center text-black">FOLEY TRUCKING LLC</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-[#cc3333] md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                            <p className="md:text-lg leading-normal text-white">
                                We were completely new to the trucking business and struggling to get any loads. With a new driver and no experience, we needed a lot of guidance. <mark className="mx-1 px-2 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-black dark:bg-black text-white">PGL Dispatch</mark> stepped in and helped us with everything. They found us loads, gave us advice on what to do and where to go, and managed all aspects of our operations. Just saying they are a dispatching company isn't enough – they truly handle everything. Thanks to their support, we've been able to get our business up and running smoothly. Highly recommend them!     </p>
                            <div className="mt-5">
                                <div>
                                    <div className="text-xl font-semibold text-center text-black">CARGILL TRUCKING LLC</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
