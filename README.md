**Project Portfolio: JNUMarket**

**Overview:**
JNUMarket is an online platform facilitating buying and selling activities, providing a user-friendly experience for both buyers and sellers. Developed using Node.js, Express, MySQL, and EJS, the application offers secure authentication, an intuitive product showcase, seamless shopping cart functionality, efficient order placement, and automated PDF invoice generation.

**Key Features:**
1. **Secure Authentication using Session:**
   - Implements secure user authentication using session management for a safe and reliable user experience.

2. **Admin Product Management:**
   - Allows admin users to create, edit, and delete products, ensuring efficient management of the platform's product catalog.

3. **Intuitive Product Showcase:**
   - Displays products in a user-friendly manner, providing an intuitive showcase for buyers to explore and make informed decisions.

4. **Seamless Shopping Cart Functionality:**
   - Enables users to easily add and manage items in their shopping cart, streamlining the shopping experience.

5. **Efficient Order Placement:**
   - Facilitates the swift and secure placement of orders, enhancing the overall efficiency of the buying process.

6. **Automated PDF Invoice Generation:**
   - Automatically generates PDF invoices for completed orders, providing users with a comprehensive record of their transactions.

**GitHub Repository:**
[JNUMarket GitHub Repository](https://github.com/Rohitkr2510/thoughtcanva)

**Setup Instructions:**
To set up JNUMarket on your local machine, follow these steps:

1. **Clone the Repository:**
   ```
   git clone https://github.com/Rohitkr2510/thoughtcanva
   ```

2. **Update Database Credentials:**
   - In the `.env` file, update the database credentials to connect to your MySQL instance.

3. **Install Dependencies:**
   ```
   npm install
   ```

4. **Start the Application:**
   ```
   npm start
   ```

5. **Access the Website:**
   - The application will be hosted on `localhost:3000`.

**API Routes:**

| Route                                | HTTP Method | Middleware   | Purpose                                           |
| ------------------------------------ | ----------- | ------------ | ------------------------------------------------- |
| `/auth/login`                        | GET         |              | User login page                                   |
| `/auth/signup`                       | GET         |              | User signup page                                  |
| `/auth/login`                        | POST        |              | User login action                                |
| `/auth/signup`                       | POST        |              | User signup action                               |
| `/auth/logout`                       | POST        | `isAuth`      | User logout action                               |
| `/auth/reset`                        | GET         |              | Password reset page                              |
| `/auth/reset`                        | POST        |              | Password reset action                            |
| `/auth/reset/:token`                  | GET         |              | New password page for password reset             |
| `/auth/new-password`                  | POST        |              | New password action for password reset           |
| `/admin/add-product`                 | GET         | `isAuth`      | Admin page for adding a new product              |
| `/admin/products`                    | GET         | `isAuth`      | Admin page displaying all products               |
| `/admin/add-product`                 | POST        | `isAuth`      | Admin action for adding a new product            |
| `/admin/edit-product/:productId`     | GET         | `isAuth`      | Admin page for editing a product                 |
| `/admin/edit-product`                | POST        | `isAuth`      | Admin action for editing a product               |
| `/admin/delete-product`              | POST        | `isAuth`      | Admin action for deleting a product              |
| `/`                                  | GET         |              | Home page displaying featured products           |
| `/products`                          | GET         |              | Page displaying all available products           |
| `/products/:productId`               | GET         |              | Page displaying a specific product               |
| `/cart`                              | GET         | `isAuth`      | Shopping cart page                                |
| `/cart`                              | POST        | `isAuth`      | Action for adding items to the shopping cart     |
| `/cart-delete-item`                  | POST        | `isAuth`      | Action for deleting items from the shopping cart |
| `/create-order`                      | POST        | `isAuth`      | Action for creating a new order                  |
| `/orders`                            | GET         | `isAuth`      | Page displaying user's order history            |

**Additional Information:**
- Explore the project structure, code organization, and security measures in place.

Feel free to reach out for any inquiries or collaboration opportunities!
