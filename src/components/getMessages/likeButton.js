import React from 'react';
import DataService from "../../dataService";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.client = new DataService();
        this.state = {
            like: 0
        }
    }
    

    handleLike = e => {
        e.preventDefault();
        this.props.like(this.state);
    };

    render() {
        return(
        console.log('5')
        )
    }
}
export default LikeButton