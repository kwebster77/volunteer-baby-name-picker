const NameCard = ({data}) => {
    return ( 
        <div  className={`${data.sex} card`} >
        <h1>{data.name}</h1>
        </div>

     );
}
 
export default NameCard;