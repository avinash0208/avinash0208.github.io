import  React  from "react";
const ShimmerMenu = () => {
    return (
        <React.Fragment>
            <div className="w-1/2 h-4 my-4 bg-slate-200 m-1 rounded-lg"></div>
            <div className="shimmer-menu flex flex-wrap my-4">
                {
                    [...Array(20)].map((e, i) => <div key={i} className="shimmer-card w-full h-2 bg-slate-200 m-1 rounded-lg"></div>)
                }
            </div>
        </React.Fragment>
    )
}

export default ShimmerMenu;