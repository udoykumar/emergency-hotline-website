### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   answer :
   getElementById("id") → নির্দিষ্ট id এর একটা element দিবে।
   getElementsByClassName("class") → ওই class এর সব element রিটার্ন করে HTMLCollection আকারে live collection DOM আপডেট হওয়ার সাথে সাথে আপডেট হবে
   querySelector("css-selector") → প্রথম ম্যাচ হওয়া element দেয়। (class, id) সব css selector ধরা যাই।
   querySelectorAll("css-selector") → সবগুলো ম্যাচ হওয়া element দেয় NodeList (not live) আকারে। DOM আপডেট হওয়ার সাথে সাথে আপডেট হবে না।

2. How do you **create and insert a new element into the DOM**?

   answer:
   ```js
   const div = document.createElement("div");
   div.innerText = "Hello World!";
   document.body.appendChild(div);
   ```

   createElement → নতুন element বানায়।
   appendChild (বা prepend, before, after) এভাবে করে DOM এ ঢোকায়।

3. What is **Event Bubbling** and how does it work? 4. What is **Event Delegation** in JavaScript? Why is it useful? 5. What is the difference between **preventDefault() and stopPropagation()** methods?

   answer:
  ```js
 document.getElementById("cardContainer").addEventListener("click", (e) => {
   if(e.target.className.includes("cardBtn"){
   console.log("Clicked cardBtn:", e.target);
   }
   });
```

4. What is Event Delegation in JavaScript? Why is it useful?

   answer:
 ```js
    document.getElementById("cardContainer").addEventListener("click", (e) => {
     if(e.target.className.includes('cardBtn){
        console.log("Clicked cardBtn:", e.target);
      }
     });
  ```
   Parent এ listener বসানো হয়, event bubble হয়ে আসলে target check করা হয়।
   কেন দরকার → আলাদা আলাদা child এ listener না দিয়ে, parent এর একটাই listener দিয়ে সব manage করা যায়। Performance বাড়ে, dynamic element এও কাজ করে।

5. What is the difference between preventDefault() and stopPropagation() methods?

   answer:
   preventDefault() → element এর default কাজ বন্ধ করে (যেমন: form submit, link redirect)।
   stopPropagation() → event টা parent এ আর bubble হতে দেয় না।

---
