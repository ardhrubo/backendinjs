import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// })

// Get a list of 5 jokes

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: "Atom Trust",
            content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            title: "Anti-Gravity Book",
            content: "I'm reading a book on anti-gravity. It's impossible to put down!"
        },
        {
            id: 3,
            title: "Construction Joke",
            content: "Want to hear a construction joke? Oh, never mind—I'm still working on that one."
        },
        {
            id: 4,
            title: "Snowman and Vampire",
            content: "What do you get when you cross a snowman and a vampire? Frostbite!"
        },
        {
            id: 5,
            title: "Penguin's House",
            content: "How does a penguin build its house? Igloos it together!"
        }
    ];
    res.send(jokes);
    
})


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

