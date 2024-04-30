const PORT = 3001;
const HOST = `http://localhost:${PORT}`;

const SERVICES = {
  TRANSLATIONS: "/translations",
};
Object.keys(SERVICES).forEach((key) => {
  SERVICES[key] = `${HOST}${SERVICES[key]}`;
});
export default SERVICES;
