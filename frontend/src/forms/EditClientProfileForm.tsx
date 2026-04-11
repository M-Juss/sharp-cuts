import { useForm } from 'react-hook-form';
import { InputWithLabel } from '../components/common/InputWithField';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EditClientFormValues,
  editClientSchema,
} from '@/validations/edit.client.validation';
import { Pencil } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ClientProfile } from '@/types/app.types';

interface EditClientProfileFormProps {
  profile: ClientProfile | null;
}

export function EditClientProfileForm({ profile }: EditClientProfileFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [snapshotValues, setSnapshotValues] =
    useState<EditClientFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<EditClientFormValues>({
    resolver: zodResolver(editClientSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      contact_number: '',
    },
  });

  useEffect(() => {
    if (profile) {
      reset({
        first_name: profile.first_name,
        last_name: profile.last_name,
        email: profile.user.email,
        contact_number: profile.contact_number,
      });
    }
  }, [profile, reset]);

  const onSubmit = async (data: EditClientFormValues) => {
    if (!isEditing) return;
    console.log(data);
    setSnapshotValues(data);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setSnapshotValues(getValues());
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    if (snapshotValues) {
      reset(snapshotValues);
    }
    setIsEditing(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 px-4 py-6 space-y-4 mb-4"
    >
      <div>
        <InputWithLabel
          label="Firstname"
          id="firstname"
          type="text"
          disabled={!isEditing}
          {...register('first_name')}
        />
        {errors.first_name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.first_name.message}
          </p>
        )}
      </div>

      <div>
        <InputWithLabel
          label="Lastname"
          id="lastname"
          type="text"
          disabled={!isEditing}
          {...register('last_name')}
        />
        {errors.last_name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.last_name.message}
          </p>
        )}
      </div>

      <div>
        <InputWithLabel
          label="Email Address"
          id="email"
          type="text"
          disabled={!isEditing}
          {...register('email')}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <InputWithLabel
          label="Contact Number"
          id="contact_number"
          type="tel"
          disabled={!isEditing}
          {...register('contact_number')}
        />
        {errors.contact_number && (
          <p className="text-red-500 text-sm mt-1">
            {errors.contact_number.message}
          </p>
        )}
      </div>

      <InputWithLabel
        label="Member Since"
        id="member_since"
        type="text"
        value={
          profile
            ? new Date(profile.created_at).toLocaleDateString('en-PH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : ''
        }
        disabled
      />

      {!isEditing && (
        <button
          type="button"
          onClick={handleEditClick}
          disabled={isSubmitting}
          className="bg-client text-white px-4 py-2 rounded-md flex items-center gap-2 w-fit"
        >
          <Pencil size={17} />
          Edit Profile
        </button>
      )}

      {isEditing && (
        <div className="flex items-center gap-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-client text-white px-4 py-2 rounded-md"
          >
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>
          <button
            type="button"
            onClick={handleCancelClick}
            disabled={isSubmitting}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      )}
    </form>
  );
}