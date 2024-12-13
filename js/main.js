// Enhanced product data
const products = [
    {
        id: 1,
        name: "Floral Summer Dress",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1528738716593-1306c2b538ec?q=80&w=1287&auto=format&fit=crop",
        category: "Clothing",
        description: "A beautiful floral summer dress perfect for any occasion. Made with lightweight, breathable fabric featuring a delicate flower pattern.",
        details: {
            material: "100% Cotton",
            care: "Machine wash cold",
            features: [
                "Adjustable straps",
                "Side pockets",
                "Elastic back panel",
                "Lined bodice"
            ],
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Pink", "Blue", "Green", "Purple"]
        },
        images: [
            "https://images.unsplash.com/photo-1528738716593-1306c2b538ec?q=80&w=1287&auto=format&fit=crop",
            "path/to/dress-detail1.jpg",
            "path/to/dress-detail2.jpg",
            "path/to/dress-back.jpg"
        ]
    },
    {
        id: 2,
        name: "Cherry Blossom Necklace",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1685970731850-322fbd92c898?q=80&w=1288&auto=format&fit=crop",
        category: "Accessories",
        description: "Delicate cherry blossom necklace crafted with attention to detail. Perfect for adding a touch of spring to any outfit.",
        details: {
            material: "Sterling Silver",
            length: "18 inches with 2-inch extender",
            features: [
                "Spring clasp closure",
                "Handcrafted details",
                "Tarnish-resistant coating"
            ],
            colors: ["Silver", "Rose Gold", "Gold"]
        },
        images: [
            "https://images.unsplash.com/photo-1685970731850-322fbd92c898?q=80&w=1288&auto=format&fit=crop",
            "path/to/necklace-detail1.jpg",
            "path/to/necklace-detail2.jpg",
            "path/to/necklace-worn.jpg"
        ]
    },
    {
        id: 3,
        name: "Elegant Evening Gown",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1470&auto=format&fit=crop",
        category: "Clothing",
        description: "Stunning evening gown for special occasions.",
        details: {
            material: "100% Silk",
            care: "Dry clean only",
            features: [
                "Floor-length design",
                "V-neckline",
                "Backless",
                "Lined bodice"
            ],
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Red", "Black", "Navy"]
        },
        images: [
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1470&auto=format&fit=crop",
            "path/to/gown-detail1.jpg",
            "path/to/gown-detail2.jpg",
            "path/to/gown-back.jpg"
        ]
    },
    {
        id: 4,
        name: "Pearl Earrings",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1470&auto=format&fit=crop",
        category: "Accessories",
        description: "Classic pearl earrings with delicate design.",
        details: {
            material: "Freshwater Pearls",
            length: "1 inch",
            features: [
                "Post-back closure",
                "Hypoallergenic",
                "Tarnish-resistant coating"
            ],
            colors: ["White", "Pink", "Black"]
        },
        images: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1470&auto=format&fit=crop",
            "path/to/earrings-detail1.jpg",
            "path/to/earrings-detail2.jpg",
            "path/to/earrings-worn.jpg"
        ]
    },
    {
        id: 5,
        name: "Casual Maxi Dress",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1470&auto=format&fit=crop",
        category: "Clothing",
        description: "Comfortable and stylish maxi dress for daily wear.",
        details: {
            material: "100% Rayon",
            care: "Machine wash cold",
            features: [
                "Maxi length design",
                "V-neckline",
                "Side pockets",
                "Lined bodice"
            ],
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Blue", "Green", "Yellow"]
        },
        images: [
            "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1470&auto=format&fit=crop",
            "path/to/maxi-detail1.jpg",
            "path/to/maxi-detail2.jpg",
            "path/to/maxi-back.jpg"
        ]
    },
    {
        id: 6,
        name: "Rose Gold Watch",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1468&auto=format&fit=crop",
        category: "Accessories",
        description: "Elegant rose gold watch with crystal details.",
        details: {
            material: "Stainless Steel",
            length: "7 inches",
            features: [
                "Quartz movement",
                "Water-resistant",
                "Crystal glass"
            ],
            colors: ["Rose Gold", "Silver", "Gold"]
        },
        images: [
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1468&auto=format&fit=crop",
            "path/to/watch-detail1.jpg",
            "path/to/watch-detail2.jpg",
            "path/to/watch-worn.jpg"
        ]
    },
    {
        id: 7,
        name: "Floral Blouse",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1470&auto=format&fit=crop",
        category: "Clothing",
        description: "Light and airy floral blouse perfect for spring.",
        details: {
            material: "100% Cotton",
            care: "Machine wash cold",
            features: [
                "Relaxed fit",
                "V-neckline",
                "Short sleeves",
                "Lined bodice"
            ],
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Pink", "Blue", "Yellow"]
        },
        images: [
            "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1470&auto=format&fit=crop",
            "path/to/blouse-detail1.jpg",
            "path/to/blouse-detail2.jpg",
            "path/to/blouse-back.jpg"
        ]
    },
    {
        id: 8,
        name: "Crystal Bracelet",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1469&auto=format&fit=crop",
        category: "Accessories",
        description: "Sparkling crystal bracelet for any occasion.",
        details: {
            material: "Crystal",
            length: "7 inches",
            features: [
                "Adjustable closure",
                "Hypoallergenic",
                "Tarnish-resistant coating"
            ],
            colors: ["Clear", "Pink", "Blue"]
        },
        images: [
            "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1469&auto=format&fit=crop",
            "path/to/bracelet-detail1.jpg",
            "path/to/bracelet-detail2.jpg",
            "path/to/bracelet-worn.jpg"
        ]
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedSize = '';
let selectedColor = '';

// Product detail page functionality
function loadProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Update main product information
    document.getElementById('mainImage').src = product.image;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('productDescription').textContent = product.description;

    // Load thumbnail gallery
    const thumbnailGallery = document.querySelector('.thumbnail-gallery');
    thumbnailGallery.innerHTML = '';
    product.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = product.name;
        img.onclick = () => updateMainImage(image);
        thumbnailGallery.appendChild(img);
    });

    // Load product details tab
    const detailsPane = document.getElementById('details');
    if (detailsPane) {
        const detailsList = document.createElement('ul');
        for (const [key, value] of Object.entries(product.details)) {
            if (Array.isArray(value)) continue;
            const li = document.createElement('li');
            li.textContent = `${key}: ${value}`;
            detailsList.appendChild(li);
        }
        detailsPane.appendChild(detailsList);
    }
}

