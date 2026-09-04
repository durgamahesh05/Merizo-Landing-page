export const PLAY_STORE_URL = "https://play.google.com/store/search?q=Merizo&c=apps";

export function openPlayStore(event) {
  event.preventDefault();
  window.open(PLAY_STORE_URL, "_self");
}
