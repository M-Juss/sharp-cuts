"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { InputWithLabel } from "../components/common/InputWithField";
import { Button } from "../components/ui/button";
import { DialogTitle } from "../components/ui/dialog";
import {
  editClientPasswordSchema,
  EditClientPasswordFormValues,
} from "../validations/edit.client.validation";

export function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditClientPasswordFormValues>({
    resolver: zodResolver(editClientPasswordSchema),
  });

  const onSubmit = async (data: EditClientPasswordFormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-zinc-900 border border-client rounded-xl py-8 px-10 flex flex-col text-white shadow-2xl">
      <DialogTitle className="sr-only">Change Password</DialogTitle>
      <h1 className="text-xl flex items-center justify-center gap-3 border border-client rounded-xl p-2 mb-6">
        <KeyRound size={30} className="bg-client p-1 rounded-md" />
        Change Password
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full space-y-4"
      >
        <div>
          <InputWithLabel
            label="Password"
            id="password"
            type="password"
            placeholder="Current password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-red-400 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <InputWithLabel
            label="New Password"
            id="new_password"
            type="password"
            placeholder="New password"
            {...register("new_password")}
          />
          {errors.new_password && (
            <p className="text-xs text-red-400 mt-1">
              {errors.new_password.message}
            </p>
          )}
        </div>

        <div>
          <InputWithLabel
            label="Confirm New Password"
            id="confirm_new_password"
            type="password"
            placeholder="Confirm new password"
            {...register("confirm_new_password")}
          />
          {errors.confirm_new_password && (
            <p className="text-xs text-red-400 mt-1">
              {errors.confirm_new_password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full font-semibold bg-client hover:bg-client/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Changing Password..." : "Change Password"}
        </Button>
      </form>
    </div>
  );
}
