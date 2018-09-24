class Persistor {
    static getRecalls(){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            return JSON.parse(recalls);
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

    static getRecallCount(){
        let recalls = localStorage.getItem('recalls');
        if(recalls){
            return JSON.parse(recalls).data.length;
        } else {
            return 0;
        }
    }
}

export default Persistor;