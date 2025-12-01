// our products
let products = [
  { id: 1, title: "Laptop Pro",       price: 25000, category: "Electronics", inStock: true , img:'assets/images/macbook.jpg' },
  { id: 2, title: "Wireless Headphones", price: 1200,  category: "Accessories", inStock: true, img:'assets/images/airpodsmax.webp' },
  { id: 3, title: "Smart Watch",      price: 8500,  category: "Electronics", inStock: false, img:'assets/images/applewatch.jpg' },
  { id: 4, title: "USB Cable",        price: 150,   category: "Accessories", inStock: true, img:'assets/images/usb.webp' },
  { id: 5, title: "Mechanical Keyboard", price: 3200, category: "Electronics", inStock: true , img:'assets/images/keyboard.webp'},
  { id: 6, title: "Mouse Pad",        price: 350,   category: "Accessories", inStock: true , img:'assets/images/mousepad.jpg'}
];
// renderProducts
function renderProducts(list = products){
  let parent = document.getElementById("shopParent");
  parent.innerHTML = "";
  
for (let x=0;x < list.length;x++){
  // testing and configure 
  console.log(list[x]['id'])
  if (list[x]['inStock'] === true){
    var available = "<div class='available'></div>";
    var check_btn = "";
  }else {
    var available = "<div class='not-available'></div>";
    var check_btn = " disabled";
  }
  // shopItem class
  parent.innerHTML +=(`
    <div class='shopItem'>
    <img src='${list[x]['img']}'>
    <div class='itemDetails'>
    <label id='itemName'>${available} ${list[x]['title']}</label>
    <label id='itemCategory'>${list[x]['category']}</label>
    <label class='itemPrice' id='itemPrice'>${list[x]['price']}</label>
    </div>
    <button class='btn${check_btn}'>Buy Now</button>
    </div>
  `);

}
// add dollar sign behind price
document.querySelectorAll('.itemPrice').forEach(el => {
  el.innerText = el.innerText + "$";
});
}
// render products when page laod 
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
// sorting ( sortByPrice() ) but not with Price only
document.getElementById('sortSelect').addEventListener('change', function() {
  let sortType = this.value;

  if (sortType === 'priceLow') {
    products.sort((a, b) => a.price - b.price);
    renderProducts();
  } 
  else if (sortType === 'priceHigh') {
    products.sort((a, b) => b.price - a.price);
    renderProducts();
  }
  else if (sortType === 'nameAZ') {
    products.sort((a, b) => a.title.localeCompare(b.title));
    renderProducts();
  }
  else if (sortType === 'nameZA') {
    products.sort((a, b) => b.title.localeCompare(a.title));
    renderProducts();
  }
  else if (sortType === 'all') {
    products.sort((a,b) => a.id - b.id)
    renderProducts();
  }
  // filter by category
  else if (sortType === 'electronics') {
    let filtered = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === "Electronics") {
        filtered.push(products[i]);
      }
    }
    filtered.sort((a, b) => a.id - b.id);
    renderProducts(filtered);
  }
  else if (sortType === 'accessories') {
    let filtered = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === "Accessories") {
        filtered.push(products[i]);
      }
    }
    filtered.sort((a, b) => a.id - b.id);
    renderProducts(filtered);
  }
});
// search 
document.getElementById("searchInput").addEventListener("input", function searchProducts() {
  let text = this.value.toLowerCase();
  let filtered = products.filter(item =>
      item.title.toLowerCase().includes(text)
  );

  renderProducts(filtered);
});

// delete product
document.getElementById("deleteBtn").addEventListener("click", function() {
  let productId = document.getElementById("productIdInput").value;
  if (productId > 0 && productId <= products.length) {
    products.splice(productId - 1, 1);
    alert("Product deleted successfully");
    renderProducts();
  } else {
    alert("Invalid product ID");
  }
});
function addRandomProduct() {
  let randomProduct = products[Math.floor(Math.random() * products.length)];
  
  // Assign new id to avoid duplicate IDs
  let maxId = 0;
  let i = 0;
  while (i < products.length) {
    if (products[i].id > maxId) {
      maxId = products[i].id;
      products.sort((a, b) => a.id - b.id);
    }
    i++;
  }
  let newId = maxId + 1;
  let newProduct = { ...randomProduct, id: newId };
  products.unshift(newProduct);
  renderProducts();
  console.clear();
  console.log("New product added: ", newProduct);
}
// project structure on console
console.clear();
console.log(products);




// elzero web school - challenge 


/*    let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"];
    let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];
    let teams = [];
    for (let i = 0; i < myAdmins.length; i++) {
        // to stop before 
        if (myAdmins[i] == "Stop"){
            myAdmins.splice(i);
            break;
        }
    }
    for (let i = 0; i < myAdmins.length; i++) {
        // get first letter
        let first_letter = myAdmins[i][0];
        console.log(first_letter);
        // make teams 
        let team = [myAdmins[i]];
        // push employees whose name starts with same first letter
        for (let j = 0; j < myEmployees.length; j++) {
            if (myEmployees[j][0] === first_letter) {
                team.push(myEmployees[j]);
            }
        }
        teams.push(team);
    }
        
    console.log(teams); */
    