import mongoose from 'mongoose';
import Blog from './Blog.js'; 

const blogs = [
    {
      id: 1,
      Title: "Unlocking the Secrets of Healthy Eating: A Guide to Nutritious Nosh",
      thumbnail: "blog1.jpg",
      author: "Varshita",
      readTime: "5 minutes",
      likes: 49,
      description: [
        {
          descTitle: "Unlocking the Secrets of Healthy Eating: A Guide to Nutritious Nosh",
          descContent: "Welcome to the delightful universe of healthy food habits! In this journey, vegetables take center stage, and your taste buds are in for a happy dance. Discover how to turn 'eating right' into a scrumptious adventure that feels more like a treat than a chore."
        },
        {
          descTitle: "Breakfast Bliss – Ignite Your Day with a Nutrient-Packed Feast:",
          descContent: "Remember the age-old wisdom about breakfast being the most crucial meal? It's not just a saying – it's the fuel your body craves to kickstart the day. Say goodbye to sugary cereals and embrace a bowl of Greek yogurt, granola, and a medley of fresh berries. It's a morning hug for your metabolism! Here's a game-changer – indulge in avocados on whole-grain toast. Creamy, satisfying, and loaded with healthy fats, it will have you powering through your morning like a superhero. Bonus points for pairing it with a sunshine-filled stroll – morning rituals that feel like self-care, not a chore"
        },
        {
          descTitle: "Snack Attack – Mastering Munchies with Nutritional Finesse:",
          descContent: "Ever faced the mid-afternoon slump, tempted by the vending machine's not-so-nutritious offerings? Fear not! Healthy snacks are your secret weapon. Munch on a handful of protein-packed nuts – almonds, walnuts, or pistachios – for a satisfying crunch. Fruits are nature's candy, guilt-free and delicious. Slice up some apples and pair them with a dollop of peanut butter – a snack-time fiesta in your mouth that keeps you fueled until dinner. Snacking has never been this virtuous!"
        },
        {
          descTitle: "Dinner – The Grand Finale of Your Culinary Day",
          descContent: "Dinner – the grand finale of your culinary day. Make it a colorful masterpiece by incorporating a rainbow of veggies. Picture your plate as a canvas, each veggie a stroke of nutritional genius. Roast them, sauté them, or toss them into a stir-fry – endless options for a wholesome meal. Lean proteins – the unsung heroes of a hearty dinner. Salmon, grilled chicken, or tofu – your body's building blocks for waking up ready to seize the day. Don't forget the grains – quinoa, brown rice, or whole wheat pasta. They're the supportive sidekicks that make your dinner a wholesome affair. Celebrate Every Bite – The Healthy Food Fiesta Continues: In the realm of healthy eating, deprivation has no place. It's a celebration of flavors, textures, and the joy of nourishing your body. The key? Balance, variety, and the occasional indulgence. A square (or two) of dark chocolate is the universe's way of saying, You're doing great, keep it up! Embark on this gastronomic journey with enthusiasm, curiosity, and a sprinkle of laughter. Your body will thank you, and your taste buds will sing the praises of your newfound healthy food habits. Cheers to a plateful of joy and a life well-nourished!"
        }
      ],
      createdAt: new Date(),
    },
    {
      id: 2,
      Title: "Efficient Meal Prep: Time-Saving Tips for Busy Foodies",
      thumbnail: "blog2.jpg",
      author: "Varshita",
      readTime: "5 minutes",
      likes: 49,
      description: [
        {
          descTitle: "Efficient Meal Prep: Time-Saving Tips for Busy Foodies",
          descContent: "Quick and Efficient Meal Prep Strategies Hello, culinary enthusiasts! Let's delve into efficient meal preparation and kitchen hacks designed to streamline your cooking routine. Quick and efficient meal prep is your secret weapon against the 'I don't have time to cook' dilemma. Start by meticulously planning your weekly menu – it's like having a well-structured roadmap for your taste buds. Embrace the art of multitasking; chop veggies while your pasta simmers and marinate proteins as you groove to your favorite tunes. Investing a bit of extra time upfront ensures more moments of relaxation when you're famished on a hectic Wednesday night."
        },
        {
          descTitle: "Smart Food Preparation Tips for Efficiency:",
          descContent: "Now, let's explore some smart food preparation tips to enhance efficiency in the kitchen. Opt for batch cooking whenever possible – prepare larger quantities of staple ingredients like grains, beans, and proteins, then store them in portion-sized containers for quick and easy meals throughout the week. Pre-cutting vegetables and fruits in advance can also save valuable time during meal prep. Additionally, consider utilizing kitchen appliances such as slow cookers, pressure cookers, and air fryers to streamline cooking processes and minimize hands-on time. With these smart food preparation strategies, you'll be well-equipped to tackle busy weeknights with ease."
        },
        {
          descTitle: "Mastering the Art of One-Pot Wonders:",
          descContent: "Who desires a sink teeming with dishes after indulging in a hearty meal? Welcome to the enchanting realm of one-pot wonders – a harmonious blend of flavors simmering in a single, effortlessly cleaned pot. From delectable stews to pasta perfection, these dishes epitomize time-saving brilliance. Begin with a foundational base (pasta, rice, or quinoa), layer on your preferred proteins, veggies, and seasonings, then allow the pot to work its culinary magic. The best part? Minimal cleanup, maximal flavor. One-pot wonders transcend mere recipes; they herald a culinary revolution, proving that less dishwashing equals more gastronomic enjoyment."
        },
        {
          descTitle: "Effortless Cleanup with Kitchen Organization:",
          descContent: "A clutter-free kitchen is the key to efficient meal prep. Invest in storage solutions like labeled containers, drawer organizers, and stackable shelves to keep your ingredients and cooking tools easily accessible. Designate specific areas for chopping, mixing, and cooking to streamline your workflow and minimize cleanup time. By maintaining a well-organized kitchen, you'll not only save time during meal preparation but also enjoy a more enjoyable cooking experience overall. In the grand banquet of life, let these kitchen hacks serve as your compass. With a touch of foresight, a sprinkle of savvy shopping, and a dollop of one-pot sorcery, you'll emerge as the hero of your kitchen saga. Happy cooking!"
        }
      ],
      createdAt: new Date(),
    },
  
    {
        id: "3",
        Title: 'Understanding Blockchain Technology',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Bob',
        readTime: '4 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Introduction to Blockchain',
                descContent: 'Blockchain is a decentralized, distributed ledger technology that records transactions across many computers.',
                descImage: 'https://example.com/blockchain_1.png'
            },
            {
                descTitle: 'How Blockchain Works',
                descContent: 'Transactions are recorded in blocks, and each block is linked to the previous one, forming a chain. This ensures the integrity and security of the data.',
                descImage: 'https://example.com/blockchain_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "4",
        Title: 'AI in Healthcare: Transforming Patient Care',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Carol',
        readTime: '6 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'AI Applications in Healthcare',
                descContent: 'AI is being used in healthcare to assist in diagnosis, treatment planning, and patient monitoring, leading to improved outcomes and reduced costs.',
                descImage: 'https://example.com/ai_healthcare_1.png'
            },
            {
                descTitle: 'Future of AI in Healthcare',
                descContent: 'The future of AI in healthcare looks promising with advancements in personalized medicine, predictive analytics, and robotic surgery.',
                descImage: 'https://example.com/ai_healthcare_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "5",
        Title: 'The Importance of Cybersecurity in the Digital Age',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Dave',
        readTime: '3 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Cybersecurity Threats',
                descContent: 'Cybersecurity threats are constantly evolving, with new types of malware, phishing scams, and data breaches emerging regularly.',
                descImage: 'https://example.com/cybersecurity_1.png'
            },
            {
                descTitle: 'Best Practices for Cybersecurity',
                descContent: 'Implementing strong passwords, using multi-factor authentication, and keeping software updated are essential best practices for maintaining cybersecurity.',
                descImage: 'https://example.com/cybersecurity_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "6",
        Title: 'Exploring the Metaverse: A New Digital Frontier',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Eve',
        readTime: '7 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'What is the Metaverse?',
                descContent: 'The metaverse is a collective virtual shared space, created by the convergence of virtually enhanced physical reality and physically persistent virtual reality.',
                descImage: 'https://example.com/metaverse_1.png'
            },
            {
                descTitle: 'Opportunities in the Metaverse',
                descContent: 'The metaverse offers new opportunities for social interaction, entertainment, and business, with potential impacts on various industries.',
                descImage: 'https://example.com/metaverse_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "7",
        Title: 'Advancements in Renewable Energy Technologies',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Frank',
        readTime: '5 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Solar and Wind Energy',
                descContent: 'Advancements in solar and wind energy technologies are making these renewable sources more efficient and cost-effective.',
                descImage: 'https://example.com/renewable_energy_1.png'
            },
            {
                descTitle: 'Future of Renewable Energy',
                descContent: 'The future of renewable energy looks bright with ongoing research and development in energy storage and grid integration.',
                descImage: 'https://example.com/renewable_energy_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "8",
        Title: 'The Evolution of 5G Technology',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Grace',
        readTime: '4 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'What is 5G?',
                descContent: '5G is the fifth generation of mobile network technology, offering faster speeds, lower latency, and increased connectivity.',
                descImage: 'https://example.com/5g_technology_1.png'
            },
            {
                descTitle: 'Impact of 5G',
                descContent: '5G technology is expected to revolutionize industries such as healthcare, transportation, and entertainment by enabling new applications and services.',
                descImage: 'https://example.com/5g_technology_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "9",
        Title: 'The Future of Autonomous Vehicles',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Hank',
        readTime: '6 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'How Autonomous Vehicles Work',
                descContent: 'Autonomous vehicles use sensors, cameras, and artificial intelligence to navigate and make decisions without human intervention.',
                descImage: 'https://example.com/autonomous_vehicles_1.png'
            },
            {
                descTitle: 'Challenges and Opportunities',
                descContent: 'While autonomous vehicles offer many benefits, there are also challenges to overcome, including regulatory issues and safety concerns.',
                descImage: 'https://example.com/autonomous_vehicles_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "10",
        Title: 'Smart Cities: Integrating Technology into Urban Life',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Ivy',
        readTime: '5 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'What are Smart Cities?',
                descContent: 'Smart cities use technology to improve urban services and enhance the quality of life for residents.',
                descImage: 'https://example.com/smart_cities_1.png'
            },
            {
                descTitle: 'Benefits of Smart Cities',
                descContent: 'The benefits of smart cities include improved transportation, energy efficiency, and public safety.',
                descImage: 'https://example.com/smart_cities_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "11",
        Title: 'Virtual Reality in Education: Enhancing Learning Experiences',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Jack',
        readTime: '4 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'VR in Classrooms',
                descContent: 'Virtual reality is being used in classrooms to provide immersive learning experiences and enhance student engagement.',
                descImage: 'https://example.com/vr_education_1.png'
            },
            {
                descTitle: 'Future of VR in Education',
                descContent: 'The future of VR in education includes more interactive and personalized learning experiences, potentially transforming how we teach and learn.',
                descImage: 'https://example.com/vr_education_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "12",
        Title: 'Artificial Intelligence in Finance: Automating Investments',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Kara',
        readTime: '5 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'AI-Powered Investment Tools',
                descContent: 'AI is being used in finance to develop investment tools that can analyze market data and make trading decisions automatically.',
                descImage: 'https://example.com/ai_finance_1.png'
            },
            {
                descTitle: 'Benefits of AI in Finance',
                descContent: 'The benefits of AI in finance include increased efficiency, reduced costs, and the ability to make more informed investment decisions.',
                descImage: 'https://example.com/ai_finance_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "13",
        Title: 'The Impact of Big Data on Business Decisions',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Liam',
        readTime: '3 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'What is Big Data?',
                descContent: 'Big data refers to the large volumes of data generated by businesses and consumers, which can be analyzed to gain insights and make informed decisions.',
                descImage: 'https://example.com/big_data_1.png'
            },
            {
                descTitle: 'Big Data in Business',
                descContent: 'Businesses are using big data to improve operations, understand customer behavior, and develop new products and services.',
                descImage: 'https://example.com/big_data_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "14",
        Title: 'The Role of IoT in Smart Homes',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Mia',
        readTime: '4 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'What is IoT?',
                descContent: 'The Internet of Things (IoT) refers to the network of physical devices connected to the internet, enabling them to collect and exchange data.',
                descImage: 'https://example.com/iot_smart_homes_1.png'
            },
            {
                descTitle: 'IoT in Smart Homes',
                descContent: 'In smart homes, IoT devices are used to automate and control various functions, such as lighting, heating, and security.',
                descImage: 'https://example.com/iot_smart_homes_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "15",
        Title: 'Machine Learning in Marketing: Personalizing Customer Experiences',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Noah',
        readTime: '5 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'What is Machine Learning?',
                descContent: 'Machine learning is a type of artificial intelligence that enables computers to learn from data and make predictions or decisions without being explicitly programmed.',
                descImage: 'https://example.com/ml_marketing_1.png'
            },
            {
                descTitle: 'Machine Learning in Marketing',
                descContent: 'Machine learning is being used in marketing to analyze customer data, personalize experiences, and optimize campaigns.',
                descImage: 'https://example.com/ml_marketing_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "16",
        Title: 'The Future of Robotics: Advancements and Applications',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Olivia',
        readTime: '6 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Advancements in Robotics',
                descContent: 'Recent advancements in robotics are enabling the development of more capable and intelligent robots that can perform a wide range of tasks.',
                descImage: 'https://example.com/robotics_1.png'
            },
            {
                descTitle: 'Applications of Robotics',
                descContent: 'Robotics are being used in various industries, including manufacturing, healthcare, and logistics, to improve efficiency and reduce costs.',
                descImage: 'https://example.com/robotics_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id:"17",
        Title: 'The Impact of Social Media on Society',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Paul',
        readTime: '3 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Positive Effects of Social Media',
                descContent: 'Social media has many positive effects, including connecting people, facilitating communication, and providing a platform for self-expression.',
                descImage: 'https://example.com/social_media_1.png'
            },
            {
                descTitle: 'Negative Effects of Social Media',
                descContent: 'However, social media also has negative effects, such as promoting misinformation, reducing face-to-face interactions, and contributing to mental health issues.',
                descImage: 'https://example.com/social_media_2.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "18",
        Title: 'Ethical Considerations in Artificial Intelligence',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Quinn',
        readTime: '5 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Ethical Challenges of AI',
                descContent: 'The development and use of AI raise various ethical challenges, including issues related to privacy, bias, and accountability.',
                descImage: 'https://example.com/ai_ethics_1.png'
            },
            {
                descTitle: 'Addressing Ethical Issues in AI',
                descContent: 'Addressing these ethical issues requires a collaborative effort among technologists, policymakers, and society as a whole.',
                descImage: 'https://example.com/ai_ethics_2.png'
            }
        ],
        createdAt: new Date(),
    }
];

mongoose.connect('mongodb://localhost:27017/Blog')
    .then(async () => {
        console.log('MongoDB connected...');
        try {
            await Blog.deleteMany({});
            await Blog.insertMany(blogs);
            console.log('Data seeded successfully');
        } catch (err) {
            console.error('Error seeding data:', err);
        } finally {
            mongoose.connection.close();
        }
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));