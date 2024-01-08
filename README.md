# Next.js E-Commerce App

This is a sample Next.js application for an e-commerce website with features such as product listing, shopping cart, and a simple checkout simulation.

## Features

- Display a list of products with name, image, price, and an "Add to Cart" button.
- Implement pagination or infinite scrolling to load more products.
- Fetch product data from the [Fake Store API](https://fakestoreapi.com/docs).
- Handle loading states and errors gracefully.
- Allow users to add and remove products from the cart.
- Display a cart summary with total items and total price.
- Implement a checkout button leading to a simple checkout page.
- Mock checkout form asking for name, address, and payment details (no real payment processing).
- On submission, display a confirmation message with the order summary.
- Design a clean and responsive layout using HTML/CSS with Tailwind CSS.

## Technologies Used

- Next.js
- Tailwind CSS
- Context API for state management
- Node.js 14

## Getting Started

### Prerequisites

- Node.js 14 or later installed
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/therohit25/nextjs_ecommerce.git
cd nextjs_ecommerce
```

2. Install dependencies:

```bash
npm install
```

3. Start Development Server:

```bash
npm run dev
```

Visit http://localhost:3000 in your browser to see the application.
