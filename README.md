# Appointment Booking System

**EasyReserve** is a web-based Booking System developed as part of the Digital Egypt Pioneers Initiative (DEPI) graduation project. It allows users to conveniently schedule and manage their appointments , while also enabling admins to showcase their services and availability, while offering an admin dashboard for managing bookings and viewing statistics. It is designed to support secure, scalable, and responsive features for a seamless user experience. 

## Features
- **User-Friendly Interface**:users can browse through available services, and create appointments 
- **Service Display**:  displaying services and crud operations for admins 
- **Appointment Booking**: users can book, view, cancel their appointments with ease. 
- **Secure Authentication**: users and admins can log in securely to manage their appointments and profiles. 
- **Admin Features**: can manage their appointments, services, and availability directly within the system. 
- **Booking Review**: Users can view and cancel their bookings.
- **Statistics Dashboard**: The system provides a dashboard to view booking statistics such as the number of bookings, types of services, etc.
  - **Responsive Design**: The interface should be fully responsive, supporting both mobile and desktop views.
- **Database Management**: MongoDB will be used to store data for bookings and users.
- **Security**: Implement CSRF protection to ensure secure data requests.
- **Payment Integration**: Integration with third-party payment systems like Stripe or PayPal for processing transactions.

## Technologies Used
- **Frontend**: [React.js](https://reactjs.org/) for the user interface.
- **Backend**: Node.js with Express.js to manage the server and APIs.
- **Database**: MongoDB for storing user data, appointments, and admin/user information.
- **Authentication**:Tokens for secure login sessions.
- **Email Notifications**: Confirming appointments or notification of cancellation
- **Payment Integration**: PayPal for handling payments.
- **Security**: CSRF protection and secure data handling.

## Front-End Structure

```plaintext
Frontend-booking-system/
│
├── node_modules/
│
├── public/
│   └── images/
│       └── stethoscope.svg
│
├── src/
│   ├── assets/
│   │   └── logo.png
│   │
│   ├── components/
│   │   └── Navbar/
│   │       ├── Navbar.jsx
│   │       └── Navbar.css
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Review/
│   │   │   ├── Review.jsx
│   │   │   └── Review.css
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.css
│   │   ├── Signup/
│   │   │   ├── Signup.jsx
│   │   │   └── Signup.css
│   │   ├── Success/
│   │   │   ├── Success.jsx
│   │   │   └── Success.css
│   │   └── Time/
│   │       ├── Time.jsx
│   │       └── Time.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

## Screenshots

- **Home page** 


![home1](https://github.com/user-attachments/assets/504d7d8e-f54b-4fb8-a605-19a1df08cad3)


![home2](https://github.com/user-attachments/assets/4bf22354-7b4c-4096-a840-ffb4b369d989)


- **Login page** 


![login1](https://github.com/user-attachments/assets/30f9f733-8142-4613-bb8e-cd68f53146be)


- **Signup page** 


![signup1](https://github.com/user-attachments/assets/4eb444ca-6f62-438c-b640-104dcae43373)


![signup2](https://github.com/user-attachments/assets/b1b2fa4b-0886-4ff0-a4e1-ff0748a614e2)


- **Testimonials page** 


![testimonials1](https://github.com/user-attachments/assets/e9aa498c-da62-4dae-a36a-f4c790c41a0e)


![testimonials2](https://github.com/user-attachments/assets/7da7fde9-597a-4bd1-a3f7-016cd25824aa)


- **Services page** 


![services1](https://github.com/user-attachments/assets/ec52752c-428a-4e9c-bee0-a0af227e8c05)


![services2](https://github.com/user-attachments/assets/f3cb29d1-f399-4ece-901a-d582e8ec0400)


- **Time page** 


![time](https://github.com/user-attachments/assets/c19d8acd-4448-45e2-8d14-f68fb500fa9b)


- **Review page** 


![review](https://github.com/user-attachments/assets/45f38156-a070-4dd4-9226-272955abbfb9)


- **Success page** 


![success](https://github.com/user-attachments/assets/0c9d9567-7213-441c-9411-4f10a357ccf7)


![success2](https://github.com/user-attachments/assets/65b65696-a30f-4478-a56b-0e19f73206a8)


- **User Dashboard page** 


![userDashboard1](https://github.com/user-attachments/assets/c98aaf8d-c34b-4be2-9d3c-3427b573b272)


- **Admin Dashboard page** 


![adminDashboard1](https://github.com/user-attachments/assets/982c0530-bade-41b8-8c12-6fbdfc5bbe1c)


![adminDashboard2](https://github.com/user-attachments/assets/e25c51de-1802-43d9-82ac-ca61a70bd67e)


![adminDashboard3](https://github.com/user-attachments/assets/015ef9fa-797d-4b98-b508-d5665fccd1b9)


![adminDashboard4](https://github.com/user-attachments/assets/af94540d-3cd3-4e6b-bb1d-6857e3e13fc9)


![adminDashboard5](https://github.com/user-attachments/assets/1613db6f-3389-4c82-8105-a5a0df13a1cd)


- **Responsive mopile mode** 


![responsive1](https://github.com/user-attachments/assets/e05f7ea1-6222-463d-b0fd-7aecdba53a98)


![responsive2](https://github.com/user-attachments/assets/0a2edf7c-993c-44be-9c76-0287c16c19dd)


![responsive3](https://github.com/user-attachments/assets/7dfc5ccc-234f-4f77-bffd-7922fc3329c6)


![responsive4](https://github.com/user-attachments/assets/ace1a978-8866-48ce-933e-391a507dc92f)


![responsive5](https://github.com/user-attachments/assets/c9d8b18f-ee62-4eff-aa71-7873ed58b4b9)


![responsive6](https://github.com/user-attachments/assets/5c5ec4d3-cd4d-4545-b1eb-8e6c1521d813)


![responsive7](https://github.com/user-attachments/assets/e6739d3a-80ce-4180-945c-ea7146e75923)


![responsive8](https://github.com/user-attachments/assets/466be5a2-6cf3-4c21-85e9-280a90e6c8c7)


![responsive9](https://github.com/user-attachments/assets/fb7f2dcc-1c77-4ec7-a9b6-0754f135011a)


![responsive10](https://github.com/user-attachments/assets/e74ecfa1-7842-4eb8-b12a-ec71a29d81d2)


![responsive11](https://github.com/user-attachments/assets/d979080b-8d52-45a0-acb6-12a44f4eeeaa)


![responsive12](https://github.com/user-attachments/assets/5b7f4521-deb1-41a2-a162-7d36e6615077)


![responsive13](https://github.com/user-attachments/assets/cb6ec759-a07e-42fb-9553-71a5c455d0e9)


![responsive14](https://github.com/user-attachments/assets/abbe161e-60fa-4dae-a585-38c4c40b48a8)


![responsive15](https://github.com/user-attachments/assets/b5126c5d-0872-404a-b1ef-c8e75414d850)


## To Run The App
- **npm start** for running the backend
- **npm run dev** for running the frontend
- You would also require a couple of things for running the database, such as a .env file and database connection to MongoDB
  -port=3000
  -CONNECTION_STRING=
  -TRAIL_MAIL= 
  -TRAIL_PASSWORD= 
  
  -PAYPAL_CLIENT_ID=
  -PAYPAL_SECRET=
  -PAYPAL_BASE_URL=https://api-m.sandbox.paypal.com
  -BASE_URL=http://localhost:3000
  -FRONT_BASE_URL=http://localhost:4000
