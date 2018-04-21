export default function getRootUrl() {
  const port = process.env.PORT || 4000;
  const dev = process.env.NODE_ENV !== 'production';
  // change production to https://rearn.org
  const ROOT_URL = dev ? `http://localhost:${port}` : `http://localhost:${port}`;

  return ROOT_URL;
}
