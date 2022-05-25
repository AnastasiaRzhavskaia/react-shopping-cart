import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h3>What kind of food do you like?</h3>
            <hr />
            {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].
            map(category => <Filter category={category}/>
            )}
        </div>
    )
}

export default AllCategories;