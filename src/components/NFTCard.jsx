function NFTCard({ image, name, description, price, time }) {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="card">
        <img src={image} alt={name} />

        <h2>{name}</h2>

        <p>{description}</p>

        <div>
          <span>{price}</span>
          <span>{time}</span>
        </div>

        <hr />

        <p>Creation of Jules Wyvern</p>
      </div>
    </div>
  )
}

export default NFTCard