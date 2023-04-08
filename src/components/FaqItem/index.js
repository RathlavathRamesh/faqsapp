// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  render() {
    const {item, fun, clicList} = this.props
    const {id} = item
    const citem = clicList.filter(each => each.num === id)
    const {clicked} = citem[0]
    const change = () => {
      fun(id)
    }
    return (
      <li className="Item">
        <div className="hedimg">
          <h1 className="faqName">{item.questionText}</h1>
          {!clicked && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
              className="imgs"
              onClick={change}
            />
          )}
          {clicked === true && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
              className="imgs"
              onClick={change}
            />
          )}
        </div>
        {clicked === true && (
          <p className="textpara">
            <hr className="line" /> <br />
            {item.answerText}
          </p>
        )}
      </li>
    )
  }
}
export default FaqItem
