const NameCard = ({data, handleClick}) => {
    return ( 
        <div  className={`${data.sex} card`} onClick={() => handleClick(data)} >
        <h1>{data.name}</h1>
        </div>

     );
}
 
export default NameCard;