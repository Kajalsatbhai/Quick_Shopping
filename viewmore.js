const id=localStorage.getItem("id");
async function getProducts() {
    const response=await fetch(`https://dummyjson.com/products/${id}`);
    const product =await response.json();
    display(product);
       
}

function display(product)
{
    let details=document.getElementById("product");
    console.log(product);
    details.innerHTML = `
    <div class="box">
    <div class="leftBox">
    <img src="${product.thumbnail}">
    </div>
    <div class="rightBox">
    <h1>${product.title}</h1>
    <h3><span class="productTitle">Brand: </span>${product.brand}</h3>
    <h3><span class="productTitle">Category: </span>${product.category}</h3>
    <span class="productTitle"></span>
    <p><span class="productTitle">Price: </span>${(product.price *96.54).toFixed()}INR</p>
    <p><span class="productTitle">Rating: </span>${"⭐".repeat(product.rating.toFixed())}</p>
    <p><span class="productTitle">WarrantyInformation: </span>${product.warrantyInformation}</p>
    <p id="para"><span class="productTitle">Description: </span>${product.description}</p>

    <button>Add To Cart</button>
    <button>Add To Wishlist ${"🔜"}</button>

    </div>
    </div>
    
    
    
    `;


let reviews =document.getElementById("reviews");

product.reviews.forEach((ele) => {
    console.log(ele);
    reviews.innerHTML += `
    <div class="review_Card">
    <div class="reviewHead">
    <h2>${ele.reviewerName}</h2>
    <p>${"⭐".repeat(ele.rating)}</p>
    </div>
    <div>
    <p>${ele.comment}</p>
    </div>
    </div>

    
    `;   
});
reviews.innerHTML += `
<input id="newReview" type="text" />
<button>Submit Feedback</button>
`;
}
getProducts();