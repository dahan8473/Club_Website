/* File to store all team members' data, which is then imported into the 
Team.jsx file to display the team members on the website. */

export const team = [
  {
    name: "John Doe",
    position: "V.P. of Janitorial Excellence",
    team: "Exec Team",
    description: (
      <div>
        <p className="mb-2">
          I'm a third year at Western University, and I'm excited to be a part
          of the team! I'm looking forward to working with all of you!
        </p>
        <h3 className="text-lg text-white font-semibold mt-4 mb-2">Major:</h3>
        <p className="mb-4">General Janitorial Program</p>

        <h3 className="text-lg text-white font-semibold mt-4 mb-2">
          Fun Facts:
        </h3>
        <ul className="text-left list-disc list-inside mb-4">
          <li>Loves to clean</li>
          <li>Has a collection of vintage brooms</li>
          <li>Enjoys organizing spaces</li>
        </ul>

        <h3 className="text-lg text-white font-semibold mt-4 mb-2">Hobbies:</h3>
        <ul className="text-left list-disc list-inside">
          <li>Cleaning</li>
          <li>Organizing</li>
          <li>Reading about cleaning techniques</li>
        </ul>
      </div>
    ),
    image:
      "https://media.istockphoto.com/id/1051202402/photo/portrait-of-smiling-businessman-holding-tablet-and-making-ok-sign.jpg?s=612x612&w=0&k=20&c=kyiOeGPmI2aPzK9V1WY7ZTABtEQi5nvm12hcz3ccmc0=",
    bgColor: "#f0f8ff", // AliceBlue
  },
  {
    name: "Jane Doe",
    position: "V.P. of Marketing",
    team: "Exec Team",
    description:
      "I'm a fourth year in the Marketing program at Western University, and I'm excited to be a part of the team! My hobbies are marketing, marketing, and marketing. I'm looking forward to working with all of you!",
    image:
      "https://as2.ftcdn.net/v2/jpg/02/08/11/65/500_F_208116581_X2PxIJoaq6sOYRhfkqWSX9sjUmxKgfh3.jpg",
    bgColor: "#fafad2", // LightGoldenRodYellow
  },
  {
    name: "Jack Doe",
    position: "V.P. of Technology",
    team: "Exec Team",
    description:
      "I'm a fifth year in the Technology program at Western University, and I'm excited to be a part of the team! My hobbies are technology, technology, and technology. I'm looking forward to working with all of you!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCpt9R0oqB1CJTdjt6v1nOJLUkunmPacIOQ&s",
    bgColor: "#add8e6", // LightBlue
  },
  {
    name: "Emily Smith",
    position: "Director of Operations",
    description:
      "I oversee all operations at Western TSI. With a background in management and logistics, I ensure everything runs smoothly.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8bZLUBIFKBOCGQSdOtc7rm5A3bhitwfwWg&s",
    bgColor: "#ffe4e1", // MistyRose
  },
  {
    name: "Michael Brown",
    position: "Lead Developer",
    team: "Exec Team",
    description:
      "As the lead developer, I architect and build robust solutions to tackle complex technical challenges.",
    image:
      "https://i.pinimg.com/originals/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg",
    bgColor: "#e6e6fa", // Lavender
  },
  {
    name: "Sarah Johnson",
    position: "Marketing Specialist",
    team: "Dev Team",
    description:
      "I handle all things marketing, from campaigns to social media. Let's create some buzz!",
    image:
      "https://media.licdn.com/dms/image/D4E03AQFShm5AykgrgA/profile-displayphoto-shrink_200_200/0/1697159163922?e=2147483647&v=beta&t=aUcLV1uMKfqqwmQkAGlHMkEbzmLmC-Mv0OJve0i8waA",
    bgColor: "#f0e68c", // Khaki
  },
  {
    name: "David Wilson",
    position: "Senior Designer",
    team: "Dev Team",
    description:
      "With an eye for aesthetics, I design elegant and intuitive user interfaces.",
    image:
      "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
    bgColor: "#87ceeb", // SkyBlue
  },
  {
    name: "Emma Garcia",
    position: "Finance Manager",
    team: "Finance Team",
    description:
      "I manage finances and ensure our budgets are well-planned and executed.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1632213066510-Y4M7JJYPMEJLP1DI4HC2/Andrine+Business+Headshot+London.jpg",
    bgColor: "#ffe4b5", // Moccasin
  },
];
