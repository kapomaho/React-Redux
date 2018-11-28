import React from 'react'

class NewsItem extends React.Component{
    
    render()
    {
      //  console.log(this.props);
      const {title,description}=this.props;
      return(

            <div>
            <h1>{description}</h1>
            <p>{title}</p>
            </div>
        )
    }
}

export default NewsItem