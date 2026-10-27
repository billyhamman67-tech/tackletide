create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_roles (
  user_id uuid not null references auth.users (id) on delete cascade,
  role text not null check (role in ('admin', 'moderator')),
  created_at timestamptz not null default now(),
  primary key (user_id, role)
);

create table if not exists public.content_sources (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  url text,
  licence_note text,
  created_at timestamptz not null default now()
);

create table if not exists public.fishing_locations (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  region text not null,
  location_type text not null,
  latitude double precision not null check (latitude between -90 and 90),
  longitude double precision not null check (longitude between -180 and 180),
  coordinate_precision text not null default 'approximate' check (coordinate_precision in ('approximate', 'verified')),
  ground_types text[] not null default '{}',
  overview text not null default '',
  access_notes text not null default '',
  verification_status text not null default 'needs_verification' check (verification_status in ('needs_verification', 'community_report', 'verified', 'restricted')),
  source_id uuid references public.content_sources (id) on delete set null,
  source_url text,
  last_verified_at timestamptz,
  is_public boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists fishing_locations_region_idx on public.fishing_locations (region);
create index if not exists fishing_locations_verification_idx on public.fishing_locations (verification_status);

create table if not exists public.species (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  common_name text not null,
  scientific_name text,
  identifying_features text[] not null default '{}',
  habitat_notes text not null default '',
  regulation_url text,
  verification_status text not null default 'needs_verification' check (verification_status in ('needs_verification', 'verified')),
  source_id uuid references public.content_sources (id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.location_species (
  location_id uuid not null references public.fishing_locations (id) on delete cascade,
  species_id uuid not null references public.species (id) on delete cascade,
  information_type text not null default 'general_guidance' check (information_type in ('verified_local', 'community_report', 'general_guidance', 'unverified')),
  primary key (location_id, species_id)
);

create table if not exists public.bait_types (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  category text not null,
  guidance text not null default '',
  verification_status text not null default 'general_guidance' check (verification_status in ('general_guidance', 'verified')),
  source_id uuid references public.content_sources (id) on delete set null
);

create table if not exists public.rigs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  rig_type text not null,
  difficulty text not null,
  components jsonb not null default '[]'::jsonb,
  instructions jsonb not null default '[]'::jsonb,
  ground_types text[] not null default '{}',
  target_species text[] not null default '{}',
  source_id uuid references public.content_sources (id) on delete set null
);

create table if not exists public.favourites (
  user_id uuid not null references auth.users (id) on delete cascade,
  location_id uuid not null references public.fishing_locations (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, location_id)
);

create table if not exists public.fishing_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  session_date timestamptz not null,
  location_name text,
  latitude double precision check (latitude between -90 and 90),
  longitude double precision check (longitude between -180 and 180),
  notes text not null default '',
  catch_data jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.user_private_marks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  latitude double precision not null check (latitude between -90 and 90),
  longitude double precision not null check (longitude between -180 and 180),
  visibility text not null default 'private' check (visibility in ('private', 'selected_users', 'public')),
  notes text not null default '',
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.favourites enable row level security;
alter table public.fishing_sessions enable row level security;
alter table public.user_private_marks enable row level security;
alter table public.fishing_locations enable row level security;
alter table public.species enable row level security;
alter table public.location_species enable row level security;
alter table public.bait_types enable row level security;
alter table public.rigs enable row level security;
alter table public.content_sources enable row level security;

create policy "Public can read public locations" on public.fishing_locations
  for select using (is_public = true and verification_status <> 'restricted');
create policy "Public can read species" on public.species for select using (true);
create policy "Public can read location species" on public.location_species for select using (true);
create policy "Public can read bait types" on public.bait_types for select using (true);
create policy "Public can read rigs" on public.rigs for select using (true);
create policy "Public can read content sources" on public.content_sources for select using (true);

create policy "Users manage their own profile" on public.profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "Users read their own roles" on public.user_roles
  for select using (auth.uid() = user_id);
create policy "Users manage their own favourites" on public.favourites
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users manage their own sessions" on public.fishing_sessions
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users manage their own private marks" on public.user_private_marks
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);