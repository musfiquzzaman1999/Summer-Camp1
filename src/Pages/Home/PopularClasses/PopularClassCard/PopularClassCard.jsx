

const PopularClassCard = ({item}) => {
    const {name,description,thumbnail}=item;
    return (
        <div>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={thumbnail} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
   
  </div>
</div>
        </div>
    );
};

export default PopularClassCard;