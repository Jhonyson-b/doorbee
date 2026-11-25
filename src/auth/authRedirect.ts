export const authRedirectUrl = () => {
  const url = new URL(import.meta.env.BASE_URL, window.location.origin)
  url.searchParams.set('auth_callback', '1')
  return url.toString()
}
