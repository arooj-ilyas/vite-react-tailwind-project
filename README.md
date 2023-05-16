# Vite + React Tutorial

Modern web development following a tutorial by JavaScriptMastery building a responsive React JS application using TailwindCSS.

### Deployed Site:

**JavaScript Mastery Tutorial:**  
[Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind](https://www.youtube.com/watch?v=_oO4Qi5aVZs)  

**Figma Design:**  
[HooBank Figma](https://www.figma.com/file/bUGIPys15E78w9bs1l4tgS/HooBank?type=design&node-id=310-485)


I spent the last week following alongside a JavaScript Mastery tutorial whereby we rebuilt a banking app which was pre-designed by [OneWeekWonders](https://www.oneweekwonders.com/). This tutorial was my first time learning about Tailwind and Vite and I learnt so much! 🧠 

A summary of what I learnt: 
- [x] Vite is a new tool, an alternative to CreateReactApp which can initialise a React App
- [x] Downloading extention ES7+ React in VSCode enabled me to create component templates using 'rafce' within seconds!
- [x] Best ptactices for 'clean code'
- [x] When you are creating a functional component in React which only returns JSX, you can remove the curle braces and the return statement to reduce the lines of code and one level of indentation

Instead of:
```
const Footer = () => {
    return (
        <section>
            Footer
        </section>
    )
}
```

Clean version:
```
const Footer = () => (
    <section>
        Footer
    </section>
  )
```