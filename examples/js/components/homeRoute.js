
import React from 'react'

export default class HomeRoute extends React.Component {

  render () {
    return (
      <div>
        <iframe
          src='https://ghbtns.com/github-btn.html?user=hbm&repo=md-components&type=star&count=true&size=large'
          frameBorder='0'
          scrolling='0'
          width='160px'
          height='30px'
        />
        <iframe
          src='https://ghbtns.com/github-btn.html?user=hbm&repo=md-components&type=watch&count=true&size=large&v=2'
          frameBorder='0'
          scrolling='0'
          width='160px'
          height='30px'
        />
        <iframe
          src='https://ghbtns.com/github-btn.html?user=hbm&repo=md-components&type=fork&count=true&size=large'
          frameBorder='0'
          scrolling='0'
          width='158px'
          height='30px'
        />
      </div>
    )
  }

}
