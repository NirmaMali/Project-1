# 🌍 Wanderlust

Wanderlust is a full-stack web application inspired by Airbnb where users can explore travel listings, create their own listings, upload images, and leave reviews.

The application allows travelers to discover destinations and hosts to share their properties with others.

---

# 🚀 Features

### 🏠 Listings

* Create a new listing
* Edit existing listings
* Delete listings
* View listing details
* Upload listing images using Cloudinary

### 👤 Authentication

* User signup
* User login
* Secure authentication using Passport.js
* Logout functionality

### ⭐ Reviews

* Add reviews to listings
* Star rating system
* Delete reviews

### 🗺 Map Integration

* Displays listing location on an interactive map using Mapbox

### 💰 Pricing UI

* Toggle to show price with tax

### 🎨 UI

* Responsive design
* Airbnb-inspired layout
* Clean card-based listing interface

---

# 🛠 Tech Stack

### Frontend

* HTML
* CSS
* Bootstrap
* EJS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Passport-Local-Mongoose

### Other Tools

* Cloudinary (Image hosting)
* Multer (File uploads)
* Joi (Validation)
* Connect-Mongo (Session storage)
* Mapbox (Maps)

---

# 📁 Project Structure

```
Wanderlust
│
├── controllers
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── models
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── public
│   ├── css
│   │   ├── style.css
│   │   └── rating.css
│   │
│   └── js
│       ├── script.js
│       └── map.js
│
├── views
│   ├── includes
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   └── flash.ejs
│   │
│   ├── layouts
│   │   └── boilerplate.ejs
│   │
│   ├── listings
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── edit.ejs
│   │   └── show.ejs
│   │
│   └── users
│       ├── login.ejs
│       └── signup.ejs
│
├── app.js
├── middleware.js
├── cloudConfig.js
├── schema.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

### 1 Clone the repository

```
git clone https://github.com/YOUR_USERNAME/wanderlust.git
```

### 2 Navigate to project folder

```
cd wanderlust
```

### 3 Install dependencies

```
npm install
```

### 4 Create `.env` file

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret

MAPBOX_TOKEN=your_mapbox_token

DB_URL=your_mongodb_connection_string

SESSION_SECRET=your_secret
```

### 5 Run the server

```
node app.js
```

or

```
nodemon app.js
```

---

# 🌐 Run the Application

Open your browser:

```
http://localhost:3000
```

---

# 📸 Screenshots

* Homepage
* Create Listing Page
* Reviews Section
* Map Location Display

<img width="1919" height="922" alt="image" src="https://github.com/user-attachments/assets/f81dff01-2f48-48fc-b493-0a09c5355989" />

<img width="1919" height="925" alt="image" src="https://github.com/user-attachments/assets/4d747f09-3715-463a-9cb5-8b637acbd519" />

<img width="1919" height="922" alt="image" src="https://github.com/user-attachments/assets/e6da1242-3f36-4e77-96e1-85aad4537b32" />


---

# 🔮 Future Improvements

* Search functionality
* Booking system
* Wishlist feature
* Payment integration
* Advanced filters
* User profiles

---

# 👨‍💻 Author

**Nirma Mali**

Computer Science Engineering Student
Interested in Full Stack Development and scalable backend systems.

---

# ⭐ Support

If you like this project, please **give it a star ⭐ on GitHub**.
