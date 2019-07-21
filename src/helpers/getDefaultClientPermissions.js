const getDefaultClientPermissions = clientType => {
  const MAP = {
    app: {
      projectCreate: false,
      projectRead: false,
      projectUpdate: false,
      projectDelete: false,
      apiTokenCreate: false,
      apiTokenRead: false,
      apiTokenUpdate: false,
      apiTokenDelete: false,
    },
    user: {
      projectCreate: true,
      projectRead: true,
      projectUpdate: true,
      projectDelete: true,
      apiTokenCreate: true,
      apiTokenRead: true,
      apiTokenUpdate: true,
      apiTokenDelete: true,
    },
  }
  return MAP[clientType]
}

module.exports = { getDefaultClientPermissions }