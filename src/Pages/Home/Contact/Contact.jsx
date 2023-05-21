
const Contact = () => {
    return (
        <div>
            <div className="text-center my-12">
                <h2 className="font-bold text-5xl my-5">Contact US Now</h2>
                <p className="font-medium">Tell us your personal opinion</p>
            </div>
            <div className="text-center mx-auto">
                <div className="form-control my-5 w-full block">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="text" placeholder="search your toys" className="input input-bordered w-inherit" />
                </div>
                <div className="form-control my-5 w-full block">
                    <label className="label">
                        <span className="label-text font-semibold">Phone</span>
                    </label>
                    <input type="phone" placeholder="XXXXXXXXXXX" className="input input-bordered w-inherit" />
                </div>
                <div className="form-control max-w-7xl my-5 w-full block">
                    <label className="label">
                        <span className="label-text font-semibold">Message</span>
                    </label>
                    <input type="text" placeholder="Feel free to tell us your opinion" className="input  input-bordered w-inherit  " />
                </div>
                <div>
                    <button className="my-5 btn btn-warning btn-blockn">Submit</button>
                </div>
               
            </div>
        </div>
    );
};

export default Contact;