import Card from './components/Card.jsx'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    company: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizQq7KJ5NDbGjh-4wklylfJ9hAaOJ5vBtJA&s",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://pngimg.com/d/uber_PNG13.png",
    company: "Uber",
    datePosted: "2 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/045/588/943/non_2x/airbnb-logo-online-platform-for-rental-housing-free-vector.jpg",
    company: "Airbnb",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-Black-Logo.wine.svg",
    company: "Tesla",
    datePosted: "1 week ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Austin, USA"
  }
  ];

  return (
  <div className='parent'>
    {jobOpenings.map(function(elem, idx) {
      return (
        <div key={idx}>
          <Card 
            company={elem.company}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            brandLogo={elem.brandLogo}
            pay={elem.pay}
            tag2={elem.tag2}
            location={elem.location}
          />
        </div>
      )
    })}
  </div>
)
}

export default App
