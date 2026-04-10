import {InputWithLabel} from '../components/common/InputWithField';
import {Button} from '../components/ui/button';
import {SelectWithLabel} from '../components/common/SelectWithLabel';
import {DateTimePickerLabel} from '../components/common/DatePickerWithLabel';
import {IdCard} from 'lucide-react';
import {Mail} from 'lucide-react';
import {Phone} from 'lucide-react';
import {Building} from 'lucide-react';
import {Scissors} from 'lucide-react';
import {Calendar} from 'lucide-react';
import {Clock} from 'lucide-react';
import {IdCardLanyard} from 'lucide-react';

export function NewBookingForm() {
  return (
    <div>
      <form className="flex flex-col w-full space-y-5">
        <InputWithLabel
          label="Fullname"
          id="fullname"
          type="text"
          placeholder="John Doe"
          variant="gray"
          icon={<IdCard size={23} />}
        />

        <div className="flex space-x-8">
          <InputWithLabel
            label="Email"
            id="email"
            type="text"
            placeholder="email@gmail.com"
            variant="gray"
            icon={<Mail size={20} />}
          />

          <InputWithLabel
            label="Contact Number"
            id="contanct_number"
            type="text"
            placeholder="09999999999"
            variant="gray"
            icon={<Phone size={20} />}
          />
        </div>

        <SelectWithLabel
          label="Select Branch"
          variant="gray"
          icon={<Building size={20} />}
        />

        <SelectWithLabel
          label="Select Service"
          variant="gray"
          icon={<Scissors size={20} />}
        />

        <SelectWithLabel
          label="Select Barber"
          variant="gray"
          icon={<IdCardLanyard size={23} />}
        />

        <div className="flex space-x-8">
          <DateTimePickerLabel
            label="Select a Date"
            icon={<Calendar size={20} />}
          />
          <SelectWithLabel
            label="Select Time"
            variant="gray"
            icon={<Clock size={20} />}
          />
        </div>

        <Button
          type="submit"
          className="w-full font-semibold text-white rounded-xl bg-client py-5"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
