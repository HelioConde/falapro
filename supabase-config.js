(() => {
  const URL = "https://bnlvvsjgpywpbfhwdcan.supabase.co";
  const KEY = "sb_publishable_8q954VgGB7IUEgwWYA55-Q_MUyDd17c";

  let client = null;
  try {
    if (window.supabase?.createClient) {
      client = window.supabase.createClient(URL, KEY, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      });
    }
  } catch (error) {
    console.warn("FalaPro cloud unavailable", error);
  }

  window.FALAPRO_SUPABASE = Object.freeze({ url: URL, client });
})();
