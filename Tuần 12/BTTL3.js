class Review {
    constructor(name, age, content, score) {
        this.name = name;
        this.age = age;
        this.content = content;
        this.score = parseInt(score);
    }
}

class Product {
    constructor(name, price, image, reviews = []) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.reviews = reviews;
    }

    getAverageScore() {
        if (this.reviews.length === 0) return "0.00";
        let total = this.reviews.reduce((sum, review) => sum + review.score, 0);
        return (total / this.reviews.length).toFixed(2);
    }

    // Phương thức thêm đánh giá
    addReview(newReview) {
        this.reviews.push(newReview);
    }
}

const myProduct = new Product(
    "Laptop Dell Inspire 2819",
    "15,500,000 VND",
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    [
        new Review("Alice", 25, "Excellent work!", 4),
        new Review("John", 35, "Good price!", 5)
    ]
);

function renderProductInfo() {
    document.getElementById("prod-name").textContent = myProduct.name;
    document.getElementById("prod-price").textContent = "Giá: " + myProduct.price;
    const avgScore = myProduct.getAverageScore();
    const totalRev = myProduct.reviews.length;
    document.getElementById("prod-rating").textContent = `Đánh giá sản phẩm: ${avgScore} (${totalRev} đánh giá)`;
    const reviewsContainer = document.getElementById("reviews-list");
    reviewsContainer.innerHTML = ""; 

    myProduct.reviews.forEach(rev => {
        const reviewHTML = `
            <div class="review-box">
                <p class="mb-1 text-secondary">** Người đánh giá: ${rev.name} - ${rev.age} tuoi</p>
                <p class="mb-1 text-dark">${rev.content}</p>
                <p class="mb-0 text-end fw-bold text-secondary">Điểm: ${rev.score}</p>
            </div>
        `;
        reviewsContainer.innerHTML += reviewHTML;
    });
}

document.getElementById("addReviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("revName").value;
    const age = document.getElementById("revAge").value;
    const content = document.getElementById("revContent").value;
    const score = document.getElementById("revScore").value;
    const newReview = new Review(name, age, content, score);
    myProduct.addReview(newReview);

    renderProductInfo();
    this.reset();
    
    alert("Thêm đánh giá thành công!");
});

document.addEventListener("DOMContentLoaded", renderProductInfo);
