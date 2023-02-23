import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            <a href="#hero">🚀 Acme Rockets</a>
          </h1>
          <div>
            <button
              id="hamburger-button"
              className="text-3xl md:hidden cursor-pointer"
            >
              &#9776;
            </button>
            <nav
              className="hidden md:block space-x-8 text-xl"
              aria-label="main"
            >
              <a href="#rockets" className="hover:opacity-90">
                Our Rockets
              </a>
              <a href="#testimonials" className="hover:opacity-90">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-90">
                Contact Us
              </a>
            </nav>
          </div>
        </section>
      </header>
      <main className="max-w-4xl mx-auto">
        <section
          id="hero"
          className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
        >
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
              We Boldly Go{" "}
              <span className="text-indigo-700 dark:text-indigo-300">
                Where No Rocket
              </span>{" "}
              Has Gone Before ...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              We&apos;re building rockets for the next century. From the Moon to
              Mars, Jupiter and beyond....
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              Think Acme Rockets
            </p>
          </article>
          <img className="w-1/2" src="./img/rocketdab.png" alt="rocketdab" />
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="rockets" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Rockets
          </h2>
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <img
                src="./img/rocketman.png"
                alt="explore"
                className="w-1/2 mb-6"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Explorer
              </h3>
              <p className="hidden sm:block text-3xl mt-2 text-center text-slate-500 dark:text-slate-400">
                $
              </p>
              <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400">
                Affordable Exploration
              </p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <img
                src="./img/rocketride.png"
                alt="adventurer"
                className="w-1/2 mb-6"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Adventurer
              </h3>
              <p className="hidden sm:block text-3xl mt-2 text-center text-slate-500 dark:text-slate-400">
                $$
              </p>
              <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400">
                Best Selling Rocket!
              </p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <img
                src="./img/rocketlaunch.png"
                alt="infinity"
                className="w-1/2 mb-6"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Infinity
              </h3>
              <p className="hidden sm:block text-3xl mt-2 text-center text-slate-500 dark:text-slate-400">
                $$$
              </p>
              <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400">
                Luxury Starship
              </p>
            </li>
          </ul>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="testimonials" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Testimonials
          </h2>
          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
              <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before-transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-12 after:right-0 after:text-9xl after:text-white after:opacity-25 after-transform after:-translate-x-2 after:-translate-y-2">
                Acme has always been there for me. Their Explorer rocket arrived
                in a wooden crate as expected. Life-long customer! A++ shopping
                experience.
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
              &#8212;Wile E. Cayote, Genius
            </figcaption>
          </figure>
          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
              <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before-transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-12 after:right-0 after:text-9xl after:text-white after:opacity-25 after-transform after:-translate-x-2 after:-translate-y-2">
                The Acme Adventurer Rocket has thwarted my Illudium Q-36
                Explosive Space Modulator on several occassions.{" "}
                <span className="italic">This makes me very very angry!</span>{" "}
                Nevertheless, K-9 and I have awarded Acme the Martian contract
                for space exploration rockets based on Acme&apos;s quality and
                sturdy designs.
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
              &#8212;Marvin The Martian &amp; K-9
            </figcaption>
          </figure>
          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
              <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before-transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-12 after:right-0 after:text-9xl after:text-white after:opacity-25 after-transform after:-translate-x-2 after:-translate-y-2">
                I knew I not only wanted &#8212;{" "}
                <span className="italic">I needed</span> &#8212; Acme&apos;s
                Infinity Rocket for my mission in space. Acme delivered in one
                day! Nothing says{" "}
                <q className="italic">Take me to your leader</q> like
                Acme&apos;s Infinity Rocket! 💯
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
              &#8212;Buzz Lightyear
            </figcaption>
          </figure>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="contact" className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Contact Us
          </h2>
          <form
            action=""
            className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
          >
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              minLength={3}
              maxLength={60}
              placeholder="Your Subject"
              className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Type your message"
              required
              className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
            ></textarea>
            <button
              type="submit"
              className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <footer id="footer" className="bg-teal-700 text-white text-xl">
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
          <address>
            <h2>Acme Rocket-Powered Products, Inc.</h2>
            555 Astro Way
            <br />
            Fairfield, New Jersey 12345-5555
            <br />
            Email:{" "}
            <a href="mailto:inquiries@acmerockets.com">
              Inquires@AcmeRockets.com
            </a>
            <br />
            Phone: <a href="tel:+15555555555">(555) 555-5555</a>
          </address>
          <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact us
            </a>
          </nav>
          <div className="flex flex-col sm:gap-2">
            <p className="text-right">
              Copyright &copy; <span id="year">2023</span>
            </p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </div>
  );
}
