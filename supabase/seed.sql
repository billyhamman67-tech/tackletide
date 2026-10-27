insert into public.content_sources (name, url, licence_note)
values ('OpenStreetMap place search', 'https://www.openstreetmap.org/copyright', 'Map reference only; seed pins are approximate place centres and require verification.')
on conflict do nothing;

insert into public.fishing_locations (slug, name, region, location_type, latitude, longitude, coordinate_precision, ground_types, overview, access_notes, verification_status, source_url)
values
  ('barry-island', 'Barry Island', 'South Wales', 'Beach and promenade', 51.3934, -3.2737, 'approximate', array['Sand', 'Mixed'], 'Named coastal place; fishing details not verified.', 'Check local restrictions, seasonal notices and safe access.', 'needs_verification', 'https://www.openstreetmap.org/search?query=Barry%20Island%20Wales'),
  ('clevedon-pier', 'Clevedon Pier', 'Bristol Channel', 'Pier', 51.4385, -2.8554, 'approximate', array['Mud', 'Mixed'], 'Named coastal structure; fishing details not verified.', 'Check pier fishing access, tide conditions and local rules.', 'needs_verification', 'https://www.openstreetmap.org/search?query=Clevedon%20Pier'),
  ('llandudno-pier', 'Llandudno Pier', 'North Wales', 'Pier', 53.3263, -3.8292, 'approximate', array['Mixed', 'Rock'], 'Named coastal structure; fishing details not verified.', 'Confirm fishing permission and operator rules before visiting.', 'needs_verification', 'https://www.openstreetmap.org/search?query=Llandudno%20Pier'),
  ('st-ives-harbour', 'St Ives Harbour', 'Cornwall', 'Harbour', 50.2110, -5.4808, 'approximate', array['Rock', 'Mixed'], 'Named harbour; fishing details not verified.', 'Observe harbour authority rules and local access restrictions.', 'needs_verification', 'https://www.openstreetmap.org/search?query=St%20Ives%20Harbour%20Cornwall'),
  ('mount-batten', 'Mount Batten', 'Devon', 'Headland and harbour area', 50.3577, -4.1188, 'approximate', array['Rock', 'Mixed'], 'Named coastal area; fishing details not verified.', 'Confirm access and local restrictions for the exact section.', 'needs_verification', 'https://www.openstreetmap.org/search?query=Mount%20Batten%20Plymouth'),
  ('sandown-seafront', 'Sandown Seafront', 'Isle of Wight', 'Beach and seafront', 50.6568, -1.1482, 'approximate', array['Sand'], 'Broad seafront reference; fishing details not verified.', 'Check local beach access, seasonal restrictions and current conditions.', 'needs_verification', 'https://www.openstreetmap.org/search?query=Sandown%20Beach%20Isle%20of%20Wight'),
  ('cromer-pier', 'Cromer Pier', 'East England', 'Pier', 52.9321, 1.3007, 'approximate', array['Shingle', 'Mixed'], 'Named coastal structure; fishing details not verified.', 'Check pier status, fishing rules and conditions locally.', 'needs_verification', 'https://www.openstreetmap.org/search?query=Cromer%20Pier'),
  ('portrush-harbour', 'Portrush Harbour', 'Northern Ireland', 'Harbour', 55.2032, -6.6566, 'approximate', array['Rock', 'Mixed'], 'Named harbour; fishing details not verified.', 'Follow harbour rules and verify permitted access.', 'needs_verification', 'https://www.openstreetmap.org/search?query=Portrush%20Harbour'),
  ('troon-harbour', 'Troon Harbour', 'Scotland', 'Harbour', 55.5416, -4.6668, 'approximate', array['Mixed', 'Sand'], 'Named commercial harbour; fishing details not verified.', 'Check restrictions, safety notices and permitted areas.', 'needs_verification', 'https://www.openstreetmap.org/search?query=Troon%20Harbour')
on conflict (slug) do nothing;

insert into public.species (slug, common_name, scientific_name, identifying_features, habitat_notes)
values
  ('bass', 'European seabass', 'Dicentrarchus labrax', array['Dark back', 'Silver sides', 'Pronounced gill cover'], 'Estuaries, surf beaches and rocky ground.'),
  ('mackerel', 'Atlantic mackerel', 'Scomber scombrus', array['Wavy dark bars', 'Blue-green back'], 'Open water and coastal shoals.'),
  ('flounder', 'European flounder', 'Platichthys flesus', array['Both eyes on one side', 'Often rough bumps near the head'], 'Estuaries, sandy and muddy shallows.'),
  ('pollack', 'Pollack', 'Pollachius pollachius', array['Projecting lower jaw', 'Curved lateral line'], 'Rocky ground and kelp edges.')
on conflict (slug) do nothing;

insert into public.bait_types (slug, name, category, guidance)
values
  ('lugworm', 'Lugworm', 'Worm', 'General bait guidance; suitability varies by mark and season.'),
  ('ragworm', 'Ragworm', 'Worm', 'General bait guidance; handle gently and keep cool.'),
  ('squid', 'Squid', 'Cephalopod', 'Tough strip bait; use only as a general starting point.'),
  ('spider-crab', 'Spider crab', 'Crustacean', 'General bait guidance; verify local availability and collection restrictions.'),
  ('mackerel-strip', 'Mackerel strip', 'Fish bait', 'Oily fish bait; use only as a general starting point.')
on conflict (slug) do nothing;

insert into public.rigs (slug, name, rig_type, difficulty, components, instructions, ground_types, target_species)
values
  ('running-ledger', 'Running ledger', 'Ledger', 'Beginner', '["Main line", "Running link", "Swivel", "Hooklength", "Hook"]'::jsonb, '["Thread a running link onto the main line.", "Tie on a swivel.", "Attach a hooklength and hook."]'::jsonb, array['Sand', 'Mixed'], array['Bass', 'Flatfish']),
  ('two-hook-flapper', 'Two-hook flapper', 'Multi-hook', 'Beginner', '["Main line", "Rig body", "Two snoods", "Two hooks"]'::jsonb, '["Add two snood attachments to the rig body.", "Tie hooks to the snoods.", "Attach a suitable lead link."]'::jsonb, array['Sand', 'Shingle'], array['Whiting', 'Flatfish'])
on conflict (slug) do nothing;