function Hero(props) {
    return (
        <div className="p-0 bg-darken" >
            <div className="p-5 text-center" id="HeroImg">
                <div className="container">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 text-white">
                        <div className="col-10 col-sm-8 col-lg-6">
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h1>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum, aliquam
                                perspiciatis, animi cupiditate illo architecto soluta, magnam culpa mollitia fuga non
                                reprehenderit ullam pariatu? Quidem, itaque!</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export {Hero}