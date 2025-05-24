import toast from "react-hot-toast";

// Get item to the local storage
const getItem = ()=>{
    const all = localStorage.getItem('cartItem')
    if(all){
        const perseAll = JSON.parse(all)
        return perseAll;
    } else {
        return [];
    }
}

// Add Item to the local storage
const addItem = (item) =>{
    const cartItems = getItem();
    const isExits = cartItems.find(i => i.product_id === item.product_id)
    if(isExits) {
        return toast.error('Allready Added!');
    }
    cartItems.push(item)
    localStorage.setItem('cartItem', JSON.stringify(cartItems))
    toast.success('Successfully Added Product');
}

// Remove item to the local storage
const removeItem = id => {
    // console.log(id)
    const cartItems = getItem();
    const remain = cartItems.filter(item => item.product_id != id.product_id)
    localStorage.setItem('cartItem', JSON.stringify(remain))
    toast.success('Successfully Removed');
}

export {addItem, getItem, removeItem}