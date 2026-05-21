-- LearnIndians Supabase setup
-- Run this in Supabase SQL Editor after creating your project.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  email text not null,
  role text not null default 'student' check (role in ('student', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.enrollments (
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id text not null,
  paid boolean not null default false,
  completed_modules jsonb not null default '[]'::jsonb,
  quiz_passed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, course_id)
);

create table if not exists public.certificates (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id text not null,
  student_name text not null,
  course_title text not null,
  completed_at timestamptz not null default now(),
  verification_url text not null,
  issuer text not null default 'LearnIndians Academy',
  board text not null default 'LearnIndians Certification Board'
);

create table if not exists public.payment_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  student_name text not null default '',
  user_email text not null default '',
  course_id text not null,
  course_title text not null,
  amount numeric(10, 2) not null default 49,
  upi_id text not null,
  utr text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  approved_by uuid references auth.users(id),
  approved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, course_id)
);

alter table public.profiles enable row level security;
alter table public.enrollments enable row level security;
alter table public.certificates enable row level security;
alter table public.payment_requests enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
on public.profiles for select
using (auth.uid() = id);

drop policy if exists "Admins can read profiles" on public.profiles;
create policy "Admins can read profiles"
on public.profiles for select
using (public.is_admin());

drop policy if exists "Users can upsert own profile" on public.profiles;
create policy "Users can upsert own profile"
on public.profiles for insert
with check (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
on public.profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "Users manage own enrollments" on public.enrollments;
create policy "Users manage own enrollments"
on public.enrollments for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Admins can read enrollments" on public.enrollments;
create policy "Admins can read enrollments"
on public.enrollments for select
using (public.is_admin());

drop policy if exists "Admins can manage enrollments" on public.enrollments;
create policy "Admins can manage enrollments"
on public.enrollments for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Users can create own certificates" on public.certificates;
create policy "Users can create own certificates"
on public.certificates for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can read own certificates" on public.certificates;
create policy "Users can read own certificates"
on public.certificates for select
using (auth.uid() = user_id);

drop policy if exists "Admins can read certificates" on public.certificates;
create policy "Admins can read certificates"
on public.certificates for select
using (public.is_admin());

drop policy if exists "Public can verify certificates" on public.certificates;
create policy "Public can verify certificates"
on public.certificates for select
using (true);

drop policy if exists "Users can create own payment requests" on public.payment_requests;
create policy "Users can create own payment requests"
on public.payment_requests for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can read own payment requests" on public.payment_requests;
create policy "Users can read own payment requests"
on public.payment_requests for select
using (auth.uid() = user_id);

drop policy if exists "Users can update own pending payment requests" on public.payment_requests;
create policy "Users can update own pending payment requests"
on public.payment_requests for update
using (auth.uid() = user_id and status = 'pending')
with check (auth.uid() = user_id and status = 'pending');

drop policy if exists "Admins can manage payment requests" on public.payment_requests;
create policy "Admins can manage payment requests"
on public.payment_requests for all
using (public.is_admin())
with check (public.is_admin());

-- After your admin user signs up, run this with that user's email:
-- update public.profiles set role = 'admin' where email = 'info@hirenix.co';
