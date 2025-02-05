'use client';
import { Button, Input, Textarea, Select, SelectItem } from '@nextui-org/react';
import styles from '@/styles/PropertyDetail/ContactInformation.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';

export default function ContactInformation() {
  const { configuration } = useGlobalContext();
  return (
    <div className={`bg-white sticky top-[105px] p-6 rounded-lg shadow-md ${styles.contactInformation}`}>
      {/* Header */}
      <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

      {/* Contact Details */}
      <div className="flex items-center mb-4">
        <img
          src="/images/sidebar/agent-1.png"
          alt="Jane Cooper"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <p className="text-lg font-medium">{configuration?.website?.agent_name}</p>
          <p className="text-sm text-gray-500">{configuration?.website?.email}</p>
          <p className="text-sm text-gray-500">{configuration?.website?.phone}</p>
        </div>
      </div>

      {/* Form */}
      <form>
        {/* Name Input */}
        <Input
          fullWidth
          type="text"
          label="Name"
          placeholder="Name"
          // bordered
          className="mb-4"
        />

        {/* Phone Input */}
        <Input
          fullWidth
          type="tel"
          label="Phone"
          placeholder="Phone"
          // bordered
          className="mb-4"
        />

        {/* Email Input */}
        <Input
          fullWidth
          type="email"
          label="Email"
          placeholder="Email"
          // bordered
          className="mb-4"
        />

        {/* Time Selector */}
        <div className="mb-4">
          <Select
            fullWidth
            label="Preferred Time"
            placeholder="Select a time"
            // bordered
          >
            <SelectItem value="6 AM">6 AM</SelectItem>
            <SelectItem value="7 AM">7 AM</SelectItem>
            <SelectItem value="8 AM">8 AM</SelectItem>
          </Select>
        </div>

        {/* Message Textarea */}
        <Textarea
          fullWidth
          label="Message"
          placeholder="Type your message here..."
          // bordered
          rows={4}
          className="mb-6"
        />

        {/* Submit Button */}
        <Button className="w-full bg-yellow-500 text-white">
          Send Message →
        </Button>
      </form>
    </div>
  );
}