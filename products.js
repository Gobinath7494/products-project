async function submitdetails(event){ 
    event.preventDefault() 
    const sellingPrice = event.target.sellingPrice.value 
    const productName = event.target.productName.value 
    const category = event.target.category.value 
 
    const obj = { 
        sellingPrice, 
        productName, 
        category
    }
    axios.post(
          "https://crudcrud.com/api/dcce142092004fae8dc219b2809f998f/products",obj)
          .then((response)=> {
            showuseronscreen(response.data)
            console.log(response)
          })
        .catch ((err)=> {
        console.log(err);
      })
 
    // localStorage.setItem(obj.category,JSON.stringify(obj)) 
    // showuseronscreen (obj)     
} 

window.addEventListener("DOMContentLoaded", () => {
  axios.get("https://crudcrud.com/api/dcce142092004fae8dc219b2809f998f/products")
        .then((response) => {
          console.log(response)
          for (var i=0;i<response.data.length;i++){
            showuseronscreen(response.data[i])
          }
        })
        .catch((error) => {
          console.log(error)
        })
}
)

 
async function showuseronscreen (obj){
    if (obj.category === "Electronic Item" ){
    const parentelem = document.getElementById("electronicItems") 
    const childelem = document.createElement("li") 
    childelem.textContent = obj.sellingPrice + ' - ' + obj.productName+' - ' + obj.category 
    const deletebutton = document.createElement("input") 
    deletebutton.type = "button" 
    deletebutton.value = "Delete Input" 

    deletebutton.onclick = async () => {
      axios.delete(`https://crudcrud.com/api/dcce142092004fae8dc219b2809f998f/products/${obj._id}`)
          .then((response)=>
                parentelem.removeChild(childelem)
                )
          .catch((error) => {
                  console.log(error)
                })
              } 
    // deletebutton.onclick = () => { 
    //     localStorage.removeItem(obj.category) 
    //     parentelem.removeChild(childelem) 
    // } 
    childelem.appendChild(deletebutton) 
    parentelem.appendChild(childelem)
    } else if (obj.category === "Food Item" ){
        const parentelem = document.getElementById("foodItems") 
        const childelem = document.createElement("li") 
        childelem.textContent = obj.sellingPrice + ' - ' + obj.productName+' - ' + obj.category 
        const deletebutton = document.createElement("input") 
        deletebutton.type = "button" 
        deletebutton.value = "Delete Input" 

        deletebutton.onclick = async () => {
          axios.delete(`https://crudcrud.com/api/dcce142092004fae8dc219b2809f998f/products/${obj._id}`)
              .then((response)=>
                    parentelem.removeChild(childelem)
                    )
              .catch((error) => {
                      console.log(error)
                    })
                  } 
 
        // deletebutton.onclick = () => { 
        //     localStorage.removeItem(obj.category) 
        //     parentelem.removeChild(childelem) 
    // } 
    childelem.appendChild(deletebutton) 
    parentelem.appendChild(childelem)
    } else if (obj.category === "Skincare Item" ){
        const parentelem = document.getElementById("skincareItems") 
        const childelem = document.createElement("li") 
        childelem.textContent = obj.sellingPrice + ' - ' + obj.productName+' - ' + obj.category 
        const deletebutton = document.createElement("input") 
        deletebutton.type = "button" 
        deletebutton.value = "Delete Input" 

        deletebutton.onclick = async () => {
          axios.delete(`https://crudcrud.com/api/dcce142092004fae8dc219b2809f998f/products/${obj._id}`)
              .then((response)=>
                    parentelem.removeChild(childelem)
                    )
              .catch((error) => {
                      console.log(error)
                    })
                  } 
 
    //     deletebutton.onclick = () => { 
    //         localStorage.removeItem(obj.category) 
    //         parentelem.removeChild(childelem) 
    // } 
    childelem.appendChild(deletebutton) 
    parentelem.appendChild(childelem)
    }
  }