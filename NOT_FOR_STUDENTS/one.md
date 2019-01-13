# Workbook 1, Page 1

You should have already looked at the [index](index.html) page.

You should read this page in the web browser to see how it looks. You should also read the "source" (html file and css files) for this page to see how they work.

Part of the idea of this page is to get you used to looking inside of HTML files when you read (and work on) workbooks. So, even if you know HTML well, please have a look at this file.

Note that for this workbook page, you don't have to do anything other than read. We encourage you to make changes (so you can see the effects), but we are simply going to assume that you've done the "work". Throughout the page, there are suggestions for things to try to make sure that you understand how things work.

For CS559, we will assume that you know the basics of how to make web pages so that you can make pages to put your graphics programs on. We will only need some basic HTML and CSS stuff. 

If you aren't already familiar with HTML, please find a resource on the web and learn about the basics. Here are some suggestions:

- [Mozilla Getting Started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started) - this is the very most basic stuff.
- [Mozilla HTML Learning Guide](https://developer.mozilla.org/en-US/docs/Learn/HTML) - this is a more complete guide, with many things that you won't need for class.
- [Mozilla Tutorial on CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) - you only need the most basic parts of it.

## Some thoughts on HTML in CS559

We won't use any fancy HTML stuff for class - we will only make basic pages that we will put graphics on. However, you will need to know the basics so that you can read and write the workbooks.

Because we are trying to keep the HTML simple, the pages for this class will be very **ugly.** You can make nice looking things with HTML, but it takes effort.

Normally, we would use stylesheets or web frameworks to provide fancier page features and to make things look nice. However, to keep things simple for class, we are just making very simple web pages.

Similarly, we would probably use tools to help us write HTML, rather than just typing it in an editor or IDE. But for class, what we need to do is so simple, we're better off just using the same IDE that we use for programming.

## The Basic Elements of HTML you should know

A key idea is that a document (a web page) is a tree of parts. The overall document is the root of the tree. For example, the document may contain paragraphs, which contain sentences, which contain words, etc. Each part is known as an element. The tree of elements is known as the Document Object Model (or DOM). 

The basic idea of an HTML document is that we represent a tree of parts (the parts are called) in a text file. In the text file, we use "tags" as special markings to tell the browser how to make elements from the text. Most tags come in matching pairs - you have a first tag to "start" the element, and a second tag to "end" it.

Some important elements that you will need to know about for class:

- comments - things between `<!--` and `-->` are ignored by the browser (so you should read them)
- `<html>` - this is the "root" of the tree, representing the whole document
- `<body>` - this represents the container where the content of the document goes
- Headers (`<h1>`, `<h2>` etc.) - these are heading lines 
- `<div>` - these are "divisions" of the document - boxes that contain things. They are useful for creating hierarchy.
- `<span>` - contain a "run" of text (or other objects). They are useful for creating hierarchy, grouping things together so that you can work with them.
- `<p>` - paragraphs (a bunch of text)
- `<ul>` - unordered lists and `<ol>` ordered (numbered) lists. Lists should contain `<li>` list item elements.
- `<code>` - this is used for when we put source code (like HTML or JavaScript) onto a web page for someone to read. We do not use `<code>` elements for code the computer is supposed to run! 
- `<script>` - these are the elements that contain the code that the browser is actually supposed to run (usually JavaScript). 

You may also notice that some special characters show up in a weird way. If a character might be interpretted by the web browser as being part of HTML, we need to encode it as an *entity.* So, for example, if I want to write the left angle bracket `<` I need to put `&lt;` into the HTML.

## Identifying Elements

Most (if not all) elements can be given unique names (called ids) so that we can refer to them. 
<span id="this-span"> For example, this sentence is in a `<span>` element with the id "this-span".</span>
Look at the HTML file and make sure you can find it! Each element can only have one ID, and every document should only have one element with any particular ID. For example, there can only be on "this-span" in this document.

IDs are useful so that you can find things in an HTML file (you could search for "this-span"). We will also use it so programs we write can find things.

Elements can also have "classes" associated with them. These are names that can be assigned to multiple elements, and each element can have multiple classes. Classes are useful when we want to refer to multiple elements. In this <span class="this-class">sentence</span>, three of the <span class="this-class">words</span> have a <<span class="this-class">class</span> associated with them. I could find those three words by looking for elements that have "this-class" as one of their classes. An element can have an ID, and any number of classes.

Usually in workbooks, I will put separate examples into boxes like you will see below. These will be created as `<div>` elements, with the `examplebox` class (although, that might change). Each box will have an ID. I wanted to tell you that because we're about to have the first one.
