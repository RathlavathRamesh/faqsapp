// Write your code here.
import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

const clicks = [
  {
    num: 0,
    clicked: false,
  },
  {
    num: 1,
    clicked: false,
  },
  {
    num: 2,
    clicked: false,
  },
  {
    num: 3,
    clicked: false,
  },
]

class Faqs extends Component {
  state = {clicList: clicks}

  showanswer = id => {
    const {clicList} = this.state
    const items = clicList.filter(each => each.num === id)
    const rem = clicList.filter(each => each.num !== id)
    console.log(rem, items[0])
    const item = items[0]

    this.setState({
      clicList: [
        ...rem,
        {
          num: item.num,
          clicked: !item.clicked,
        },
      ],
    })
  }

  render() {
    const {faqsList} = this.props
    const {clicList} = this.state
    return (
      <div className="bgCont">
        <div className="faqcards">
          <h1 className="heading">FAQs</h1>
          <ul className="items">
            {faqsList.map(each => (
              <FaqItem
                item={each}
                key={each.id}
                fun={this.showanswer}
                clicList={clicList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
