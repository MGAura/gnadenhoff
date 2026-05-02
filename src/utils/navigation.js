export const views = {
  discover: "discover",
  admin: "admin",
}

export function getViewFromHash() {
  return window.location.hash === "#admin" ? views.admin : views.discover
}

export function setViewHash(view) {
  window.location.hash = view === views.admin ? "admin" : "discover"
}
