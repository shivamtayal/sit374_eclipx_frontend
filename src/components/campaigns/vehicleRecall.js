import React, { Component } from 'react';
import Persistor from "../../util/persistor";

class vehicleRecall extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.match.params.id,
            recallItem: Persistor.getRecallById(props.match.params.id),
        }
    }

    componentDidMount(){

    }

    getVehicleRecalls(){
        
    }
}

export default vehicleRecall