import React from 'react';

const Blog = () => {
    return (
        <div className='ml-8 mt-5'>
            <div>
                <h1 className='text-3xl'>1. How will you improve the performance of a React Application?</h1>
                <p className='ml-8 mt-2'>কোনো রিয়েক্ট অ্যাপ্লিকেশন তৈরি করার সময়, অ্যাপ্লিকেশনটি কীভাবে কাজ করবে এবং শেষ পর্যন্ত কি কি কাজ করতে হবে তা নিয়ে অনেক চিন্তাভাবনা করা হয়। রিয়েক্ট হল ইউজার ইন্টারফেস তৈরির জন্য একটি জাভাস্ক্রিপ্ট লাইব্রেরি। আপনি একটি রিয়েক্ট অ্যাপ্লিকেশন অপ্টিমাইজ করার বিভিন্ন উপায় অন্বেষণ করতে পারেন যা আপনার অ্যাপ্লিকেশনগুলির জন্য গতি এবং সামগ্রিক ব্যবহারকারীর অভিজ্ঞতায় উল্লেখযোগ্য বৃদ্ধি সক্ষম করতে পারে। <br />
                    1. Use react.fragment
                    2. use production build
                    3. use callback()
                    4. use loading
                </p>
            </div>
            <div>
                <h1 className='text-3xl'>2. What are the different ways to manage a state in a React application??</h1>
                <p className='ml-8 mt-2'>আপনার রিয়েক্ট অ্যাপগুলিতে সঠিকভাবে পরিচালনা করার জন্য আপনাকে চারটি প্রধান ধরনের state প্রয়োজন: <br /> ১। Local state: লোকাল স্টেট হল ডেটা যা আমরা এক বা অন্য উপাদানে পরিচালনা করি। <br />
                    ২। Global state: গ্লোবাল স্টেট হল ডেটা যা আমরা একাধিক উপাদান জুড়ে পরিচালনা করি। <br />
                    ৩। Server state: একটি বহিরাগত সার্ভার থেকে আসা ডেটা যা অবশ্যই আমাদের UI অবস্থার সাথে একত্রিত হতে হবে। <br />
                    ৪। URL state: পাথনাম এবং ক্যোয়ারী প্যারামিটার সহ আমাদের URL-এ বিদ্যমান ডেটা।</p>
            </div>
            <div>
                <h1 className='text-3xl'>3. How does prototypical inheritance work??</h1>
                <p className='ml-8 mt-2'>প্রোটোটাইপ্যাল ইনহেরিট্যান্স হল জাভাস্ক্রিপ্টের একটি properties যা object method এবং properties যোগ করতে ব্যবহৃত হয়। এটি এমন একটি পদ্ধতি যার মাধ্যমে একটি object অন্য বস্তুর properties এবং method inheritor হতে পারে।</p>
            </div>
            <div>
                <h1 className='text-3xl'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                <p className='ml-8 mt-2'>* Why you do not set the state directly in React- যদি এটি সরাসরি আপডেট করেন, তাহলে setState() কে পরে কল করলে আপনার করা আপডেটটি বদলে যেতে পারে। এটি কল কর‍লে বর্তমান মান ফিরিয়ে দেবে। <br />
                    * Why you do not set products = [...] instead, you use the setProducts- products এর যে মান সেট করা হয় useState এর ভিতরে, products এর মান কে update করার জন্য setProducts কে কল করা হয়।
                </p>
            </div>
            <div>
                <h1 className='text-3xl'>5. What is a unit test? Why should write unit tests?</h1>
                <p className='ml-8 mt-2'>Unit test- ইউনিট টেস্টিং হল একটি সফ্টওয়্যার পরীক্ষার কৌশল যার মাধ্যমে সফ্টওয়্যারের পৃথক ইউনিটগুলি যেমন কম্পিউটার প্রোগ্রাম মডিউলের গ্রুপ, ব্যবহারের পদ্ধতি এবং অপারেটিং পদ্ধতিগুলি ব্যবহারের জন্য উপযুক্ত কিনা তা নির্ধারণ করতে পরীক্ষা করা হয়। একটি পৃথক উপাদান একটি পৃথক ফাংশন বা একটি পদ্ধতি হতে পারে। ইউনিট টেস্টিং সাধারণত ডেভেলপার দ্বারা সঞ্চালিত হয়. <br />
                    Why should write unit tests-
                    ইউনিট টেস্টিং সফ্টওয়্যার ডেভলপার সফ্টওয়্যারটির ডিজাইনের মাধ্যমে চিন্তা করতে দেয় এবং কোড লেখার আগে তাদের কী করতে হবে। এটি তাদের দৃষ্টি নিবদ্ধ রাখতে সাহায্য করতে পারে এবং আরও ভাল ডিজাইন তৈরি করতে তাদের সাহায্য করতে পারে।
                </p>
            </div>
        </div>
    );
};

export default Blog;