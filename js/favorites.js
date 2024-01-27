

document.addEventListener('DOMContentLoaded', function () {
  // Simulated product data
  const products = [
  { id: 1, name: 'KUROI Gaming Monitor',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/monitors/monitor1.jpg', description: "24.5 Inches 170hz Black" },
  { id: 2, name: 'Samsung Monitor', imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/monitors/monitor2.webp', description: "24 Inches LED Borderless"},
  { id: 3, name: 'Samsung ViewFinity',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/monitors/monitor3.jpg', description: "28 Inches UHD IPS SMD FreeSync HDR Black"},
  { id: 4, name: 'Benq Zowie Monitor XL2740',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/monitors/monitor4.jpg', description: "27 Inches 240hz Gaming"},
  { id: 5, name: 'IPhone 15 Pro Max',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/phones/iphones/iphone15.jpg', description: "6.7 Inch Display 256GB Titanium"},
  { id: 6, name: 'Samsung S24 Ultra',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/phones/androids/s24.jpg', description: "6.8 Inch Display 256GB Titanium 120hz"},
  { id: 7, name: 'Xiaomi Redmi Note 13 Pro+',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/phones/androids/xiaomi.webp', description: "6.67 Inch Display 512GB 200MP Camera"},
  { id: 8, name: 'Samsung Galaxy A54 5G',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/phones/androids/a54.jpg', description: "6.4 Inch Display 120hz 256GB"},
  { id: 9, name: 'Custom Build Intel/Geforce',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/pcs/pc1.webp', description: "i9-14900k paired with a 4090 16gb 128 gb RAM 4TB SSD + Watercooling"},
  { id: 10, name: 'Custom Build AMD Ryzen',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/pcs/pc2.jpg', description: "AMD Ryzen 9 7950X Proccesor paired with a Sapphire AMD Radeon NITRO+ RX 7900 XTX Vapor-X with 128 GB RAM 8TB SSD + Watercooled"},
  { id: 11, name: 'NZXT Build', imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/pcs/pc3.avif', description: "???"},
  { id: 12, name: 'Crazy PC',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/pcs/pc4..avif', description: "Dareu CS-8856 White Tiger Case 4090 ti i9-14900k 256 gb RAM 12 TB SSD Water Cooling + OverClocked"},
  { id: 13, name: 'Samsung Smart TV',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/TVs/tv1.webp', description: "32 inch flatscreen QLED display Smart TV"},
  { id: 14, name: 'Curved Smart TV',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/TVs/tv2.webp', description: "UHD 4K Curved Smart TV"},
  { id: 15, name: 'Samsung Smart TV 55 inch',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/TVs/tv3.jpg', description: "55 inch LED 4K UHD Curved TV"},
  { id: 16, name: '65 Inch Samsung TV',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/TVs/tv4.webp', description: "65 inch Class 4K Ultra HD (2160p) Curved HDR Smart LED TV"},
  { id: 17, name: '4090 Graphics Card',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/pc_parts/1.webp', description: "ROG 4090 Graphics Card"},
  { id: 18, name: 'Intel i9-14900k Processor',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/pc_parts/2.jpg', description: "Intel Core i9-14900K Raptor Lake 3.2GHz Twenty Four-Core"},
  { id: 19, name: 'AMD Ryzen 9 7950x',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/pc_parts/3.jpg', description: "AMD Ryzen™ 9 7950X 16-Core, 32-Thread Unlocked"},
  { id: 20, name: 'Sapphire AMD Radeon NITRO+ RX 7900 XTX Vapor-X',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/pc_parts/4.png', description: "NITRO+ AMD Radeon RX 7900 XTX Vapor-X 24G GDDR6" },
  { id: 21, name: 'YIER Bluetooth Speaker', imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/speakers/1.jpg', description: "100dB Loud Subwoofer 80W(Peak) Stereo Sound, Bassup Technology,18-Hour Playtime"},
  { id: 22, name: 'SONY XB13 SPEAKERS',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/speakers/2.jpg', description: "46mm hands-free USB Type C"},
  { id: 23, name: 'KEF Q350 Speqkers',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/speakers/3.jpg', description: "110db 15-120W freq. resp. 63hz"},
  { id: 24, name: 'Cambridge Audio SX50 Bookshelf Speaker',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/speakers/4.png', description: "Cambridge Audio SX50 Bookshelf Speakers225 x 161 x 240mm 2kg weight"},
  { id: 25, name: 'MacBook AIR M1',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/pcs/laptops/1.jpg', description: "13.3-inch 8-core CPU Built-in 49.9‑watt‑hour lithium‑polymer battery"},
  { id: 26, name: 'ROG Strix Laptop',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/pcs/laptops/2.jpg', description: "15.6 Inch 300Hz IPS FHD Display, NVIDIA GeForce RTX 3050, AMD Ryzen 7 6800H, 16GB DDR5, 1TB SSD, RGB Keyboard, Windows 11 Home, G513RC-IS74,Gray"},
  { id: 27, name: 'Lenovo Legion 5',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/pcs/laptops/3.jpg', description: "15.6 Inch FHD Display, AMD Ryzen 7 5800H, 16GB RAM, 512GB Storage, NVIDIA GeForce RTX 3050Ti, Windows 10H, Phantom Blue"},
  { id: 28, name: 'MSI Stealth',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/pcs/laptops/4.jpg', description: "14 Inch 165hz FHD+ Gaming Laptop - Intel Core i7 13620H - NVIDIA GeForce RTX 4060 with 16GB RAM and 1TB SSD - Blue"},
  { id: 29, name: 'Dyson V15 Detec', imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/household/1.png', description: "Dyson V15 Detec"},
  { id: 30, name: 'Amazon Echo',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/household/2.avif', description: "Amazon Echo 4th gen"},
  { id: 31, name: 'Roomba Robot Cleaner',  imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/household/3.webp', description: "Self Cleaning Roomba robot"},
  { id: 32, name: 'Ring Camera', imageURL: 'file:///C:/Users/SH.Digjitale%20Ferizaj/Desktop/Group%20Project/img/household/4.webp', description: "Amazon Ring Camera"},
  // ... add more products as needed
  ];

function addToFavorites(productId) {
  // Get the product details based on productId
  const product = products.find(item => item.id === productId);

  // Check if localStorage supports JSON
  if (window.localStorage && JSON) {
    // Retrieve existing favorites items from localStorage
    const favoritesItems = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if the product is already in favorites
    const existingItemIndex = favoritesItems.findIndex(item => item.id === productId);

    if (existingItemIndex !== -1) {
      // If the product is already in favorites, increase the quantity
      favoritesItems[existingItemIndex].quantity++;
    } else {
      // If the product is not in favorites, add it with quantity 1
      favoritesItems.push({ ...product, quantity: 1 });
    }

    // Store the updated favorites in localStorage
    localStorage.setItem('favorites', JSON.stringify(favoritesItems));

    // Show a notification that the item has been added to favorites
    alert(`${product.name} has been added to favorites.`);
  } else {
    // Handle the case where localStorage or JSON is not supported
    console.error('LocalStorage or JSON not supported.');
  }
}

  function updateFavoritesPage() {
    // Retrieve cart items from localStorage
    const favoritesItems = JSON.parse(localStorage.getItem('favorites')) || [];

    // Display cart items on the page
    const favoritesContainer = document.getElementById('favorites-container');
    favoritesContainer.innerHTML = ''; // Clear existing content

    let totalItemCount = 0;
    

    if (favoritesItems.length > 0) {
      favoritesItems.forEach((item, index) => {
        const favoritesItemElement = document.createElement('div');
        favoritesItemElement.innerHTML = `
          <div>
            <img src="${item.imageURL}" alt="${item.name}" style="max-width: 100px; max-height: 100px;">
            <p>${item.name} </p>
            <p>${item.description}</p>
            <button class="remove-from-cart-button" data-index="${index}">Remove</button>
          </div>
        `;
        favoritesContainer.appendChild(favoritesItemElement);

        totalItemCount += item.quantity;
        
      });
    } else {
      favoritesContainer.innerHTML = '<p>You have no favorites.</p>';
    }

    // Display the total count
    const totalCountElement = document.createElement('p');
    totalCountElement.innerHTML = `<strong>Total Items in favorites: ${totalItemCount}</strong>`;
    favoritesContainer.appendChild(totalCountElement);

    
  }

  // Add an event listener to each "Heart Button" button
  document.querySelectorAll('.heart-button').forEach(button => {
    button.addEventListener('click', function () {
      // Extract the product ID from the data-product-id attribute
      const productId = parseInt(button.getAttribute('data-product-id'));

      // Call the addToCart function with the product ID
      addToFavorites(productId);

      // Update the cart on the cart page
      updateFavoritesPage();
    });
  });

  // Add an event listener to each "Remove" button on the cart page
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-from-cart-button')) {
      // Extract the index from the data-index attribute
      const index = parseInt(event.target.getAttribute('data-index'));

      // Retrieve cart items from localStorage
      const favoritesItems = JSON.parse(localStorage.getItem('favorites')) || [];

      // Check if the item quantity is more than 1, then decrease the quantity
      if (favoritesItems[index].quantity > 1) {
        favoritesItems[index].quantity--;
      } else {
        // If the quantity is 1, remove the item from the cart
        favoritesItems.splice(index, 1);
      }

      // Store the updated cart in localStorage
      localStorage.setItem('favorites', JSON.stringify(favoritesItems));
  
      // Update the cart on the cart page
      updateFavoritesPage();
    }
  });

  // Update the cart on the cart page when the page loads
  updateFavoritesPage();
});

