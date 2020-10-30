function removeOrderItem(orderInfo, position){
    
    if(Array.isArray(orderInfo.items)==false) {
        throw new Error('Items should be an array');
    }


    for(let i =0; i < orderInfo.items.length; i++){
        if(orderInfo.items[i].price == undefined || orderInfo.items[i].quantity == undefined){
            throw new Error('Malformed item');
        }
    }

    if( position < 0 || position > orderInfo.items.length - 1){
        throw new Error('Invalid position');
    }

    let t = orderInfo.items[position].price * orderInfo.items[position].quantity;
    
    orderInfo.total = orderInfo.total - t;

    orderInfo.items.splice(position, 1);
        
    return orderInfo;
}

const app = {
    removeOrderItem
};

module.exports = app;