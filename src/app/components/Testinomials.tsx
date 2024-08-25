import Image from 'next/image';

interface Testimonial {
  image: string;
  name: string;
  title: string;
  date: string;
  text: string;
  link: string;
}

const testimonials: Testimonial[] = [
  {
    image: "https://media.licdn.com/dms/image/v2/C5103AQEndZagxNo9Kg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1586539953118?e=1729123200&v=beta&t=TF8V1YzBLSbalISY4CenFGGNoKSuKdQrkKYLd8KQU5Y",
    name: "Aarthika Thangavel",
    title: "VP, Marketing MI and Analytics",
    date: "August 27, 2023",
    text: "Ibad is a knowledgeable team member with good problem solving skills. He brings in variety of approaches for the data science problems which have derived critical insights. He solves complex problems with his excellent coding abilities and has been very focused on the task at hand. He is a great team player and helped few of our team members to come up to speed in the ML problems. I wish him all the best.",
    link: "https://www.linkedin.com/in/aarthika-thangavel-9a3928a4"
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGqWYazAnewdw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698764766910?e=1729123200&v=beta&t=ByNPPJYtqS8D2ABWGvGx9-Xym35RxHw0Yn_4wYkIpDE",
    name: "James Bryce",
    title: "The role and value of the spoken word: speech intelligence",
    date: "June 15, 2019",
    text: "Ibad was a key member of a University of Sheffield MSc Data Science research project with gweek in early 2019. With his team colleagues, Ibad underwent a steep learning curve, applying his skills to the extremely complex domain of speech and communication technology. In just 8 weeks, Ibad and team were able to come up to speed and produce some highly credible research outputs, highly relevant to our work. Ibad is diligent, patient and methodical. He is an absolute pleasure to work with. He would be a strong asset within any technology team. I hope we get to work together again at some stage.",
    link: "https://www.linkedin.com/in/james-b-55b038b"
  },
  {
    image: "https://media.licdn.com/dms/image/C5603AQGEnNHaojo7wA/profile-displayphoto-shrink_100_100/0/1580414378076?e=1729123200&v=beta&t=Yw_hMnzZogp0ukUmkwcBXrMW6fYRJzAcfOcZzfNaoTM",
    name: "Rahul Sengupta",
    title: "Private Cloud and Middleware - Barclays UK | Member of CoffeeMug.ai",
    date: "June 12, 2019",
    text: "I have worked closely with Mr. Ibad Ur Rahman. He is the one of the most diligent and intelligent people I know. He has expertise in all the Machine Learning Algorithms including Linear Regression, Logistic Regression, Bayesian Regression, Basis Functions, Generalisation, K-means, etc. He is also adept at PySpark including RDD, Decision Trees, PCA and Scalable Models. Due to our project work on extending the features of the Gweek app, he has helped the team build Neural Network and various models based on Machine Learning algorithms to check for the audio classification. Without him, our project would have been a difficult affair. Apart from all this, he has a flair for Text Processing and Natural Language Processing which are extremely relevant fields in the years to come.",
    link: "https://www.linkedin.com/in/rahul-sengupta"
  },
  {
    image: "https://media.licdn.com/dms/image/v2/C4D03AQEDLrW05xNCrg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1664185335001?e=1729123200&v=beta&t=TsXKtjv-SSJ8TU60kAvx5Y3hXVNGU-Wt0y5RbskQJZg",
    name: "Martin Skauen",
    title: "Senior Data Engineer at Itera Fredrikstad",
    date: "May 26, 2019",
    text: "I worked together with Ibad on the industrial team project, in which I was really impressed by his professional skills, creative thinking and team management skills. His background in Computer Science and quick mind gave us a huge advantage in terms of understanding speech data and how to transfer our knowledge from Data Analytics on this topic of Speech Processing. Moreover, Ibad is a great motivator and leader, who can pull the strings and also handle tight deadlines. I personally value his character; modest, honest and always smiling. He has my highest recommendations.",
    link: "https://www.linkedin.com/in/mskauen"
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D5603AQGkvJYTJpcXww/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718475504864?e=1729123200&v=beta&t=fLORRfJqnKktES_k8SeNklK2GFvTPdts2No0kBWrjPw",
    name: "Yuliang Li",
    title: "Data Scientist at PwC Consulting Services | MLOps | Azure + AWS + K8S Certified",
    date: "January 23, 2019",
    text: "Ibad is a self-motivated person who has been diving deeply in data science for years because of his passion for it. He's especially good at drawing insights from data with visualization tools, I know that because we're striving for a Kaggle competition in a team.In daily life, he's a diligent student who pays efforts on not only schooling works but also off-curriculum knowledge which could benefit his career and broaden his horizon(like bitcoin techniques).All in all, he must be a high performancer in your team.",
    link: "https://www.linkedin.com/in/yuliang-li-julian"
  },
  {
    image: "https://media.licdn.com/dms/image/C5103AQHfPchNFa7ERQ/profile-displayphoto-shrink_100_100/0/1572499686209?e=1729123200&v=beta&t=mEOO6YNbnFwfS_b82oQaPJOnItMLdieQ9DkbRdvl0xI",
    name: "Ilsa Baqai",
    title: "PwC KSA Empower Council | Data Science | Machine Learning | Deep Learning | Data Analytics",
    date: "October 9, 2018",
    text: "I had the not only academic but professional interaction with Ibad. I observed Ibad wonderful to work with. He has the capability to critically analyze situations and direct his thoughts to solutions. Additionally, Ibad is also a quick learner who can adapt well to situations. He can work well independently and as a team member both. Under the light of my observations, I highly recommend Ibad.",
    link: "https://www.linkedin.com/in/ilsa-baqai"
  },
  {
    image: "https://media.licdn.com/dms/image/D4E03AQG4lGzr_9HHzg/profile-displayphoto-shrink_100_100/0/1666951332557?e=1729123200&v=beta&t=0ZwR7-SBLGskM6uYJm1LtrYCOhr7YBjfW35vVjPO220",
    name: "Pavel Romashov",
    title: "Senior product manager and former analytics engineer team lead",
    date: "March 21, 2023",
    text: "I worked together with Hafiz in Y42 as a product manager. Hafiz's performance was always on point. I also enjoyed his sense of discipline and responsibility, which made the feature development process a very enjoyable journey. I have no hesitation in recommending him to potential employers.",
    link: "https://www.linkedin.com/in/pavel-romashov"
  },
  {
    image: "https://media.licdn.com/dms/image/D4E03AQExmPZfpS7R0g/profile-displayphoto-shrink_100_100/0/1700216931518?e=1729123200&v=beta&t=Sm3CKRWaa-8UmDLHd6ccM_Aj1ijIXu7gHfDk1eMINJM",
    name: "Oltjona Dyrmishi",
    title: "Data Platforms | Data Architecture | Data Strategy | Data Governance",
    date: "March 30, 2023",
    text: "I am pleased to recommend Hafiz, a talented Python Engineer who has been a valuable member of my team during my time as his Engineering Manager. Hafiz is a hard-working individual with a disciplined and can-do mentality, consistently demonstrating a strong sense of ownership and an eagerness to challenge himself.One of Hafiz's greatest strengths is his passion for learning and desire to continually improve his skills. He is not afraid to take on new challenges, and his willingness to step outside of his comfort zone has allowed him to develop a diverse set of skills.I have no hesitation in recommending Hafiz for any future roles or opportunities. His hard-working nature, disciplined mindset, ownership mentality, and eagerness to challenge himself make him a great candidate for any Python engineering role.",
    link: "https://www.linkedin.com/in/oltjona-dyrmishi-982aba21"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{testimonial.text}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{testimonial.date}</span>
                  <a
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;