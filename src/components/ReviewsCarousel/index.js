// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeftArrow = () => {
    const {index} = this.state
    if (index <= 0) {
      return
    }
    this.setState(prevState => ({index: prevState.index - 1}))
  }

  onRightArrow = () => {
    const {index} = this.state
    if (index >= 3) {
      return
    }
    this.setState(prevState => ({index: prevState.index + 1}))
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="app-container">
        <h1 className="review-title">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="button"
            onClick={this.onLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-details-container">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            type="button"
            data-testid="rightArrow"
            className="button"
            onClick={this.onRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
