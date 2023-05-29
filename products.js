function submitdetails(event){ 
    event.preventDefault() 
    const sellingPrice = event.target.sellingPrice.value 
    const productName = event.target.productName.value 
    const category = event.target.category.value 
 
    const obj = { 
        sellingPrice, 
        productName, 
        category 
    }  
 
    localStorage.setItem(obj.category,JSON.stringify(obj)) 
    showuseronscreen (obj) 
 
} 
 
function showuseronscreen (obj){
     


    if (obj.category === "Electronic Item" ){
    const parentelem = document.getElementById("electronicItems") 
    const childelem = document.createElement("li") 
    childelem.textContent = obj.sellingPrice + ' - ' + obj.productName+' - ' + obj.category 
    const deletebutton = document.createElement("input") 
    deletebutton.type = "button" 
    deletebutton.value = "Delete Input" 
 
    deletebutton.onclick = () => { 
        localStorage.removeItem(obj.category) 
        parentelem.removeChild(childelem) 
    } 
    childelem.appendChild(deletebutton) 
    parentelem.appendChild(childelem)
    } else if (obj.category === "Food Item" ){
        const parentelem = document.getElementById("foodItems") 
        const childelem = document.createElement("li") 
        childelem.textContent = obj.sellingPrice + ' - ' + obj.productName+' - ' + obj.category 
        const deletebutton = document.createElement("input") 
        deletebutton.type = "button" 
        deletebutton.value = "Delete Input" 
 
        deletebutton.onclick = () => { 
            localStorage.removeItem(obj.category) 
            parentelem.removeChild(childelem) 
    } 
    childelem.appendChild(deletebutton) 
    parentelem.appendChild(childelem)
    } else if (obj.category === "Skincare Item" ){
        const parentelem = document.getElementById("skincareItems") 
        const childelem = document.createElement("li") 
        childelem.textContent = obj.sellingPrice + ' - ' + obj.productName+' - ' + obj.category 
        const deletebutton = document.createElement("input") 
        deletebutton.type = "button" 
        deletebutton.value = "Delete Input" 
 
        deletebutton.onclick = () => { 
            localStorage.removeItem(obj.category) 
            parentelem.removeChild(childelem) 
    } 
    childelem.appendChild(deletebutton) 
    parentelem.appendChild(childelem)
    }
 
    
    
}