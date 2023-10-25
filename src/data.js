import {SiOpenai,SiOpenaigym} from 'react-icons/si'




export const navLinks = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenai/>,
        title: "Summer Workout",
        info: "Summer workout splitwill have you making more gains inless time",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenai/>,
        title: "Cardio ",
        info: " Brisk walking, running, swimming, cycling, playing tennis and jumping rope",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenai/>,
        title: "Athelatic",
        info: "This high-level athelatic program is built for athelatics of all levels",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenai/>,
        title: "Fit Fast",
        info: "These alternating set workout will get you fit fast",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Ensure Growth",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Be Passionate",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Have Fun",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Team work",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Vishnu vishal",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Actor",
        avatar: require("./images/testimonial1.jpg")
    },
    {
        id: 2,
        name: "Madan gowri",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "youtuber",
        avatar: require("./images/testimonial2.jpg")
    },
    {
        id: 3,
        name: "Karthik devaraj",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Musician",
        avatar: require("./images/testimonial3.jpg")
    },
    {
        id: 4,
        name: "sethu raman",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Enterpreneur",
        avatar: require("./images/testimonial4.jpg")
    },
    {
        id: 5,
        name: "Keerthi",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Actress",
        avatar: require("./images/testimonial5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 1099,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 4099,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 6099,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.png')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpeg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Yasmin Karachiwala',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Samir Jaura',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Radhika Karl ',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Satyajit Chaurasiae',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Manish Advilkar',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Payal Gidwani Tiwarir',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]