import mongoose from 'mongoose';
import Blog from './Blog.js'; 

const blogs = [
    {
        id: "1",
        Title: 'Delegating Social Media Tasks to AI',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Roshan',
        readTime: '2 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Unlocking Efficiency with AI-Powered Schedulers',
                descContent: 'Say goodbye to manual scheduling and hello to AI-powered schedulers! These innovative tools analyze your audience\'s behavior, optimize posting times, and ensure your content reaches its maximum potential.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1714712972/Screenshot_2024-05-03_103750_kjohkd.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "2",
        Title: 'The Rise of Quantum Computing',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Alice',
        readTime: '5 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'What is Quantum Computing?',
                descContent: 'Quantum computing is the study of how to use phenomena in quantum physics to create new ways of computing.',
                descImage: 'https://example.com/quantum_computing_1.png'
            },
            {
                descTitle: 'Applications of Quantum Computing',
                descContent: 'Quantum computers have the potential to revolutionize many industries, including cryptography, materials science, and complex systems modeling.',
                descImage: 'https://example.com/quantum_computing_2.png'
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