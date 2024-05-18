# Functional Component is a js function that returns  React element

# 2 types of export/import

- Default Export/Import
export default Component;
import Component from "path";

- Named export/import
export const Component;
import {Component} from "path";


# React Hooks
(Normal Js utility functions)
- useState
- useEffect

# Reconiliation Algorithm -  React Fiber
- Virtual DOM is reprentation of actual DOM
Go through this
https://github.com/acdlite/react-fiber-architecture

# whenever state variable update, react trigger a reconciliation cycle (re-rendering of whole component)

# 2 Type of Routing in web apps
- client side routing
- server side routing

# Study https://cloud.google.com/cloud-console/?utm_source=google&utm_medium=cpc&utm_campaign=japac-IN-all-en-dr-BKWS-all-hv-trial-EXA-dr-1605216&utm_content=text-ad-none-none-DEV_c-CRE_634266707488-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20-Management%20Tools-Cloud%20Console-google%20console-main-KWID_43700074189180532-aud-970366092687%3Akwd-131969947466&userloc_9302983-network_g&utm_term=KW_google%20console&gad_source=1&gclid=Cj0KCQjw0MexBhD3ARIsAEI3WHJE0hPxKKydbvzeVUdcBXsIovvbhwaNflrZFScuBBXMCgsNcuo6Fx0aAi4FEALw_wcB&gclsrc=aw.ds


# HOOKS - It is just a utility function

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector


# what is the difference between 
  <button onClick={() => handleAddItems(item)} 
and
  <button onClick={handleAddItems}
and 
  <button onClick={handleAddItems(item}
In react 

In React, all three examples involve handling a click event on a button, but they differ in how they handle passing parameters to the event handler function handleAddItems.

<button onClick={() => handleAddItems(item)}>In this example, an arrow function is used as an anonymous function to wrap the call to handleAddItems(item). This is often used when you need to pass parameters to the event handler. Here, item is passed as a parameter to handleAddItems when the button is clicked.
<button onClick={handleAddItems}>Here, you are directly passing a reference to the handleAddItems function. This means that when the button is clicked, handleAddItems will be called without any parameters. If handleAddItems requires parameters, they need to be defined beforehand or accessed from a higher scope.
<button onClick={handleAddItems(item)}>This syntax is incorrect in React. If you write it this way, handleAddItems will be called immediately when the component renders, and the return value (if any) will be passed as the event handler. This is not the desired behavior for handling click events. If you need to pass parameters, you should use the first example or bind parameters to the function beforehand.
So, in summary:

Use the first example when you need to pass parameters to the event handler.
Use the second example when no parameters are needed for the event handler.
The third example is incorrect syntax for handling click events in React.



#