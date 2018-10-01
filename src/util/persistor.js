class Persistor {
    static getRecalls(){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            return JSON.parse(recalls);
        } else {
            return false;
        }
    }

    static getCampaigns(){
        let campaigns = localStorage.getItem('campaigns');
        if(campaigns){
            return JSON.parse(campaigns);
        } else {
            return false;
        }
    }

    static getRecallById(id){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            let parsedRecalls = JSON.parse(recalls);
            return parsedRecalls.data.filter(e => {
                if(e.id == id){
                    return true
                }
            })
        } else {
            return false;
        }
    }

    static getCampaignById(id){
        let campaigns = localStorage.getItem('campaigns');
        if(campaigns){
            let parsedCampaigns = JSON.parse(campaigns);
            return parsedCampaigns.data.filter(e => {
                if(e.id == id){
                    return true
                }
            })
        } else {
            return false;
        }
    }

    static getVehicleRecallById(id){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            let parsedRecalls = JSON.parse(recalls);
            parsedRecalls.data.map(e => {
                e.recall.map(i => {
                    if(i.id == id){
                        parsedRecalls = i;
                    }
                })
            })
            return parsedRecalls
        } else {
            return false;
        }
    }

    static generateId(){
        let id = localStorage.getItem('recall_id');
        if(id){
            id = parseInt(id) + 1;
            localStorage.setItem('recall_id', id);
            return id;
        } else {
            localStorage.setItem('recall_id', 1);
            return 1000;
        }
    }

    static addRecall(recallItem){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            let parsedRecalls = JSON.parse(recalls);
            parsedRecalls.data.push(recallItem);
            localStorage.setItem('recalls', JSON.stringify(parsedRecalls));
        } else {
            localStorage.setItem('recalls', JSON.stringify({data: [recallItem]}));
        }
    }

    static updateRecall(id, recallItem){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            let parsedRecalls = JSON.parse(recalls);
            parsedRecalls.data.forEach(e => {
                if(e.id == id){
                    e.meta = recallItem.meta;
                }
            });
            localStorage.setItem('recalls', JSON.stringify(parsedRecalls));
        } else {
            return false;
        }
    }

    static removeRecall(id){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            let parsedRecalls = JSON.parse(recalls);
            let newRecalls = parsedRecalls.data.filter(e => {
                if(e.id != id){
                    return true;
                }
            });

            localStorage.setItem('recalls', JSON.stringify({data: newRecalls}));
        } else {
            return false;
        }
    }

    static addCampaign(campaignItem){
        let campaigns = localStorage.getItem('campaigns');
        if(campaigns){
            let parsedCampaigns = JSON.parse(campaigns);
            parsedCampaigns.data.push(campaignItem);
            localStorage.setItem('campaigns', JSON.stringify(parsedCampaigns));
        } else {
            localStorage.setItem('campaigns', JSON.stringify({data: [campaignItem]}));
        }
    }

    static updateCampaign(id, recallItem){
        let campaigns = localStorage.getItem('campaigns');
        if(campaigns){
            let parsedCampaigns = JSON.parse(campaigns);
            parsedCampaigns.data.forEach(e => {
                if(e.id == id){
                    e.meta = recallItem.meta;
                }
            });
            localStorage.setItem('campaigns', JSON.stringify(parsedCampaigns));
        } else {
            return false;
        }
    }

    static addNote(id, noteItem){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            let parsedRecalls = JSON.parse(recalls);
            parsedRecalls.data.forEach(e => {
                console.log(e);
                if(e.id == id){
                    e.notes.push(noteItem);
                }
            });

            localStorage.setItem('recalls', JSON.stringify(parsedRecalls));
        } else {
            return false;
        }
    }

    static addCommunication(id, communicationItem){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            let parsedRecalls = JSON.parse(recalls);
            parsedRecalls.data.forEach(e => {
                if(e.id == id){
                    e.communications.push(communicationItem);
                }
            });

            localStorage.setItem('recalls', JSON.stringify(parsedRecalls));
        } else {
            return false;
        }
    }

    static linkRecalls(vins, recallItem){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            let parsedRecalls = JSON.parse(recalls);
            parsedRecalls.data.forEach(e => {
                vins.map(v => {
                    if(e.meta.vehicle.vin == v){
                        e.recall.push(recallItem)
                        e.meta.vehicle.recallCount++;
                    }
                })
            });
            localStorage.setItem('recalls', JSON.stringify(parsedRecalls));
        } else {
            return false;
        }
    }

    static updateLinkRecalls(id, recallItem){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            let parsedRecalls = JSON.parse(recalls);
            parsedRecalls.data.forEach(e => {
                e.recall.forEach(i => {
                    if(i.id == id){
                        let rectifiedStatus = i.meta.rectified;
                        let rectifiedDateStatus = i.meta.rectifiedDate;

                        i.meta = recallItem.meta;
                        i.meta.rectifed = rectifiedStatus;
                        i.meta.rectifiedDate = rectifiedDateStatus;
                    }
                })
            });
            localStorage.setItem('recalls', JSON.stringify(parsedRecalls));
        } else {
            return false;
        }
    }

    static updateVehicleRecall(id, recallItem){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            let parsedRecalls = JSON.parse(recalls);
            parsedRecalls.data.forEach(e => {
                e.recall.forEach(i => {
                    if(i.id == id){
                        i.meta = recallItem.meta;
                    }
                    if(i.meta.rectified == "No"){
                        i.meta.rectifiedDate = "N/A"
                    }
                })
            });
            localStorage.setItem('recalls', JSON.stringify(parsedRecalls));
        } else {
            return false;
        }
    }

    static getRecallCount(){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            return JSON.parse(recalls).data.length;
        } else {
            return 0;
        }
    }

    static checkActiveRecalls(){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            let parsedRecalls = JSON.parse(recalls);
            parsedRecalls.data.forEach(e => {
                e.recall.forEach(i =>{
                    if(i.meta.active == 'Yes'){
                        e.sortActive = 'Yes';
                    }
                    else{
                        e.sortActive = 'No';
                    }
                })
            });
            localStorage.setItem('recalls', JSON.stringify(parsedRecalls));
        } else {
            return false;
        }
    }
}

export default Persistor;