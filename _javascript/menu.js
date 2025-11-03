const menuData = [
  // Cakes
  { name: "Chocolate Cake", category: "Cakes", page: "cakes.html" },
  { name: "Vanilla Cake", category: "Cakes", page: "cakes.html" },
  { name: "Wedding Cake", category: "Cakes", page: "cakes.html" },
  { name: "Birthday Cake", category: "Cakes", page: "cakes.html" },
  // Freshly Baked Goods
  { name: "Croissant", category: "Freshly Baked Goods", page: "freshly_baked_goods.html" },
  { name: "Bread Roll", category: "Freshly Baked Goods", page: "freshly_baked_goods.html" },
  { name: "Cinnamon Roll", category: "Freshly Baked Goods", page: "freshly_baked_goods.html" },
  { name: "Apple Pie", category: "Freshly Baked Goods", page: "freshly_baked_goods.html" },
  // Beverages
  { name: "Latte", category: "Beverages", page: "beverages.html" },
  { name: "Cappuccino", category: "Beverages", page: "beverages.html" },
  { name: "Tea", category: "Beverages", page: "beverages.html" },
  { name: "Smoothie", category: "Beverages", page: "beverages.html" }
];

const searchInput = document.getElementById('menuSearch');
const searchResults = document.getElementById('searchResults');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function() {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';

  if(query.trim() === "") return;

  const results = menuData.filter(item => 
    item.name.toLowerCase().includes(query) || 
    (item.keywords && item.keywords.some(k => k.toLowerCase().includes(query)))
  );

  if(results.length === 0) {
    searchResults.innerHTML = '<li>No results found.</li>';
  } else {
    results.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.page}">${item.name} (${item.category})</a>`;
      searchResults.appendChild(li);
    });
  }
});
