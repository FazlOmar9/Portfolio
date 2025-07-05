const projects = [
    {
      title: "Voice Agent for inbound calls",
      description: "A Vapi voice agent that handles inbound calls for a company with three businesses under one roof. A cafe, a bar and a barbershop. The agent handles FAQs, availability and reservations for each of the businesses. It is built using Vapi, and Make.com for CRM integration.",
      image: "https://neatnnext-locations-pricelist.s3.ap-south-1.amazonaws.com/Screenshot+2025-07-05+133154.png",
      technologies: ["Vapi", "Make.com", "OpenAI"],
      link: "https://vapi.ai/"
    },
    {
      title: "Whatsapp bot for laundry services",
      description: "A Whatsapp bot for a laundry service that handles orders, history, edits, updates, user info and more. Built using AWS Lambda for serverless execution and Supabase for database management.",
      image: "https://neatnnext-locations-pricelist.s3.ap-south-1.amazonaws.com/whatsapp-business.webp",
      technologies: ["Lambda", "React", "Supabase", "Whatsapp Business Platform"],
      link: "https://wa.me/917972303745"
    },
    {
      title: "Twitter Audience Analysis Agent",
      description: "A Twitter audience analysis tool that provides insights about your twitter audience. It has a user website, an n8n backend with async processing and a python selenium scraper, and uses Groq for LLM inference and Apify for comment extraction. It provides insights like audience demographics, interests, and engagement patterns.",
      image: "https://neatnnext-locations-pricelist.s3.ap-south-1.amazonaws.com/Screenshot+2025-06-05+030215.png",
      technologies: ["N8N", "Python Selenium", "Apify", "React", "Meta Llama"],
      link: "chrome://newtab/"
    },
    {
      title: "Solar Panel FAQ chatbot with CRM",
      description: "A CRM integrated AI chatbot that stores users email, sends automated welcome email and provides responses for solar panel company related queries. Able to chat in both English and German.",
      image: "https://i.imgur.com/Cfwznuu.png",
      technologies: ["Botpress", "JavaScript", "Make.com", "OpenAI", "Google Sheets"],
      link: "https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/18/13/20250118132701-R2RQ3U8G.json"
    },
    {
      title: "Financial Documents Summarizer",
      description: "Summarizer for financial documents that provides key insights and highlights details. Financial documents can be overwhelmingly large, this makes sure you don't miss anything. Divides document into chunks and processes for faster and better summarization.",
      image: "https://i.imgur.com/Ic8ROsE.png",
      technologies: ["Python", "Jina.AI", "Meta Llama", "Chunking Algorithm"],
      link: "https://github.com/FazlOmar9/Summariser"
    },
    {
      title: "",
      description: "Voluntere is an interactive web platform that connects volunteers with communities. Blazing fast frontend with Next JS and secure API with Node, Express and Mongo.",
      image: "https://i.imgur.com/8fxZDj9.png",
      technologies: ["TypeScript", "React", "Next JS", "Node", "Express", "Docker", "Docker Compose", "MongoDB", "NextAuth"],
      link: "https://github.com/FazlOmar9/Voluntere"
    },
    {
      title: "",
      description: "Dynamic Real Estate website made for a client. Displays their prime properties. Super fast frontend and secure admin panel. Comes with a contact form for reach out.",
      image: "https://i.imgur.com/IVO2IQq.png",
      technologies: ["Typescript", "React", "Vite", "Supabase", "Youtube Integration"],
      link: "https://propertyvizag.com"
    },
    {
      title: "RAG Ready",
      description: "RAG-ready is an NLP pipeline that streamlines PDF preprocessing, chunking, vectorisation and storage to Pinecone. Go from documents to a rag ready pinecone index in one go. Be it for search applications, chatbot development or recommendation systems - RAG-ready simplifies it all.",
      image: "https://i.imgur.com/webYpUu.jpeg",
      technologies: ["Python", "Jina.AI", "Pinecone", "Vector stores", "RAG", "NLP"],
      link: "https://github.com/FazlOmar9/RAG-ready"
    },
    {
      title: "Local NextCloud Deployment for my college server",
      description: "Deployed a local NextCloud instance for my college's FTP server using Docker. Provides media access to over 1500 students. Each of the students have a unique id, which makes consumption data analysis possible.",
      image: "https://i.imgur.com/tzh2heO.png",
      technologies: ["Linux", "Docker", "NextCloud", "DevOps", "Shell Scripting", "FTP"]
    },
    {
      title: "Calendar Events",
      description: "Google Calendar Events app. Manage your events better, with a faster and cooler UI. Uses the Google's OAuth and calendar events API.",
      image: "https://i.imgur.com/tdrUTLw.png",
      technologies: ["Typescript", "React", "Vite", "Google OAuth 2.0", "Google Identity Services", "Google Calendar API"],
      link: "https://drive.google.com/file/d/17FaRjDkbLzz--obc2uP01BglNS2mgHqL/view?usp=sharing"
    },
    {
      title: "B.O.N.K.",
      description: "BONK is a network heatmap project made for the hostel of IIIT Nagpur, which aims to quicken the resolution of any LAN related internet issues. Fast frontend with React JS, a secure API with Node and Express and an efficient Mongo database.",
      image: "https://github.com/CRISPR-IIITN/BONK/blob/bff6639817410d0bd5a9917093815966a3dd01f3/Images/main1.png?raw=true",
      technologies: ["TypeScript", "React", "Vite", "Node", "Express", "MongoDB"],
      link: "https://github.com/CRISPR-IIITN/BONK"
    },
    {
      title: "Crypto Wallet Info Discord Bot",
      description: "CyndaBot is a discord bot that uses the Blaze API to fetch wallet information like associated email addresses, ethereum, polygon and nft portfolio value, and authenticity, reputation scores. Particularly useful for mass gathering of information of interested NFT buyers.",
      image: "https://i.imgur.com/rhHK16J.png",
      technologies: ["Python", "Blaze API", "GraphQL", "Ethereum", "Web3"],
      link: "https://github.com/FazlOmar9/CyndaBot"
    },
    {
      title: "Agrohaven",
      description: "Agrohaven is a chatgpt-like web interface for Urban Farming. It is conditioned to give very discreet instructions. It also has features like chat history, and long context just like chatgpt. It uses the Meta Llama 3.2 for inference.",
      image: "https://i.imgur.com/g8T792Q.png",
      technologies: ["Typescript", "React", "Vite", "Meta Llama", "Hugging Face"],
      link: "https://github.com/FazlOmar9/agrohaven"
    },
    {
      title: "Plot Area Estimation using Drone Imagery",
      description: "Estimates the area of a marked plot using a drone image and computer vision techinques. First calculates the area in pixel squares, then uses a trignometric algo to convert it into desirable units.",
      image: "https://d6fiz9tmzg8gn.cloudfront.net/wp-content/uploads/2023/06/Blog2-11.jpg",
      technologies: ["Python", "OpenCV", "Computer Vision", "Trignometry", "Drone Images"],
      link: "https://github.com/FazlOmar9/ML-Models/blob/main/PlotArea.ipynb"
    },
    {
      title: "Machine Learning Models",
      description: "A repository of some of the ML models I've worked on. Includes all types like classic ML models, Deep learning models, Transformer models, etc.",
      image: "https://i.imgur.com/UrlsCFA.jpeg",
      technologies: ["Python", "NLP", "Computer Vision", "Tensorflow", "PyTorch", "ML"],
      link: "https://github.com/FazlOmar9/ML-Models"
    },
    {
      title: "Pizza Delivery Bot with Telegram, Facebook and Voice Call integration",
      description: "Pizza Delivery Bot made with Dialogflow. Has features like intent matching, order saving, along with telegram bot , facebook bot and inbound voice call integrations. Saves order to firebase.",
      image: "https://developer.signalwire.com/assets/images/b9e7aff-Dialogflow_Integration-a5001ef05d3c3d09ee4db20ff759661b.webP",
      technologies: ["Google Dialogflow", "Node", "Firebase", "Telegram"],
      link: "https://bot.dialogflow.com/865fff8e-636f-4fa6-b362-0f457c385308"
    },
    {
      title: "Fortigate Auto Login Web Extension",
      description: "Fortilogger is a web extension to instantly login through your firewall. It uses simple javascript and encrypted web storage.",
      image: "https://i.imgur.com/kEqTyKm.png",
      technologies: ["Web Extensions", "JavaScript", "Web Storage"],
      link: "https://github.com/FazlOmar9/FortiLogger"
    },
    {
      title: "CTF Deployment with Dockerized challenges",
      description: "Deployed a CTFd instance for the EnigmaXplore 2.0 CTF of IIIT Nagpur. Created dockerfiles for each challenge and set it up on the deployment site.",
      image: "https://i.imgur.com/7byYlwW.png",
      technologies: ["Docker", "Linux", "CTFd", "AWS", "DevOps"],
      link: "https://github.com/FazlOmar9/EnXp2"
    },
    {
      title: "PCB Defect Detection using Computer Vision",
      description: "Trained the Yolo v8 model on a custom PCB dataset for detecting manufacturing defects. The model was trained on 1500 images. Model detects 6 types of defects.",
      image: "https://i.imgur.com/DmXBwXz.png",
      technologies: ["Python", "Computer Vision", "Yolo v8", "PyTorch", "Object Detection"],
      link: "https://github.com/FazlOmar9/PCB-defect-detection"
    },
    {
      title: "AwsUse - A Powershell CLI tool for AWS",
      description: "A Powershell CLI tool for AWS that allows you to switch between multiple AWS accounts on your machine, because Amazon was too lazy to implement it themselves.",
      image: "https://neatnnext-locations-pricelist.s3.ap-south-1.amazonaws.com/Screenshot+2025-07-05+135821.png",
      technologies: ["Powershell", "AWS CLI"],
      link: "https://github.com/FazlOmar9/AwsUse"
    },
  ];

export default projects;