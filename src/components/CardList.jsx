import NFTCard from './NFTCard'

function CardList() {
  return (
    <div className="card-list">
      <NFTCard
        image="./nft-image.jpg"
        name="Equilibrium #3429"
        description="Our Equilibrium collection promotes balance and calm."
        price="0.041 ETH"
        time="3 days left"
      />

      <NFTCard
        image="./nft-image2.jpg"
        name="Crystal #128"
        description="A digital crystal from a futuristic collection."
        price="0.065 ETH"
        time="5 days left"
      />

      <NFTCard
        image="./nft-image3.jpg"
        name="Cyber #721"
        description="A unique digital artwork from the cyber collection."
        price="0.089 ETH"
        time="2 days left"
      />
    </div>
  )
}

export default CardList