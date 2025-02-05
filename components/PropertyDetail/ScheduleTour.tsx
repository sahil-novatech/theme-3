'use client';
import { useState } from 'react';
import { Button, Input, Textarea, Select, SelectItem } from '@nextui-org/react';
import styles from '@/styles/PropertyDetail/ScheduleTour.module.scss'

export default function ScheduleTour() {
  const [selectedMode, setSelectedMode] = useState<'In Person' | 'Video Chat'>('In Person');

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${styles.scheduleTour}`}>
      <h3 className="text-lg font-semibold mb-4">Schedule a tour</h3>
      <form>
        {/* Date Input */}
        <Input
          fullWidth
          type="date"
          label="Date"
          // bordered
          className="mb-4"
        />

        {/* Time Selector */}
        <div className="mb-4">
          <Select
            fullWidth
            label="Time"
            placeholder="Select a time"
            // bordered
          >
            <SelectItem value="6 AM">6 AM</SelectItem>
            <SelectItem value="7 AM">7 AM</SelectItem>
            <SelectItem value="8 AM">8 AM</SelectItem>
            <SelectItem value="9 AM">9 AM</SelectItem>
            <SelectItem value="10 AM">10 AM</SelectItem>
            <SelectItem value="11 AM">11 AM</SelectItem>
            <SelectItem value="12 PM">12 PM</SelectItem>
          </Select>
        </div>

        {/* Mode Selector */}
        <div className="flex gap-2 mb-4">
          <Button
            // auto
            // light={selectedMode !== 'In Person'}
            onPress={() => setSelectedMode('In Person')}
            className={`w-1/2 ${selectedMode === 'In Person' ? 'bg-yellow-500 text-white' : ''}`}
          >
            In Person
          </Button>
          <Button
            // auto
            // light={selectedMode !== 'Video Chat'}
            onPress={() => setSelectedMode('Video Chat')}
            className={`w-1/2 ${selectedMode === 'Video Chat' ? 'bg-yellow-500 text-white' : ''}`}
          >
            Video Chat
          </Button>
        </div>

        {/* Name Input */}
        <Input
          fullWidth
          type="text"
          label="Name"
          placeholder="Ali Tufan"
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
          Submit a Tour Request
        </Button>
      </form>
    </div>
  );
}