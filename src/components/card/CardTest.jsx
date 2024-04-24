export default () => (

<div className="row-wrap px-4 max-w-4xl mx-auto">
    <div className="flex flex-wrap -mx-2">
        <div className="column flex w-full p-2 sm:w-1/2  overflow-hidden">
            <div className="card w-full border overflow-hidden shadow rounded-xl">
                <div className="relative bg-gray-700 h-32 w-full sm:h-auto" style={{paddingBottom: '40%' }}>
                    <img className="card__img top-0 h-full w-full object-cover absolute"  src="//source.unsplash.com/500x301/?nature" />
                </div>
                <div className="p-4">
                    {/* <div className=" text-xs font-bold tracking-wide uppercase">Nature</div> */}
                    <h3 className="my-1">Card Title</h3>
                    <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt.</p>
                </div>
            </div>
        </div>

        <div className="column flex w-full p-2 sm:w-1/2 overflow-hidden">
            <div className="card w-full border overflow-hidden shadow rounded-xl">
                <div className="relative bg-gray-700 h-32 w-full sm:h-auto" style={{paddingBottom: '40%' }}>
                    <img className="card__img top-0 h-full w-full object-cover absolute"  src="//source.unsplash.com/500x301/?nature" />
                </div>
                <div className="p-4">
                    <div className=" text-sm tracking-wide uppercase">Step-by-step guide</div>
                    <h3 className="my-1">Title</h3>
                    <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt.</p>
                </div>
            </div>
        </div>

        <div className="column flex w-full p-2 sm:w-1/2  overflow-hidden">
            <div className="card w-full border overflow-hidden shadow rounded-xl">
                <div className="relative bg-gray-700 h-32 w-full sm:h-auto" style={{paddingBottom: '40%' }}>
                    <img className="card__img top-0 h-full w-full object-cover absolute"  src="//source.unsplash.com/500x301/?nature" />
                </div>
                <div className="p-4">
                    <div className="text-sm tracking-wide uppercase">Customer case</div>
                    <h3 className="my-1">EQUINOR - Norway's largest energy company.</h3>
                    <p className="">How Equinor is...</p>
                </div>
            </div>
        </div>

    </div>
</div>
)