-- FalaPro browser-facing least-privilege hardening.
-- RLS ownership policies already exist on both tables.

revoke all privileges on table public.falapro_sessions from anon, authenticated;
revoke all privileges on table public.falapro_answers from anon, authenticated;

grant select, insert, update, delete on table public.falapro_sessions to authenticated;
grant select, insert, update, delete on table public.falapro_answers to authenticated;

-- Anonymous users intentionally use localStorage only.
