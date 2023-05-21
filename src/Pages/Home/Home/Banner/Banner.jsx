

const Banner = () => {
    return (
        <div className="my-10">
            <div className="carousel w-full h-[600px] mb-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src='https://i.ibb.co/2t5n9w2/R.jpg' className="w-full rounded-xl" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
                    <a href="#slide4" className="btn  btn-secondary btn-circle">❮</a>
                    <a href="#slide2" className="btn  btn-secondary btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center h-full rounded-xl top-0 gap-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 , 0)]">
                    <div className='text-white font-bold space-y-4 w-1/2 pl-12'>
                        <h2 className='text-6xl'>No matter what Toy you want, <br />
you can find every kind of toy here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, <br /> iure accusantium! Sequi incidunt, voluptas asperiores ab quaerat non magni quisquam?</p>
                        <div className='flex gap-5'>
                            <button className="btn btn-primary gap-2">Discover More</button>
                            <button className="btn btn-secondary gap-2">Buy Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src='https://i.ibb.co/y0n4P7m/f3.jpg' className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
                    <a href="#slide1" className="btn  btn-secondary btn-circle">❮</a>
                    <a href="#slide3" className="btn  btn-secondary btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center h-full rounded-xl top-0 gap-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 , 0)]">
                    <div className='text-white font-bold space-y-4 w-1/2 pl-12'>
                        <h2 className='text-6xl'>No matter what Toy you want, <br />
you can find every kind of toy here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, <br /> iure accusantium! Sequi incidunt, voluptas asperiores ab quaerat non magni quisquam?</p>
                        <div className='flex gap-5'>
                            <button className="btn btn-primary gap-2">Discover More</button>
                            <button className="btn btn-secondary gap-2">Buy Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src='https://i.ibb.co/PjVYfjB/f2.jpg' className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
                    <a href="#slide2" className="btn  btn-secondary btn-circle">❮</a>
                    <a href="#slide4" className="btn  btn-secondary btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center h-full rounded-xl top-0 gap-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 , 0)]">
                    <div className='text-white font-bold space-y-4 w-1/2 pl-12'>
                        <h2 className='text-6xl'>No matter what Toy you want, <br />
you can find every kind of toy here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, <br /> iure accusantium! Sequi incidunt, voluptas asperiores ab quaerat non magni quisquam?</p>
                        <div className='flex gap-5'>
                            <button className="btn btn-primary gap-2">Discover More</button>
                            <button className="btn btn-secondary gap-2">Buy Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src='https://i.ibb.co/92c9wSR/p1.jpg' className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-5 bottom-0">
                    <a href="#slide3" className="btn  btn-secondary btn-circle">❮</a>
                    <a href="#slide1" className="btn  btn-secondary btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center h-full rounded-xl top-0 gap-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21 , 0)]">
                    <div className='text-white font-bold space-y-4 w-1/2 pl-12'>
                        <h2 className='text-6xl'>No matter what Toy you want, <br />
you can find every kind of toy here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, <br /> iure accusantium! Sequi incidunt, voluptas asperiores ab quaerat non magni quisquam?</p>
                        <div className='flex gap-5'>
                            <button className="btn btn-primary gap-2">Discover More</button>
                            <button className="btn btn-secondary gap-2">Buy Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;