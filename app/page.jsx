import Image from "next/image";
import styles from "./page.module.css";
import Feed from "@/components/Feed";
export default function Home() {
  return (
    <>
      <section className="m-10">
        <h1 className="text-center tracking-widest my-10 font-mono uppercase text-[#c9a84c]">
          Curated Dining Experiences
        </h1>

        <h1 className="text-center text-[60px] ">
          Taste the Finest <br />
          The City Offers
        </h1>

        <p className="text-center leading-8 text-[]">
          DineRate is your refined guide to exceptional restaurants. Every
          review is <br /> honest, every rating is earned — because great dining
          deserves more than <br /> a star.
        </p>
      </section>

      <Feed/>
    </>
  );
}
