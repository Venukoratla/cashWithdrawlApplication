// Write your code here
const DenominationItem = props => {
  const {card, onAdd} = props
  const {id, value} = card
  const decreaseMoney = () => {
    onAdd(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={decreaseMoney}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
