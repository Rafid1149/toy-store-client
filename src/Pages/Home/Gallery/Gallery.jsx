

const Gallery = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold my-5 text-center text-purple-800">Explore Our Toys</h2>
            <div data-aos="fade-up" className="grid gap-5 lg:grid-cols-3 my-10">
            <div><img className="h-96 w-96 rounded-lg " src="https://i.ibb.co/fDccB3Y/g1.jpg" alt="" /></div>
            <div><img className="h-96 w-96 rounded-lg" src="https://i.ibb.co/mSDgSD6/g2.jpg" alt="" /></div>
            <div><img className="h-96 w-96 rounded-lg" src="https://i.ibb.co/v48D4NL/g3.jpg" alt="" /></div>
            <div><img className="h-96 w-96 rounded-lg" src="https://i.ibb.co/c2ssXB0/g4.jpg" alt="" /></div>
            <div><img className="h-96 w-96 rounded-lg" src="https://i.ibb.co/TWWQncb/g5.jpg" alt="" /></div>
            <div><img className="h-96 w-96 rounded-lg" src="https://i.ibb.co/7Jbdbwz/g6.jpg" alt="" /></div>
        </div>
        </div>
    );
};

export default Gallery;