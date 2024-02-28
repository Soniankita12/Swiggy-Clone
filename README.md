# Swiggy Clone ❤️🧠

#parcel
-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm - written in c++
-catching -faster builds
-Image optimisation
// most expensive thing in a web browser is to load images in your page
if you use parces it will use image optimization
-Minification of file
-Bundling
-compression of file
-Consistent Hashing
-Code Splitting
-Diffrential Bundling- to support older browser
-Diagnostic
-Error Handling
-Https
-Tree shaking - remove unused code
-Different dev and prod bundles
while we create build for production (npx parcel build index.html) we get an error
"main": "index.js", in package.json file it's
a way to tell npm that it's entry point in our app so we will remove this from our package.json file

//project making

- Header
  -logo
  -Nav Items
- Body
  -Search-Bar
  -RestaurantContainer
  -Restaurant-Card
  -Img
  -Name Of Restaurant, Star Rating, cuisins etc
  \*Footer
  -copyright
  -Links
  -Address
  -Contact-Info and other info

// there are two types of routing you can have in your application(web-apps)
1-client side routing
2-server side routing
** Class based component
a class based components is a class which extend react.component and it has a render method which return some peice of jsx

** functional Based component
functinal component is a fun that return some jsx


# Redux Toolkit (RTK)
 -Install @reduxjs/toolkit and react-redux
 -Build our store
 -connect our store to our app
 -build our slice(cart-slice)
 -dispatch(action)
 -selector

 # when you subscribe a store using useSelector make sure you subscribe to a right store
 
 # Immer (redux use this)

 # redux-devtool

 # Type of testing (as a developer)
 ## 1-Unit testing
 ## 2-Integration testing
 ## 3-End to End Testing (e2e testing)

  React Testing Library(use Jest)
  Jest
  # Setting up Testing in our app
   -Install React Testing Library
   -Install Jest
   -Installed Babel dependencies and configured babel 
   -configure parcel config to disable default babel transpilation
   -Jest Configuration( npx jest --init )
   -install jsdom library
   --Install @babel/preset-react -to make jsx work in test cases
   -include @bable/preset-react inside my babel config
   -Install @testing-library/jest-dom