// Image zoom functionality
function initializeZoom() {
    const mainImage = document.getElementById('mainImage');
    const zoomLens = document.querySelector('.zoom-lens');
    
    if (!mainImage || !zoomLens) return;

    mainImage.addEventListener('mousemove', (e) => {
        const rect = mainImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        zoomLens.style.display = 'block';
        zoomLens.style.left = `${x - 50}px`;
        zoomLens.style.top = `${y - 50}px`;
    });

    mainImage.addEventListener('mouseleave', () => {
        zoomLens.style.display = 'none';
    });
}

// Size and color selection
function selectSize(size) {
    selectedSize = size;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === size) btn.classList.add('active');
    });
}

function selectColor(color) {
    selectedColor = color;
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.color === color) btn.classList.add('active');
    });
}

// Quantity controls
function incrementQuantity() {
    const input = document.getElementById('quantity');
    if (input.value < 10) input.value = parseInt(input.value) + 1;
}

function decrementQuantity() {
    const input = document.getElementById('quantity');
    if (input.value > 1) input.value = parseInt(input.value) - 1;
}

// Enhanced add to cart functionality
function addToCart() {
    const productId = new URLSearchParams(window.location.search).get('id');
    const product = products.find(p => p.id === parseInt(productId));
    const quantity = parseInt(document.getElementById('quantity').value);

    if (!product) return;
    if (!selectedSize && product.category === 'Clothing') {
        showNotification('Please select a size', 'error');
        return;
    }
    if (!selectedColor) {
        showNotification('Please select a color', 'error');
        return;
    }

    const cartItem = {
        ...product,
        quantity,
        size: selectedSize,
        color: selectedColor,
        total: product.price * quantity
    };

    const existingItemIndex = cart.findIndex(item => 
        item.id === cartItem.id && 
        item.size === cartItem.size && 
        item.color === cartItem.color
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
        cart[existingItemIndex].total = cart[existingItemIndex].quantity * cart[existingItemIndex].price;
    } else {
        cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Added to cart successfully!');
}

// Enhanced notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    notification.style.animation = 'slideIn 0.5s forwards';

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s forwards';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Size guide modal
function openSizeGuide() {
    const modal = document.getElementById('sizeGuideModal');
    modal.style.display = 'block';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('sizeGuideModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Tab functionality
function showTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    const productId = new URLSearchParams(window.location.search).get('id');
    if (productId) {
        loadProductDetails(parseInt(productId));
        initializeZoom();
    }
    updateCartCount();
});

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

// Load products function
function loadProducts(container) {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})" class="add-to-cart-btn">
                Add to Cart
            </button>
        `;
        container.appendChild(productCard);
    });
}

// Load products on the homepage
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        loadProducts(productGrid);
    }

    // Initialize cart count
    updateCartCount();
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change menu icon
        const menuIcon = mobileMenu.querySelector('i');
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('active')) {
        if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
            navLinks.classList.remove('active');
            const menuIcon = mobileMenu.querySelector('i');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    }
});

// Close mobile menu when clicking a link
const navLinksArray = document.querySelectorAll('.nav-links a');
navLinksArray.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const menuIcon = mobileMenu.querySelector('i');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.category-card, .product-card').forEach(element => {
    observer.observe(element);
});
