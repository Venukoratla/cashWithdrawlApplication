// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {money: 2000}

  addmoney = value => {
    this.setState(prevState => ({money: prevState.money - value}))
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props

    return (
      <div>
        <div>
          <div>
            <h1>S</h1>
            <p>Sarah Williams</p>
          </div>
          <div>
            <p>Your Balance</p>
            <div>
              <p>{money}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div>
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul>
            {denominationsList.map(eachItem => (
              <DenominationItem
                card={eachItem}
                key={eachItem.id}
                onAdd={this.addmoney}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
