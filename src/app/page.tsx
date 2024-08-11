import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-2">
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
            <p className="backdrop-blur-[3px]">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-[#E11D48] to-[#9916FF] bg-clip-text font-bold text-transparent">
                Anidey
              </span>
              : Your Top Destination for Ad-Free Anime Streaming
            </p>
            <Link href="/anime">
              <Button variant={"secondary"} className="mt-5">
                Dive Right In!
              </Button>
            </Link>
          </div>
        </div>
        <div className="block pt-5 text-center text-xl text-yellow-200 lg:hidden">
          <p className="backdrop-blur-[1px]">
            Welcome to{" "}
            <span className="font-semibold text-rose-500">Anidey</span>: Your
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
        <h1 className="hidden text-xl lg:block">Explore, Play and Connect</h1>

        <div className="pt-5 lg:pt-10">
          <h2 className="text-2xl text-[#8F00FF]">
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
          <h2 className="text-2xl text-[#8F00FF]">
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
          <h2 className="text-2xl text-[#8F00FF]">
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
          <h2 className="text-2xl text-[#8F00FF]">
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
          <h2 className="text-2xl text-[#8F00FF]">Join the Anidey Community</h2>
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
          <h2 className="text-2xl text-[#8F00FF]">Follow Us for Updates</h2>
          <p>Stay updated with the latest news and announcements:</p>
          <ul className="list-inside list-disc pt-4 text-lg">
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="pt-10">
          <h2 className="text-2xl text-[#8F00FF]">Contact Us</h2>
          <ul className="list-inside list-disc pt-4 text-lg">
            <li>
              24/7 Support: Need assistance? Our support team is available
              around the clock to assist you. Contact us at support@anidey.com
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <h2 className="text-2xl text-[#8F00FF]">Disclaimer</h2>
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
