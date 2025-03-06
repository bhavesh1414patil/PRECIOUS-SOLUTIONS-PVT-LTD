const productList = [
  {
    id: 1,
    title: "Gaming Laptop",
    price: 1200,
    category: "Laptop",
    image: "https://i.ibb.co/GW5xbgR/image.png",
    rating: { rate: 4.2, count: 85 },
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    price: 4000,
    category: "Keyboard/Mouse",
    image: "https://i.ibb.co/NTJVN8g/image.png",
    rating: { rate: 5, count: 112 },
  },
  {
    id: 15,
    title: "SIM Cards",
    price: 1000,
    category: "Keyboard/Mouse",
    image: "https://bmobile.in/images/cms/9-SIM-Cards.jpg",
    rating: { rate: 5, count: 112 },
  },
  
  {
    id: 3,
    title: "Gaming Headsets",
    price: 699.99,
    category: "PC Accessorys",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/6/k/y/pro-version-wired-gaming-music-stylist-headphone-with-microphone-original-imah22ffhbhwecwr.jpeg?q=70",
    rating: { rate: 3.5, count: 200 },
  },
  {
    id: 4,
    title: "Graphics Cards (GPUs)",
    price: 39.99,
    category: "PC Accessorys",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/graphics-card/6/f/b/gaming-geforce-rtx-4080-trinity-oc-zotac-original-imagqcvcen3k4dvz.jpeg?q=70",
    rating: { rate: 4.0, count: 95 },
  },
  {
    id: 5,
    title: "RAM Modules",
    price: 59.99,
    category: "PC Accessorys",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ram/z/p/y/16-gb-2666-non-ecc-unbuffered-highly-durable-memory-module-for-original-imah4zgshs3uhxrv.jpeg?q=70",
    rating: { rate: 4.6, count: 150 },
  }
  , {
    id: 6,
    title: "Power Supplies",
    price: 59.99,
    category: "PC Accessorys",
    image: "https://rukminim2.flixcart.com/image/612/612/l1whaq80/psu/y/y/7/vs450l-ant-esports-original-imagdcz4gqwzzfax.jpeg?q=70",
    rating: { rate: 4.6, count: 150 },
  }, {
    id: 7,
    title: "Routers",
    price: 59.99,
    category: "PC Accessorys",
    image: "https://rukminim2.flixcart.com/image/312/312/k1v1h8w0/router/u/9/a/tp-link-archer-ax10-original-imafhcy6b2nmncse.jpeg?q=70",
    rating: { rate: 4.6, count: 150 },
  }, {
    id: 8,
    title: "CPU CoolersCPU Coolers",
    price: 59.99,
    category: "PC Accessorys",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/cooler/p/p/c/cpu-fan-for-intel-i3-i5-i7-lga-1150-1151-1155-1156-and-thermal-original-imagzye7zkpdrbnn.jpeg?q=70",
    rating: { rate: 4.6, count: 150 },
  }, {
    id: 9,
    title: "Antivirus Software",
    price: 59.99,
    category: "Services",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/digital-security-softwr/x/0/m/-original-imagt75nkhg3gcmm.jpeg?q=70",
    rating: { rate: 4.6, count: 150 },
  }, {
    id: 10,
    title: "Laptop Bags",
    price: 59.99,
    category: "PC Accessorys",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/bag/u/f/z/16-kids-backpack-school-bag-plush-mini-travel-bag-tutu-new-14-original-imahyz67jzhmhsac.jpeg?q=70",
    rating: { rate: 4.6, count: 150 },
  }, {
    id: 11 ,
    title: "Custom PC Building",
    price: 59.99,
    category: "Services",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLdOSq6NWAfeFn43tjPnaRq2nVZDXQ8oDn0UcjpQOEY7RpCMHsd5PmcyP-GhBRwhzlWY&usqp=CAU",
    rating: { rate: 4.6, count: 150 },
  },
  {
    id: 12,
    title: "PC Cleaning",
    price: 59.99,
    category: "Services",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Uy6BL8XQJjx9T-p3k4vxrgONUGIKnahVwA&s",
    rating: { rate: 4.6, count: 150 },
  },
  {
    id: 13,
    title: "Hardware Repair",
    price: 59.99,
    category: "Services",
    image: "https://media.istockphoto.com/id/625135580/photo/laptop-disassembling-with-screwdriver-at-repair.jpg?s=612x612&w=0&k=20&c=Em-dB6fevNhRd5yaIxcgjDfFxuTVT4OSm_ys_Ybke6c=",
    rating: { rate: 4.6, count: 150 },
  },
  {
    id: 14,
    title: "",
    price: 59.99,
    category: "women's clothing",
    image: "",
    rating: { rate: 4.6, count: 150 },
  }
];


