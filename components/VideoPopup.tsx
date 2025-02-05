'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../node_modules/react-modal-video/css/modal-video.css"
import styles from "@/styles/VideoPopup.module.scss"
import { VscPlay } from 'react-icons/vsc'

interface VideoModalProps { 
	videoId?: string;
}

const VideoPopup: React.FC<VideoModalProps> = ({ videoId }) => {
	const [isOpen, setOpen] = useState<boolean>(false)
	return (
		<>
			<button onClick={() => setOpen(true)} className={styles.popupYoutube}>
				<VscPlay size={30} className='text-white' />
			</button>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId={videoId || "rhu7LAnc_kA"} onClose={() => setOpen(false)} />
		</>
	)
}

export default VideoPopup;