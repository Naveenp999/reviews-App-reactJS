import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {index: 0}

  makeforwardchanges = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    const len = reviewsList.length
    return index + 1 < len
      ? this.setState({index: index + 1})
      : this.setState({index: len - 1})
  }

  makeleftsidechanges = () => {
    const {index} = this.state
    return index - 1 >= 0
      ? this.setState({index: index - 1})
      : this.setState({index: 0})
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const element = reviewsList[index]
    const {imgUrl, username, companyName, description} = element
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="profile-icon" />
          <div className="slide-container">
            <button
              className="button"
              type="button"
              onClick={this.makeleftsidechanges}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
              />
            </button>
            <p className="name">{username}</p>
            <button
              className="button"
              type="button"
              onClick={this.makeforwardchanges}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>
          <p className="companyname">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
