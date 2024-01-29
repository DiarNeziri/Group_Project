

document.addEventListener('DOMContentLoaded', function () {
  // Simulated product data
  const products = [
  { id: 1, name: 'KUROI Gaming Monitor', price: 299, imageURL: 'https://m.media-amazon.com/images/I/81wV8wZtXEL._AC_UF894,1000_QL80_.jpg', description: "24.5 Inches 170hz Black" },
  { id: 2, name: 'Samsung Monitor', price: 189, imageURL: 'https://images.samsung.com/is/image/samsung/p6pim/in/lu28r550uqwxxl/gallery/in-ur55-lu28r550uqwxxl-536896135?$650_519_PNG$', description: "24 Inches LED Borderless"},
  { id: 3, name: 'Samsung ViewFinity', price: 199, imageURL: 'https://target.scene7.com/is/image/Target/GUEST_39dd0ac9-b7f2-4f1c-8f0e-2393989fc5d2', description: "28 Inches UHD IPS SMD FreeSync HDR Black"},
  { id: 4, name: 'Benq Zowie Monitor XL2740', price: 359, imageURL: 'https://media.s-bol.com/RXm7ANAOlRx0/DlEjEq/550x332.jpg', description: "27 Inches 240hz Gaming"},
  { id: 5, name: 'IPhone 15 Pro Max', price: 1299, imageURL: 'https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-15-pro-max/carousel/natural-titanium-1.png', description: "6.7 Inch Display 256GB Titanium"},
  { id: 6, name: 'Samsung S24 Ultra', price: 1099, imageURL: 'https://m-cdn.phonearena.com/images/article/153718-wide-two_1200/Check-out-the-Galaxy-S24-and-S24-Ultra-in-all-colors-in-a-TON-of-gorgeous-new-renders.jpg', description: "6.8 Inch Display 256GB Titanium 120hz"},
  { id: 7, name: 'Xiaomi Redmi Note 13 Pro+', price: 999, imageURL: 'https://gumlet.assettype.com/bloombergquint/2024-01/9ce95815-8737-4de4-b991-48a94441ec75/1fcfdf47573677eee94bab44e38b7734_600x600_85.jpg', description: "6.67 Inch Display 512GB 200MP Camera"},
  { id: 8, name: 'Samsung Galaxy A54 5G', price: 459, imageURL: 'https://images.samsung.com/is/image/samsung/p6pim/uk/sm-a546blgdeub/gallery/uk-galaxy-a54-5g-sm-a546-sm-a546blgdeub-535771507?$650_519_PNG$', description: "6.4 Inch Display 120hz 256GB"},
  { id: 9, name: 'Custom Build Intel/Geforce', price: 2899, imageURL: 'https://pcbros.tech/cdn/shop/products/PXL_20220407_135813056.PORTRAIT.jpg?v=1649355485&width=3979', description: "i9-14900k paired with a 4090 16gb 128 gb RAM 4TB SSD + Watercooling"},
  { id: 10, name: 'Custom Build AMD Ryzen', price: 3099, imageURL: 'https://www.cpusolutions.com/store/pc/catalog/fd-ca-focus-wt-w-5700g_79_detail.jpg', description: "AMD Ryzen 9 7950X Proccesor paired with a Sapphire AMD Radeon NITRO+ RX 7900 XTX Vapor-X with 128 GB RAM 8TB SSD + Watercooled"},
  { id: 11, name: 'NZXT Build', price: 1599, imageURL: 'https://nzxt.com/assets/cms/34299/1658894006-prebuilt-pcs-path-primary.png?auto=format&fit=max&h=900&w=672', description: "???"},
  { id: 12, name: 'Crazy PC', price: 4999, imageURL: 'https://www.digitec.ch/im/Files/7/5/0/7/6/1/3/6/CS-8856.webp?impolicy=PictureComponent&resizeWidth=992&resizeHeight=992', description: "Dareu CS-8856 White Tiger Case 4090 ti i9-14900k 256 gb RAM 12 TB SSD Water Cooling + OverClocked"},
  { id: 13, name: 'Samsung Smart TV', price: 759, imageURL: 'https://m.media-amazon.com/images/I/715HnQnwSLL.jpg', description: "32 inch flatscreen QLED display Smart TV"},
  { id: 14, name: 'Curved Smart TV', price: 1099, imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNLSv06Ju7S-9JdTdw9Wd8bNYCX_vfJs1ZYeWEKRLZm8fBru0MKMf0Xl9h0SiY-peZM8&usqp=CAU', description: "UHD 4K Curved Smart TV"},
  { id: 15, name: 'Samsung Smart TV 55 inch', price: 899, imageURL: 'https://alhafidh.com/cdn/shop/products/cd18eef28e761c66dab9275dafc8c626_8366d75c-2ed1-49c2-8b5e-f0d0c74698a1_2048x2048.jpg?v=1581843274', description: "55 inch LED 4K UHD Curved TV"},
  { id: 16, name: '65 Inch Samsung TV', price: 1599, imageURL: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5773/5773847_sd.jpg', description: "65 inch Class 4K Ultra HD (2160p) Curved HDR Smart LED TV"},
  { id: 17, name: '4090 Graphics Card', price: 1219, imageURL: 'https://m.media-amazon.com/images/I/815d7TTP5UL.jpg', description: "ROG 4090 Graphics Card"},
  { id: 18, name: 'Intel i9-14900k Processor', price: 499, imageURL: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/670841_614867_01_front_comping.jpg', description: "Intel Core i9-14900K Raptor Lake 3.2GHz Twenty Four-Core"},
  { id: 19, name: 'AMD Ryzen 9 7950x', price: 569, imageURL: 'https://m.media-amazon.com/images/I/61h2WOmf+2L.jpg', description: "AMD Ryzen™ 9 7950X 16-Core, 32-Thread Unlocked"},
  { id: 20, name: 'Sapphire AMD Radeon NITRO+ RX 7900 XTX Vapor-X', price: 1389, imageURL: 'https://media.cdn.sapphiretech.com.cn/-/media/sites/sapphire/pim/product-images/11322_01_rx7900xtx_vaporx_nitro_24gddr6/11322_01_rx7900xtx_nitro_24ggddr6_full_box_card_amd_374x265.ashx?v=674bf270e2ef4716a695258c62fe71c0', description: "NITRO+ AMD Radeon RX 7900 XTX Vapor-X 24G GDDR6" },
  { id: 21, name: 'YIER Bluetooth Speaker', price: 489, imageURL: 'https://m.media-amazon.com/images/I/713TUYjagQL.jpg', description: "100dB Loud Subwoofer 80W(Peak) Stereo Sound, Bassup Technology,18-Hour Playtime"},
  { id: 22, name: 'SONY XB13 SPEAKERS', price: 59, imageURL: 'https://www.sony.com/image/0e910cedf967daf89ac633418a1694d2?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF', description: "46mm hands-free USB Type C"},
  { id: 23, name: 'KEF Q350 Speqkers', price: 679, imageURL: 'https://cdn.mos.cms.futurecdn.net/JyGRHeRkNTanMaYm7kn8Kh-480-80.jpg', description: "110db 15-120W freq. resp. 63hz"},
  { id: 24, name: 'Cambridge Audio SX50 Bookshelf Speaker', price: 789, imageURL: 'https://m.media-amazon.com/images/I/6126A4TmXhL._AC_UF894,1000_QL80_.jpg', description: "Cambridge Audio SX50 Bookshelf Speakers225 x 161 x 240mm 2kg weight"},
  { id: 25, name: 'MacBook AIR M1', price: 1299, imageURL: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661', description: "13.3-inch 8-core CPU Built-in 49.9‑watt‑hour lithium‑polymer battery"},
  { id: 26, name: 'ROG Strix Laptop', price: 1799, imageURL: 'https://m.media-amazon.com/images/I/71pWcOnLL+L.jpg', description: "15.6 Inch 300Hz IPS FHD Display, NVIDIA GeForce RTX 3050, AMD Ryzen 7 6800H, 16GB DDR5, 1TB SSD, RGB Keyboard, Windows 11 Home, G513RC-IS74,Gray"},
  { id: 27, name: 'Lenovo Legion 5', price: 999, imageURL: 'https://m.media-amazon.com/images/I/71fzx0pGY5L.jpg', description: "15.6 Inch FHD Display, AMD Ryzen 7 5800H, 16GB RAM, 512GB Storage, NVIDIA GeForce RTX 3050Ti, Windows 10H, Phantom Blue"},
  { id: 28, name: 'MSI Stealth', price: 1999, imageURL: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534580_rd.jpg', description: "14 Inch 165hz FHD+ Gaming Laptop - Intel Core i7 13620H - NVIDIA GeForce RTX 4060 with 16GB RAM and 1TB SSD - Blue"},
  { id: 29, name: 'Dyson V15 Detec', price: 399, imageURL: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/446986-01.png?fmt=png-alpha&scl=1&fmt=png-alpha', description: "Dyson V15 Detec"},
  { id: 30, name: 'Amazon Echo', price: 159, imageURL: 'https://m.media-amazon.com/images/I/41rLK2t8dgL._AC_SY350_.jpg', description: "Amazon Echo 4th gen"},
  { id: 31, name: 'Roomba Robot Cleaner', price: 349, imageURL: 'https://www.multivu.com/players/English/9090251-irobot-introduces-worlds-most-advanced-robot-vacuum-and-mop/image/j7Hero_1663766676615-HR.jpg', description: "Self Cleaning Roomba robot"},
  { id: 32, name: 'Ring Camera', price: 79, imageURL: 'https://media.wired.com/photos/62ec3110e450f63c28dddee6/4:3/w_2132,h_1599,c_limit/Ring-Doorbell-Camera-Data-Security-shutterstock_1205704129.jpg', description: "Amazon Ring Camera"},
  // ... add more products as needed
  ];

 function addToCart(productId) {
    // Get the product details based on productId
    const product = products.find(item => item.id === productId);

    // Check if localStorage supports JSON
    if (window.localStorage && JSON) {
      // Retrieve existing cart items from localStorage
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if the product is already in the cart
      const existingItem = cartItems.find(item => item.id === productId);

      if (existingItem) {
        // If the item is already in the cart, update the quantity
        existingItem.quantity++;
      } else {
        // If the item is not in the cart, add it with quantity 1
        cartItems.push({ ...product, quantity: 1 });
      }

      // Store the updated cart in localStorage
      localStorage.setItem('cart', JSON.stringify(cartItems));

      // Show a notification that the item has been added to the cart
      alert(`${product.name} has been added to the cart.`);
    } else {
      // Handle the case where localStorage or JSON is not supported
      console.error('LocalStorage or JSON not supported.');
    }
  }

  function updateCartPage() {
    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Display cart items on the page
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear existing content

    let totalItemCount = 0;
    let totalCost = 0;

    if (cartItems.length > 0) {
      cartItems.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.innerHTML = `
          <div>
            <img src="${item.imageURL}" alt="${item.name}" style="max-width: 100px; max-height: 100px;">
            <p>${item.name} - $${item.price} (Quantity: ${item.quantity})</p>
            <p>${item.description}</p>
            <button class="remove-from-cart-button" data-index="${index}">Remove</button>
          </div>
        `;
        cartContainer.appendChild(cartItemElement);

        totalItemCount += item.quantity;
        totalCost += item.price * item.quantity;
      });
    } else {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    }

    // Display the total count
    const totalCountElement = document.createElement('p');
    totalCountElement.innerHTML = `<strong>Total Items in Cart: ${totalItemCount}</strong>`;
    cartContainer.appendChild(totalCountElement);

    // Display the total cost
    const totalCostElement = document.createElement('p');
    totalCostElement.innerHTML = `<strong>Total Cost: $${totalCost.toFixed(2)}</strong>`;
    cartContainer.appendChild(totalCostElement);
  }

  // Add an event listener to each "Add To Cart" button
  document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', function () {
      // Extract the product ID from the data-product-id attribute
      const productId = parseInt(button.getAttribute('data-product-id'));

      // Call the addToCart function with the product ID
      addToCart(productId);

      // Update the cart on the cart page
      updateCartPage();
    });
  });

  // Add an event listener to each "Remove" button on the cart page
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-from-cart-button')) {
      // Extract the index from the data-index attribute
      const index = parseInt(event.target.getAttribute('data-index'));

      // Retrieve cart items from localStorage
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if the item quantity is more than 1, then decrease the quantity
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
      } else {
        // If the quantity is 1, remove the item from the cart
        cartItems.splice(index, 1);
      }

      // Store the updated cart in localStorage
      localStorage.setItem('cart', JSON.stringify(cartItems));

      // Update the cart on the cart page
      updateCartPage();
    }
  });

  // Update the cart on the cart page when the page loads
  updateCartPage();
});

document.addEventListener("DOMContentLoaded", function () {
        // Add an event listener for each "Show More" button
        var showMoreButtons = document.querySelectorAll('.show-more-btn');
        showMoreButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                toggleDescription(button);
            });
        });
    });

    function toggleDescription(button) {
        var cardBody = button.closest('.card-body');
        var description = cardBody.querySelector('.card-text');
        var isExpanded = description.classList.toggle('expanded');

        if (isExpanded) {
            button.innerText = 'Show Less';
        } else {
            button.innerText = 'Show More';
        }
    } 