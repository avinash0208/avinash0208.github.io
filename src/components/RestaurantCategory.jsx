import ItemList from './ItemList';
const RestaurantCategory = ({ data, showItems, handleShowIndex }) => {
    
    return (
        <div>
            {/* Header */}
            <div className="w-1/2 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className='flex justify-between cursor-pointer' onClick={handleShowIndex}>
                    <span className="font-bold text-sm">{data.title}  ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {/* Accordion Body */}
                {showItems && <ItemList items={data.itemCards}></ItemList>}
            </div>
        </div>
    )
}

export default RestaurantCategory;