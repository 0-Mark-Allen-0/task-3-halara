import Card from "./card";
export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {[
        {
          username: "Jeremy Clarkson",
          dp: "/jc.jpg",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis fermentum lectus.",
          socials: {
            twitter: "https://twitter.com/JeremyClarkson",
            instagram: "https://www.instagram.com/jeremyclarkson1/?hl=en",
          },
        },
        {
          username: "Richard Hammond",
          dp: "/rh.jpg",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis fermentum lectus.",
          socials: {
            twitter: "https://twitter.com/JeremyClarkson",
            instagram: "https://www.instagram.com/jeremyclarkson1/?hl=en",
            linkedin: "https://in.linkedin.com/",
          },
        },
        {
          username: "James May",
          dp: "/jm.jpg",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis fermentum lectus.",
          socials: {
            instagram: "https://www.instagram.com/jeremyclarkson1/?hl=en",
            linkedin: "https://in.linkedin.com/",
          },
        },
        {
          username: "Lewis Hamilton",
          dp: "/lh.jpg",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis fermentum lectus.",
          socials: {
            instagram: "https://www.instagram.com/jeremyclarkson1/?hl=en",
          },
        },
        {
          username: "Tom Cruise",
          dp: "/tc.jpg",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis fermentum lectus.",
          socials: {
            twitter: "https://twitter.com/JeremyClarkson",
          },
        },
        {
          username: "Virat Koli",
          dp: "/vk.jpg",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis fermentum lectus.",
          socials: {
            twitter: "https://twitter.com/JeremyClarkson",
            instagram: "https://www.instagram.com/jeremyclarkson1/?hl=en",
            linkedin: "https://in.linkedin.com/",
          },
        },
      ].map((person, index) => (
        <div key={index} className="place-self-center py-4">
          <Card
            username={person.username}
            dp={person.dp}
            bio={person.bio}
            socials={person.socials}
          />
        </div>
      ))}
    </div>
  );
}
