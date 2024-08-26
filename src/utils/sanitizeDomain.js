export const sanitizeDomain = (url) => {
    return url
        .replace(/^(?:https?:\/\/)?(?:www\.)?/i, '') // Remove http, https, and www
        .split('/')[0]; // Remove anything after the domain (e.g., path, query params)
  }