-- FalaPro: answer and session must belong to the same authenticated user.
-- Restrictive RLS combines with all existing permissive policies.
create policy falapro_answers_session_owner_guard
on public.falapro_answers
as restrictive
for all
to authenticated
using (
  (select auth.uid()) = user_id
  and exists (
    select 1
    from public.falapro_sessions as session
    where session.id = falapro_answers.session_id
      and session.user_id = (select auth.uid())
  )
)
with check (
  (select auth.uid()) = user_id
  and exists (
    select 1
    from public.falapro_sessions as session
    where session.id = falapro_answers.session_id
      and session.user_id = (select auth.uid())
  )
);