const itemsContainer = document.querySelector('.items');
const search = document.getElementById('search');
const allBtn = document.getElementById('all');
const menBtn = document.getElementById('men');
const womenBtn = document.getElementById('women');
const jewelleryBtn = document.getElementById('jewellery');
const electronicsBtn = document.getElementById('electronics');
const range = document.getElementById('range');

let itemArr = productList;
localStorage.setItem('itemArr', JSON.stringify(itemArr));
showItems(itemArr);

function showItems(Arr) {
  itemsContainer.innerHTML = '';
  Arr.forEach(ele => {
    itemsContainer.innerHTML += `
      <div class="item">
        <img src="${ele.image}" alt="${ele.title}" />
        <div class="info">
          <div style="margin-bottom: 10px; font-weight:600">${ele.title}</div>
          <div style="font-weight:bold" class="row">
            <div class="price">Rs.${ele.price}</div>
          </div>
          <div style='margin-top:10px;' class="row">Rating: ${Math.floor(ele.rating.rate)}</div>
        </div>
       <button id="addBtn" style="background-color: black;" onmouseover="this.style.backgroundColor='rgb(117, 115, 115)'" onmouseout="this.style.backgroundColor='black'" onClick='addToCart(${ele.id})'> Add to Cart
      </button>

      </div>
    `;
  });
}

function addToCart(id) {
  let item = itemArr.find(ele => ele.id === id);
  let cartArr = JSON.parse(localStorage.getItem('cartArr')) || [];

  cartArr.push(item);
  localStorage.setItem('cartArr', JSON.stringify(cartArr));
  console.log("Cart Updated:", JSON.parse(localStorage.getItem('cartArr')));
}

search.addEventListener('input', () => {
  let filteredArr = itemArr.filter(ele => ele.title.toLowerCase().includes(search.value.trim().toLowerCase()));
  if (filteredArr.length === 0) {
    itemsContainer.innerHTML = `<p>Oops, No products found for this filtering, try different combinations!</p>`;
    return;
  }
  showItems(filteredArr);
});
allBtn.addEventListener('click',()=>{
  myArr =JSON.parse(localStorage.getItem('itemArr'));
  showItems(myArr);
})

allBtn.style.backgroundColor='white';
 

menBtn.addEventListener('click',()=>{
  myArr = itemArr.filter(ele=>{
    if(ele.category=="Laptop"){
      return ele;
    }
  })

  showItems(myArr);
})
womenBtn.addEventListener('click',()=>{
  myArr = itemArr.filter(ele=>{
    if(ele.category=="PC Accessorys"){
      return ele;
    }
  })

  showItems(myArr);
})

jewelleryBtn.addEventListener('click',()=>{
  myArr = itemArr.filter(ele=>{
    if(ele.category=="Keyboard/Mouse"){
      return ele;
    }
  })

  showItems(myArr);
})

electronicsBtn.addEventListener('click',()=>{
  myArr = itemArr.filter(ele=>{
    if(ele.category=="Services"){
      return ele;
    }
  })
  showItems(myArr);
})

range.addEventListener('input',()=>{
  console.log(range.value);
  if(range.value==0){
    showItems(itemArr);
    return;
  }
  myArr = itemArr.filter(ele=>{
    if(Math.floor(ele.rating.rate)==range.value){
      return ele;
    }
  })
  if(myArr.length==0){
    itemsContainer.innerHTML=`
    <p>Oops,No products found for this filtering, try different combinations!</P>
    `
    return;
  }
  showItems(myArr);
})

document.querySelectorAll('input[type="checkbox"]').forEach(c => {
  c.addEventListener('change', filterProducts);
});


function filterProducts() {
  const checkboxes = Array.from(document.querySelectorAll('input[name="prange"]'));
  const checkedRanges = checkboxes.filter(c => c.checked).map(c => c.value);

  if (checkedRanges.length === 0) {
    showItems(itemArr);
    return;
  }


  const filteredProducts = itemArr.filter(p => {
    const price = p.price;
    for (const range of checkedRanges) {
      if (range === '100+' && price >= 100) {
        return true;
      }
      const [min, max] = range.split('-').map(parseFloat);
      if (price >= min && price <= max) {
        return true;
      }
    }
    return false;
  });


  myArr = itemArr.filter(p =>{
    if(filteredProducts.includes(p)){
      return p;
    }
  })
  showItems(myArr);
}

function totalPriceFunc() {
  let cartArr = JSON.parse(localStorage.getItem('cartArr')) || [];
  return cartArr.reduce((acc, item) => acc + item.price, 0);
}

document.getElementById("rzp-button1").onclick = function (e) {
  var options = {
    key: "rzp_test_PV1oQ0oMtgXOsq",
    amount: totalPriceFunc() * 100,
    currency: "INR",
    name: "MeShop Checkout",
    description: "This is your order",
    theme: { color: "#000" },
    image: "https://www.example.com/logo.png",
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
  e.preventDefault();
};
