import mongoose from 'mongoose';
import Blog from './Blog.js'; 

const blogs = [
    {
      id: 1,
      Title: "Unlocking the Secrets of Healthy Eating: A Guide to Nutritious Nosh",
      thumbnail: "https://res.cloudinary.com/dvgxbofjf/image/upload/v1721558371/lmhhzughlutilvekq412.jpg",
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
          descContent: "Remember the age-old wisdom about breakfast being the most crucial meal? It's not just a saying – it's the fuel your body craves to kickstart the day. Say goodbye to sugary cereals and embrace a bowl of Greek yogurt, granola, and a medley of fresh berries. It's a morning hug for your metabolism! Here's a game-changer – indulge in avocados on whole-grain toast. Creamy, satisfying, and loaded with healthy fats, it will have you powering through your morning like a superhero. Bonus points for pairing it with a sunshine-filled stroll – morning rituals that feel like self-care, not a chore",
          descImage: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707301452/Frokerassets/Watermelon_Blueberry_Salad_ukamkz.jpg"
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
      thumbnail: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707379910/Frokerassets/blog2veg_uye1xc.png",
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
          descContent: "Now, let's explore some smart food preparation tips to enhance efficiency in the kitchen. Opt for batch cooking whenever possible – prepare larger quantities of staple ingredients like grains, beans, and proteins, then store them in portion-sized containers for quick and easy meals throughout the week. Pre-cutting vegetables and fruits in advance can also save valuable time during meal prep. Additionally, consider utilizing kitchen appliances such as slow cookers, pressure cookers, and air fryers to streamline cooking processes and minimize hands-on time. With these smart food preparation strategies, you'll be well-equipped to tackle busy weeknights with ease.",
          descImage:"https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707379910/Frokerassets/blog2curry_gwxa1i.png"
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
        Title: 'A Comprehensive Guide to Desi Kitchen Gardens: Cultivating Flavorful Delights at Home',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707310824/Frokerassets/balcony-garden-2_ejywyi.jpg',
        author: 'Bob',
        readTime: '4 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Introduction to Blockchain',
                descContent: 'Blockchain is a decentralized, distributed ledger technology that records transactions across many computers.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707379910/Frokerassets/blog3gardening_a6yrsk.png'
            },
            {
                descTitle: 'How Blockchain Works',
                descContent: 'Transactions are recorded in blocks, and each block is linked to the previous one, forming a chain. This ensures the integrity and security of the data.',
              
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "4",
        Title: 'The Slice of History: How Food Delivery Apps in India Came to Be',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707379910/Frokerassets/blog4trolly_neto6j.png',
        author: 'Carol',
        readTime: '6 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'AI Applications in Healthcare',
                descContent: 'AI is being used in healthcare to assist in diagnosis, treatment planning, and patient monitoring, leading to improved outcomes and reduced costs.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707310913/Frokerassets/360_F_484001005_YxjPyJa8omL7vbnu0V1KnRipGQpHWmYn_g3u1nr.png'
            },
            {
                descTitle: 'Future of AI in Healthcare',
                descContent: 'The future of AI in healthcare looks promising with advancements in personalized medicine, predictive analytics, and robotic surgery.',
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "5",
        Title: 'Title: Mastering the Art of Content Creation: Strategies for Success in the Digital Era',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707379910/Frokerassets/blog5creator_wpwvki.png',
        author: 'Dave',
        readTime: '3 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Cybersecurity Threats',
                descContent: 'Cybersecurity threats are constantly evolving, with new types of malware, phishing scams, and data breaches emerging regularly.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707379909/Frokerassets/blog5listen_rueh8x.png'
            },
            {
                descTitle: 'Best Practices for Cybersecurity',
                descContent: 'Implementing strong passwords, using multi-factor authentication, and keeping software updated are essential best practices for maintaining cybersecurity.',
                
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "6",
        Title: 'Forbes 30 Under 30 India: Celebrating the Trailblazers of Tomorrow',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png',
        author: 'Eve',
        readTime: '7 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'What is the Metaverse?',
                descContent: 'The metaverse is a collective virtual shared space, created by the convergence of virtually enhanced physical reality and physically persistent virtual reality.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709363911/Screenshot_2024-03-02_123449_ud2z5x.png'
            },
            {
                descTitle: 'Opportunities in the Metaverse',
                descContent: 'The metaverse offers new opportunities for social interaction, entertainment, and business, with potential impacts on various industries.',
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "7",
        Title: 'What Is Content Creation, Anyway? 🎨',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709878252/cc5_cye3u1.png',
        author: 'Frank',
        readTime: '5 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Solar and Wind Energy',
                descContent: 'Advancements in solar and wind energy technologies are making these renewable sources more efficient and cost-effective.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709877665/cc4_rigtow.png'
            },
            {
                descTitle: 'Future of Renewable Energy',
                descContent: 'The future of renewable energy looks bright with ongoing research and development in energy storage and grid integration.',
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "8",
        Title: 'Where Text Becomes Cinematic Magic! From Words to Wonders: The Sora Saga',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709879676/ai1_k8fzbq.png',
        author: 'Grace',
        readTime: '4 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'What is 5G?',
                descContent: '5G is the fifth generation of mobile network technology, offering faster speeds, lower latency, and increased connectivity.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709970665/sorachatgpt_wkkmdi.png',
            },
            {
                descTitle: 'Impact of 5G',
                descContent: '5G technology is expected to revolutionize industries such as healthcare, transportation, and entertainment by enabling new applications and services.',
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "9",
        Title: 'Apple Vision Pro: A Cosmic Revolution Unlocking the Future of Work',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709970665/visionapplepro_eo0gz9.png',
        author: 'Hank',
        readTime: '6 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'How Autonomous Vehicles Work',
                descContent: 'Autonomous vehicles use sensors, cameras, and artificial intelligence to navigate and make decisions without human intervention.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709880024/vision_hebbat.png'
            },
            {
                descTitle: 'Challenges and Opportunities',
                descContent: 'While autonomous vehicles offer many benefits, there are also challenges to overcome, including regulatory issues and safety concerns.',
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "10",
        Title: 'Recession in India 2024: A Rollercoaster Ride with a Dash of Curry',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1710746278/ression5_vwypjj.png',
        author: 'Ivy',
        readTime: '5 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'What are Smart Cities?',
                descContent: 'Smart cities use technology to improve urban services and enhance the quality of life for residents.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1710747743/ression4_x3qjf5.png'
            },
            {
                descTitle: 'Benefits of Smart Cities',
                descContent: 'The benefits of smart cities include improved transportation, energy efficiency, and public safety.',
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "11",
        Title: 'National Creators Award 2024: Recognizing India’s Digital Innovators',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1714713623/Screenshot_2024-05-03_104922_kmynzb.png',
        author: 'Jack',
        readTime: '4 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'VR in Classrooms',
                descContent: 'Virtual reality is being used in classrooms to provide immersive learning experiences and enhance student engagement.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1714713624/Screenshot_2024-05-03_104843_vnozt8.png'
            },
            {
                descTitle: 'Future of VR in Education',
                descContent: 'The future of VR in education includes more interactive and personalized learning experiences, potentially transforming how we teach and learn.',
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "12",
        Title: 'Devin, the first AI software engineer',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711723862/robo1_ewko6u.png',
        author: 'Kara',
        readTime: '5 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'AI-Powered Investment Tools',
                descContent: 'AI is being used in finance to develop investment tools that can analyze market data and make trading decisions automatically.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711723862/robo2_cjezbs.png'
            },
            {
                descTitle: 'Benefits of AI in Finance',
                descContent: 'The benefits of AI in finance include increased efficiency, reduced costs, and the ability to make more informed investment decisions.',
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "13",
        Title: 'Why Natural Skin Care is Good for You: Find Top Brands and Perks',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1712410573/skin1_q6n7ar.png',
        author: 'Liam',
        readTime: '3 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'What is Big Data?',
                descContent: 'Big data refers to the large volumes of data generated by businesses and consumers, which can be analyzed to gain insights and make informed decisions.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1712989318/herbs_fax1co.png'
            },
            {
                descTitle: 'Big Data in Business',
                descContent: 'Businesses are using big data to improve operations, understand customer behavior, and develop new products and services.',
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
            },
            {
                descTitle: 'IoT in Smart Homes',
                descContent: 'In smart homes, IoT devices are used to automate and control various functions, such as lighting, heating, and security.',
                descImage: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1713597754/meat2_arbihu.png'
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "15",
        Title: 'Introducing Meta AI: Your New Sidekick in the Digital Universe!',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1713597754/meta_bbe7zn.png',
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
        id: "16",
        Title: 'Why Brands Should Partner with Creators',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/v1713875888/Screenshot_2024-04-23_180503_quok3i.png',
        author: 'Noah',
        readTime: '5 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Why Brands Should Partner with Creators',
                descContent: "In the digital marketing landscape, a powerful alliance is brewing between brands and creators, and it’s transforming the way businesses connect with their audience. Imagine a seamless dance between brands and creators, where each step taken translates into increased sales and amplified brand presence. This strategic partnership, which leads to a well-choreographed tango, is not just effective but essential in today’s competitive market. Let’s delve into why brands should team up with creators and how this collaboration can lead to unparalleled success.",
            },
            {
                descTitle: 'Authenticity Amplified',
                descContent: 'Creators represent authenticity. Their content resonates with audiences because it’s genuine and relatable. When a creator endorses a brand, it’s perceived as a genuine recommendation rather than a scripted advertisement. This authenticity fosters trust among consumers, leading to higher conversion rates and long-term brand loyalty',
            },
            {
                descTitle:"Reach for the Stars",
                descContent: "Creators possess a loyal following, often referred to as fan armies. Leveraging their existing fan base allows brands to tap into a vast network of potential customers. When a creator promotes a brand, it can quickly gain attraction and become a trending topic among their followers. This exponential reach extends the brand's visibility far beyond traditional marketing channels, driving organic growth and brand awareness.",
            },
            {
                descTitle: "Cost-Effective Magic ",
                descContent: "Gone are the days of extravagant ad budgets. With creators, brands can achieve remarkable results without breaking the bank. Creators have mastered the art of creating engaging content using minimal resources. Their ability to connect with audiences on a personal level, coupled with their creative flair, makes them a cost-effective alternative to traditional advertising methods.",
                descImage:"https://res.cloudinary.com/dapbrn8a9/image/upload/v1713875887/Screenshot_2024-04-23_180313_wsnw0n.png",

            },
            {
                descTitle:"conclusion",
                descContent:"To successfully partner with creators, brands must approach them with sincerity and respect. To attract creators and foster successful collaborations, personalize your outreach by understanding their style and values, and avoid generic pitches. Encourage creators to express themselves authentically, trusting their expertise to engage their audience. Collaboration is a two-way street, so building trust and respect is essential for fruitful partnerships. With these strategies, you can establish strong connections with creators and create impactful collaborations.",
            }

        ],
        createdAt: new Date(),
    },
    {
        id:"17",
        Title: 'Summer Fashion Tips: Dressing Up for the Sunny Days!',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1713875886/Screenshot_2024-04-23_180054_kgdlcs.png',
        author: 'Varshita',
        readTime: '3 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Summer Fashion Tips: Dressing Up for the Sunny Days!',
                descContent: "Summer has arrived, bringing with it the perfect opportunity to shed those heavy layers and embrace the light, breezy vibes of the season. Whether you're lounging poolside with a refreshing piña colada or wandering through the vibrant stalls of a farmers' market, it's time to give your wardrobe a fresh update. Let's explore the latest summer fashion trends that will effortlessly elevate your style and have you ready for those sun-kissed selfies!",
            },
            {
                descTitle: '1. The Flowy Maxi Dress: Breezy Elegance',
                descContent: "Maxi dresses are the epitome of summer chic. These ankle-grazing wonders offer a sense of effortless elegance, almost like a gentle embrace from the sun itself. Embrace floral prints, pastel hues, or even trendy tie-dye patterns. The key is to find a flowy silhouette that allows you to twirl with abandon. Pair your maxi dress with strappy sandals for a versatile look that's perfect for brunch or a romantic sunset stroll along the beach.",
            },
            {
                descTitle:"2. Straw Hats: Shade with Style",
                descContent: "A wide-brimmed straw hat is not only a stylish accessory but also a practical necessity for protecting your skin from harmful UV rays. Channeling an air of mystery, it adds a touch of intrigue to any ensemble, whether you're sipping iced coffee at a café or perusing vintage bookstores. For an added dose of glamour, pair your straw hat with oversized sunglasses for an effortlessly chic look.",
            },
            {
                descTitle: "3. Linen Everything: Cool and Crisp",
                descContent: "Linen is the quintessential fabric of summer, known for its breathability and effortless sophistication. Whether it's a linen jumpsuit, wide-leg pants, or a classic button-down shirt, opt for neutral tones like sandy beige, soft gray, and pale blue for a timeless yet contemporary vibe. Embrace the natural wrinkles of linen for a laid-back look that exudes effortless charm. Roll up those sleeves for an extra touch of nonchalance and enjoy the cool, crisp comfort of this summer staple.",
                descImage: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1713875886/Screenshot_2024-04-23_180211_r6847h.png"
            },
            {
                descTitle: "4. Statement Sandals: Feet First",
                descContent: "Step up your summer shoe game with statement sandals that demand attention. Say goodbye to basic flip-flops and hello to embellished slides, strappy gladiators, or espadrille wedges. Metallic accents, colorful beads, and woven details are all the rage this season, adding a touch of glamor to even the most casual of outfits.",
                descContent:"Summer fashion is all about embracing your style and celebrating the joy of the season. Mix and match different textures, experiment with bold prints, and don't forget to lather on the sunscreen!",
            }
        ],
        createdAt: new Date(),
    },
    {
        id: "18",
        Title: 'Delegating Social Media Tasks to AI',
        thumbnail: 'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1714712971/Screenshot_2024-05-03_103708_dx4yto.png',
        author: 'Quinn',
        readTime: '5 minute read',
        likes: 0,
        description: [
            {
                descTitle: 'Delegating Social Media Tasks to AI',
                descContent: 'In todays digital age, maintaining a vibrant social media presence is crucial for businesses and individuals alike. However, the demands of crafting engaging content, scheduling posts, and analyzing metrics can be overwhelming. Enter artificial intelligence (AI) – the game-changer thats revolutionizing how we manage our online presence. Lets delve into how delegating social media tasks to AI can transform your strategy and streamline your workload.',
            },
            {
                descTitle: 'Unlocking Efficiency with AI-Powered Schedulers',
                descContent: "Say goodbye to manual scheduling and hello to AI-powered schedulers! These innovative tools like Hootsuite, Magic Studio, Wordtune etc analyze your audience's behavior, optimize posting times, and ensure your content reaches its maximum potential. By delegating this task to AI, you free up valuable time to focus on creating quality content and engaging with your audience in real-time. Plus, with advanced features like post recycling and cross-platform scheduling, you'll never miss an opportunity to connect with your followers.",
                descImage: "https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1714712972/Screenshot_2024-05-03_103750_kjohkd.png"
            },
            {
                descTitle:"Engaging Audiences with AI-Powered Chatbots",
                descContent:"In today's fast-paced digital landscape, prompt customer service is non-negotiable. AI-powered chatbots offer round-the-clock support, answering FAQs, guiding users through the sales funnel, and even personalizing recommendations based on user preferences. By delegating customer inquiries to chatbots, you not only enhance the overall user experience but also free up your team to focus on more complex tasks that require human intervention.",
            },
            {
                descTitle:"Conclusion: Embracing the Future of Social Media Management",
                descContent:"In conclusion, delegating social media tasks to AI isn't just a trend – it's a strategic imperative for businesses looking to thrive in the digital age. From streamlining scheduling and content creation to analyzing performance metrics and engaging with audiences, AI empowers you to elevate your online presence and stay ahead of the competition. So why wait? Embrace the future of social media management today and unlock the full potential of your online brand!",
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