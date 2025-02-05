'use client';
import Link from "next/link";
import { PiUsersThree } from "react-icons/pi";
import styles from "@/styles/Homepage/LocalExpertise.module.scss";
import CounterNumber from "../CounterNumber";

const LocalExpertise = () => {
  return (
    <section className={`idx-container ${styles.container}`}>
      <div className="idx-section">
        <div className="flex justify-between">
          <div className="w-full md:w-1/2">
            <div className="wow relative animate__animated animate__fadeInLeft">
              <img src="/images/section/luxury-home-1.jpg" className={styles.image} alt="" />
              <div className={styles.imageTop}>
                <div className="icon">
                  <PiUsersThree size={25} />
                </div>
                <div>
                  <p>Total Clients</p>
                  <h4>7,000 M</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-5/12">
            <div className={styles.content}>
              <h2 className="wow animate__animated animate__fadeInUp">Local expertise for <br /> luxury homes</h2>
              <div className="text-content wow animate__animated animate__fadeInUp">Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non.</div>
              <Link href="/#" className="idx-button wow animate__animated animate__fadeInUp">Learn More <i className="icon-arrow-right-add" /></Link>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="counter flex justify-between items-center">
            <div className="number-counter">
              <div className="text-center">
                $<CounterNumber />.4M
              </div>
              <p>Owned from properties transactions</p>
            </div>
            <div className="number-counter">
              <div className="text-center">
                $<CounterNumber />K+
              </div>
              <p>Properties for Buy</p>
            </div>
            <div className="number-counter">
              <div className="text-center">
                $<CounterNumber />K+
              </div>
              <p>Properties for Sell</p>
            </div>
            <div className="number-counter">
              <div className="text-center">
                $<CounterNumber />
              </div>
              <p>Daily completed transactions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocalExpertise;