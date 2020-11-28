function shouldRun() {
  return (['production', 'staging'].includes(process.env.NODE_ENV));
}

module.exports = { shouldRun };
