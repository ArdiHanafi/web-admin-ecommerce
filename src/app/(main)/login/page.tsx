'use client';

import React, { Suspense, useTransition } from 'react';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from '@/components/atoms';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/schemas';
// import { useSearchParams } from 'next/navigation';
import { Loading } from '@/components/molecules';
import { IconLock, IconUser } from '@/assets/icons';
// import { login } from '@/actions/auth/login';

const Login: React.FC = () => {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get('callbackUrl');

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      // login(values, totpCode === '' ? undefined : totpCode, callbackUrl)
      //   .then((data) => {})
      //   .catch(() => toastError('Something went wrong'));
    });
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full max-w-96 rounded-xl border border-base-content/10 bg-base-200 px-4 py-6">
        <h1 className="mb-6 text-center font-medium tracking-widest">LOGIN</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      id="identifier"
                      disabled={isPending}
                      placeholder="Email"
                      icon={
                        <IconUser className="z-10 mt-1 h-4 w-4 text-base-content" />
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormControl>
                    <Input
                      {...field}
                      id="password"
                      disabled={isPending}
                      placeholder="Password"
                      type="password"
                      icon={<IconLock className="h-4 w-4 text-base-content" />}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-6 h-9 w-full"
              variant="primary"
              type="submit"
              isLoading={isPending}
              disabled={isPending}
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </Suspense>
  );
};

export default Login;
