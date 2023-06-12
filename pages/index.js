import Image from "next/image";
import { Inter } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import styles from "../styles/Home.module.css";
import Banner from "@/componrents/banner/banner";
import Head from "next/head";
import NavBar from "@/componrents/nav/navbar";

import SectionCards from "@/componrents/card/section-cards";
import Card from "@/componrents/card/card";
const inter = Inter({ subsets: ["latin"] });
const roboto_slab = Roboto_Slab({ subsets: ["latin"] });
// import { getVideos, getPopularVideos } from "@/lib/videos";
// const disneyVideos = await getVideos("disney trailer");

// export async function getServerSideProps(context) {
//   const disneyVideos = await getVideos("disney trailer");
//   const productivityVideos = await getVideos("Productivity");

//   const travelVideos = await getVideos("indie music");

//   const popularVideos = await getPopularVideos();

//   return {
//     props: { disneyVideos, travelVideos, productivityVideos, popularVideos },
//   };
// }

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.main}>
        <NavBar />
        <Banner
          videoId='4zH5iYM4wJo'
          title='Clifford the red dog'
          subTitle='a very cute dog'
          imgUrl='/static/clifford.webp'
        />
        <div className={styles.sectionWrapper}>
          <SectionCards title='Disney' />
        </div>
        {/* <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} size="large" />
          <SectionCards title="Travel" videos={travelVideos} size="small" />
          <SectionCards
            title="Productivity"
            videos={productivityVideos}
            size="medium"
          />
          <SectionCards title="Popular" videos={popularVideos} size="small" />
        </div> */}
      </div>
    </div>
  );
}
