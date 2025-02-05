import FilterBar from "@/components/Homepage/FilterBar";
import styles from '@/styles/home.module.scss';
import HomesCarousel from "@/components/Homepage/HomesCarousel";
import CityCards from "@/components/Homepage/CityCards";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs";
// import BestProperties from "@/components/Homepage/BestProperties";
// import LocalExpertise from "@/components/Homepage/LocalExpertise";
import PropertyOptions from "@/components/Homepage/PropertyOptions";
import BecomeAgent from "@/components/Homepage/BecomeAgent";
import SliderNews from "@/components/Homepage/SliderNews";

export default function Home() {
  return (
    <section>
      <div className={styles.filterContainer}>
        <FilterBar />
      </div>
      <HomesCarousel recent={false} />
      <CityCards />
      <WhyChooseUs />
      <HomesCarousel recent={true} />
      {/* <BestProperties /> */}
      {/* <LocalExpertise /> */}
      <SliderNews />
      <PropertyOptions />
      <BecomeAgent />
    </section>
  );
}
