import React from 'react';

const Blogs = () => {
    return (
        <div className='p-6'>
            <p className='text-3xl font-semibold text-indigo-600'>What is Context api ?</p>
            <p className='text-3xl font-semibold'>Ans :The context api provides a way to pass data from component to component without having to pass data manually.Is (context api)a way for a React app to effectively produce global variables that can be passed around.This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on.Context api made a good solution to pass data from parents to all child and shibling component. If need to share state between lot's of components context api is good solution but if need to pass data in one component or its relevent to its children, then passing it in props is more indicative and nicer.</p>
            <br />
            <br />
            <p className='text-3xl font-semibold text-indigo-600'>What is semantic element?</p>
            <p className='text-3xl font-semibold'>Ans : Semantics means the meaning and interpretation of words, signs, and sentence structure.
                There are also semantic tags and elements is different programming language.
                In HTML semantic tags clearly defines the purpose of html elements.example of html semantic tags are the header,footer,section,article etc.These are considered as semantic tag because these tags exactly describe the purpose of element and the type of content inside them.In semantic tag the header tag conatin a heading of any content or page it will show at the top of any page or comtent .But the div tag colud not contain any type if information.These are the difference between semantic tag or non semantic tag.

            </p>
        </div>
    );
};

export default Blogs;