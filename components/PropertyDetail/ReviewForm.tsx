'use client'
import { Input, Button, Textarea } from '@nextui-org/react';
import styles from '@/styles/PropertyDetail/ReviewForm.module.scss';
import Rating from '../Rating';

const ReviewForm = () => {

  return (
    <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
      <div>Your email address will not be published. Required fields are marked *</div>
      <div className={styles.ratingContainer}>
        <label htmlFor='rating'>Your Rating *</label>
        <Rating />
      </div>

      <Textarea
        className={styles.formInput}
        label="Your Comment"
        placeholder="Enter your comment here..."
        required
      />

      <Input
        className={styles.formInput}
        label="Name"
        placeholder="Your Name"
        required
      />

      <Input
        className={styles.formInput}
        label="Email"
        placeholder="Your Email"
        type="email"
        required
      />

      <Input
        className={styles.formInput}
        label="Website"
        placeholder="Your Website"
      />

      <div className={styles.checkboxContainer}>
        <input type='checkbox' />
        <span>Save my name, email, and website for the next time I comment.</span>

        {/* <Checkbox></Checkbox> */}
      </div>

      <Button className="idx-button mt-3" type="submit">
        Submit Review
      </Button>
    </form>
  );
};

export default ReviewForm;