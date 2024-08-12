import { Button } from "@/components/ui/button";
import { DotGothic16, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const dotgotchic16 = DotGothic16({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`px-2 ${poppins.className}`}>
      <div className="mx-auto max-w-[1440px]">
        <div className="relative mx-auto pt-20">
          <Image
            src={"/home.jpg"}
            className="mx-auto"
            width={1000}
            height={100}
            alt="Hero"
          />
          <div className="absolute bottom-[50px] left-[325px] hidden text-center text-2xl text-slate-200 lg:block">
            <p className={`backdrop-blur-[3px] ${dotgotchic16.className}`}>
              Welcome to{" "}
              <span className="bg-gradient-to-r from-[#E11D48] to-[#9916FF] bg-clip-text font-extrabold text-transparent">
                Anidey
              </span>
              : Your Top Destination for Ad-Free Anime Streaming
            </p>
            <Link href="/anime">
              <Button
                variant={"secondary"}
                className={`mt-5 ${dotgotchic16.className}`}
              >
                Dive Right In!
              </Button>
            </Link>
          </div>
        </div>
        <div className="block pt-5 text-center text-xl text-yellow-200 lg:hidden">
          <p className="backdrop-blur-[1px]">
            Welcome to{" "}
            <span className="font-semibold text-[#E11D48]">Anidey</span>: Your
            Top Destination for Ad-Free Anime Streaming
          </p>
          <Link href="/anime">
            <Button variant={"secondary"} className="mt-5 w-full lg:mt-0">
              Dive Right In!
            </Button>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-[1000px] py-5 pb-10 text-center lg:text-left">
        <h1 className={`hidden text-xl lg:block ${dotgotchic16.className}`}>
          Explore, Play and Connect
        </h1>

        <div className="pt-5 lg:pt-10">
          <h2 className={`text-2xl text-[#8F00FF] ${dotgotchic16.className}`}>
            Start Your Anime Adventure Today
          </h2>
          <ul className="list-inside list-disc pt-4 text-lg">
            <li>
              Discover and stream your favorite anime series, play games, and
              connect with a passionate community of anime lovers on Anidey.
              Join us and experience anime like never before.
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <h2 className={`text-2xl text-[#8F00FF] ${dotgotchic16.className}`}>
            Discover Our Extensive Anime Collection
          </h2>
          <ul className="list-inside list-disc pt-4 text-lg">
            <li>
              Unlimited Anime: Stream thousands of anime series and movies in HD
              quality, completely free of ads.
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <h2 className={`text-2xl text-[#8F00FF] ${dotgotchic16.className}`}>
            Engage with Games and Activities
          </h2>
          <ul className="list-inside list-disc pt-4 text-lg">
            <li>
              Anime Games: Immerse yourself in interactive games featuring your
              favorite anime characters and worlds. Compete with friends and
              challenge your skills!
            </li>
            <li>
              Quizzes and Trivia: Test your anime knowledge with fun quizzes and
              trivia games. Learn fascinating facts about your beloved series.
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <h2 className={`text-2xl text-[#8F00FF] ${dotgotchic16.className}`}>
            Coming Soon: Social Media Integration
          </h2>
          <ul className="list-inside list-disc pt-4 text-lg">
            <li>
              Connect with the Community: Stay tuned for our upcoming social
              media features. Connect with anime fans worldwide, share fan art,
              and discuss your favorite anime moments.
            </li>
          </ul>
        </div>

        <div className="pt-10">
          <h2 className={`text-2xl text-[#8F00FF] ${dotgotchic16.className}`}>
            Join the Anidey Community
          </h2>
          <ul className="list-inside list-disc pt-4 text-lg">
            <li>
              Free Sign-Up: Join Anidey for free and start streaming instantly.
              Customize your profile, save your favorites, and receive
              personalized recommendations.
            </li>
            <li>
              Community Forums: Engage in discussions, share theories, and
              connect with fellow anime enthusiasts in our vibrant community
              forums.
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <h2 className={`text-2xl text-[#8F00FF] ${dotgotchic16.className}`}>
            Follow Us for Updates
          </h2>
          <p>Stay updated with the latest news and announcements:</p>
          <ul className="list-inside list-disc pt-4 text-lg">
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="pt-10">
          <h2 className={`text-2xl text-[#8F00FF] ${dotgotchic16.className}`}>
            Contact Us
          </h2>
          <ul className="list-inside list-disc pt-4 text-lg">
            <li>
              24/7 Support: Need assistance? Our support team is available
              around the clock to assist you. Contact us at support@anidey.com
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <h2 className={`text-2xl text-[#8F00FF] ${dotgotchic16.className}`}>
            Disclaimer
          </h2>
          <ul className="list-inside list-disc pt-4 text-lg">
            <li>
              Anidey does not own the content displayed on this website. All
              anime series and movies are owned by their respective creators and
              distributors.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
