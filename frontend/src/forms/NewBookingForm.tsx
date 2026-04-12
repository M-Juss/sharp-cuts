'use client';

import {useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
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
import {ClientProfile} from '@/types/app.types';
import {
  NewBookingFormValues,
  newBookingSchema,
} from '@/validations/new.booking.validation';

interface NewBookingFormProps {
  profile?: ClientProfile | null;
}

const branchOptions = [
  {value: 'main', label: 'Main Branch'},
  {value: 'north', label: 'North Branch'},
  {value: 'south', label: 'South Branch'},
];

const serviceOptions = [
  {value: 'classic_cut', label: 'Classic Cut'},
  {value: 'signature_cut', label: 'Signature Cut'},
  {value: 'beard_trim', label: 'Beard Trim'},
];

const barberOptions = [
  {value: 'marcus_williams', label: 'Marcus Williams'},
  {value: 'james_rodriguez', label: 'James Rodriguez'},
  {value: 'andre_thompson', label: 'Andre Thompson'},
];

const timeOptions = [
  {value: '09:00', label: '09:00 AM'},
  {value: '10:00', label: '10:00 AM'},
  {value: '11:00', label: '11:00 AM'},
  {value: '13:00', label: '01:00 PM'},
  {value: '14:00', label: '02:00 PM'},
  {value: '15:00', label: '03:00 PM'},
];

export function NewBookingForm({profile}: NewBookingFormProps) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting},
  } = useForm<NewBookingFormValues>({
    resolver: zodResolver(newBookingSchema),
    defaultValues: {
      fullname: '',
      email: '',
      contact_number: '',
      branch: '',
      service: '',
      barber: '',
      booking_date: undefined,
      booking_time: '',
    },
  });

  useEffect(() => {
    if (!profile) return;

    reset((currentValues) => ({
      ...currentValues,
      fullname: `${profile.first_name} ${profile.last_name}`.trim(),
      email: profile.user.email,
      contact_number: profile.contact_number,
    }));
  }, [profile, reset]);

  const onSubmit = async (data: NewBookingFormValues) => {
    console.log('New booking payload:', data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full space-y-5">
        <div>
          <InputWithLabel
            label="Fullname"
            id="fullname"
            type="text"
            placeholder="John Doe"
            variant="gray"
            icon={<IdCard size={23} />}
            readOnly={Boolean(profile)}
            {...register('fullname')}
          />
          {errors.fullname && (
            <p className="text-xs text-red-500">{errors.fullname.message}</p>
          )}
        </div>

        <div className="flex space-x-8">
          <div className="w-full">
            <InputWithLabel
              label="Email"
              id="email"
              type="text"
              placeholder="email@gmail.com"
              variant="gray"
              icon={<Mail size={20} />}
              readOnly={Boolean(profile)}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full">
            <InputWithLabel
              label="Contact Number"
              id="contact_number"
              type="text"
              placeholder="09999999999"
              variant="gray"
              icon={<Phone size={20} />}
              readOnly={Boolean(profile)}
              {...register('contact_number')}
            />
            {errors.contact_number && (
              <p className="text-xs text-red-500">{errors.contact_number.message}</p>
            )}
          </div>
        </div>

        <div>
          <Controller
            name="branch"
            control={control}
            render={({field}) => (
              <SelectWithLabel
                id="branch"
                label="Select Branch"
                variant="gray"
                icon={<Building size={20} />}
                placeholder="Choose branch"
                groupLabel="Branches"
                options={branchOptions}
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />
          {errors.branch && (
            <p className="text-xs text-red-500">{errors.branch.message}</p>
          )}
        </div>

        <div>
          <Controller
            name="service"
            control={control}
            render={({field}) => (
              <SelectWithLabel
                id="service"
                label="Select Service"
                variant="gray"
                icon={<Scissors size={20} />}
                placeholder="Choose service"
                groupLabel="Services"
                options={serviceOptions}
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />
          {errors.service && (
            <p className="text-xs text-red-500">{errors.service.message}</p>
          )}
        </div>

        <div>
          <Controller
            name="barber"
            control={control}
            render={({field}) => (
              <SelectWithLabel
                id="barber"
                label="Select Barber"
                variant="gray"
                icon={<IdCardLanyard size={23} />}
                placeholder="Choose barber"
                groupLabel="Barbers"
                options={barberOptions}
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />
          {errors.barber && (
            <p className="text-xs text-red-500">{errors.barber.message}</p>
          )}
        </div>

        <div className="flex space-x-8">
          <div className="w-full">
            <Controller
              name="booking_date"
              control={control}
              render={({field}) => (
                <DateTimePickerLabel
                  id="booking_date"
                  label="Select a Date"
                  icon={<Calendar size={20} />}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.booking_date && (
              <p className="text-xs text-red-500">{errors.booking_date.message}</p>
            )}
          </div>

          <div className="w-full">
            <Controller
              name="booking_time"
              control={control}
              render={({field}) => (
                <SelectWithLabel
                  id="booking_time"
                  label="Select Time"
                  variant="gray"
                  icon={<Clock size={20} />}
                  placeholder="Choose time"
                  groupLabel="Time Slots"
                  options={timeOptions}
                  value={field.value}
                  onValueChange={field.onChange}
                />
              )}
            />
            {errors.booking_time && (
              <p className="text-xs text-red-500">{errors.booking_time.message}</p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full font-semibold text-white rounded-xl bg-client py-5"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}
