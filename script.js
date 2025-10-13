// index.html এ থাকা .slides ক্লাসটিকে নির্বাচন করা হলো
const slidesContainer = document.querySelector(".slides");

// মোট স্লাইডের সংখ্যা (আপনার ক্ষেত্রে 3টি ছবি)
const totalSlides = 3;

// বর্তমান স্লাইড ট্র‍্যাক করার জন্য ভ্যারিয়েবল
let slideIndex = 0; 

// প্রতি 3.5 সেকেন্ড (3500 মিলিসেকেন্ড) পর পর স্লাইড পরিবর্তন
const sliderInterval = setInterval(() => {
    // ইন্ডেক্সকে 0, 1, 2 এর মধ্যে রাখা হলো
    slideIndex = (slideIndex + 1) % totalSlides; 
    
    // স্লাইড সরানোর জন্য CSS transform ব্যবহার করা হলো (যেমন: 0%, -100%, -200%)
    const transformValue = -slideIndex * 100;
    
    slidesContainer.style.transform = `translateX(${transformValue}%)`;
}, 3500);

// স্লাইড ট্রানজিশন (পরিবর্তনের সময়) 0.5 সেকেন্ডে সেট করা হলো
// এই লাইনটি নিশ্চিত করে যে স্লাইড পরিবর্তন মসৃণ দেখাবে
slidesContainer.style.transition = "transform 0.5s ease-in-out";
