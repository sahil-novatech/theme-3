
'use client';
import styles from "@/styles/Homepage/BecomeAgent.module.scss"
import { Button } from "@nextui-org/react"

export default function BecomeAgent() {
	return (
		<>
			<section className={`idx-container`}>
				<div className={`idx-section ${styles.container}`}>
          <div className="col-12">
            <div className="flex justify-between items-center flex-wrap gap15">
              <div>
                <h3 className="text-3xl font-bold wow animate__animated animate__fadeInUp">Become a Real Estate Agent</h3>
                <div className="mt-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">We only work with the best
                  companies around the globe</div>
              </div>
              <Button className="idx-button wow animate__animated animate__fadeInRight">Register Now<i className="icon-arrow-right-add" /></Button>
            </div>
          </div>
        </div>
			</section>
		</>
	)
}
