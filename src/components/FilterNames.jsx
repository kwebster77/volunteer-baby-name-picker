
const FilterNames = ({handleClick}) => {
    return (
        <div>
            <button onClick={() => handleClick("all")}> 👶 </button>
            <button onClick={() => handleClick("m")}> 👦</button>
            <button onClick={() => handleClick("f")}>👧 </button>
        </div>
      );
}
 
export default FilterNames;