# My React-Redux App

- I am using Vite to setup my project with Bun as a package manager because I find it much faster when I need to install new dependencies and the runtime has been proved to be quicker than the NodeJS
- In my app, I am using Redux Toolkit with the Redux Thunk middleware and Axios for getting products from the API and post new products onto the API
- Additionally, I am using Bootstrap for demo purposes because it has functional components that can be used quickly to demonstrate the workflow of displaying posts and creating a form that is similar to real-world product and post it to the API. Firstly, I thought that I was making a mistake as the code is properly working but it still cannot display the new product to the listing page. So I tried to test the API by using Postman and manual testing in Redux Toolkit and it worked really well. So I looked up on the documentation of the API and they said that the CRUD operations with the API is just for testing and demo only.

  * My workflow creating the app:
- First of all, I install the dependencies and always try to do the UI layout first as it is really crucial to have a good layout that is suitable for the app
- Secondly, I setup the store with the reducer from ReduxToolkit with 3 initialState including posts, isLoading, error
- I manually test it out in the main page to see if my code is correct and then I create getPost thunk so it will get the posts from the API. After that, I go to the listing page and dispatch it so it gets the posts and I use map() to get every post displaying them out
- Thirdly, I create the second function of adding posts by setting up the form and create 2 states( I usually will use react-hook-form as it can be easier to manage the states if it scales out in the future with more states).
- The states will be updated in a postInfo object and I will send it to the dispatch with the new addPost thunk that will take postInfo as action payload and post it up
- Finally, in the addForm component, i will use trycatch block and depending on the result that the promise gives, it will run to the alert that I setup inside the trycatch block. After testing the API and manual testing inside RTK, it works really well and gives out 201 status.

  
- Thank you for looking at my code and I am sorry if my code feels pretty heavy or not too pretty looking!
