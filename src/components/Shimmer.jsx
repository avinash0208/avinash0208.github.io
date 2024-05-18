const Shimmer = () => {
    return (
        <div className="shimmer-container flex flex-wrap my-4">
           {
            [...Array(20)].map((e, i) =>  <div key={i} className="shimmer-card w-52 h-72 bg-slate-200 m-1 rounded-lg"></div>)
           } 
        </div>
    )
}

export default Shimmer;