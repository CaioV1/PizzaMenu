import Pizza from "../../models/Pizza"

interface PizzaCardProps {
  pizzaData: Pizza;
}

const PizzaCard: React.FC<PizzaCardProps> = ({pizzaData}) => (
  <li className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}>
    <img src={pizzaData.photoName} alt={pizzaData.name} />
    <div>
      <h3>{pizzaData.name}</h3>
      <p>{pizzaData.ingredients}</p>
      <span>{pizzaData.soldOut ? "ESGOTADO" : pizzaData.price}</span>
    </div>
  </li>
)

export default PizzaCard;