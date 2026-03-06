// Stub for @base44/sdk - provides no-op implementations
// Replace this with the real @base44/sdk when the package is available

const noopAuth = {
  me: async () => ({ id: "local", name: "Local User", role: "admin" }),
  logout: (redirectUrl) => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  },
  redirectToLogin: (redirectUrl) => {
    console.warn("Auth redirect not available in stub mode");
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  },
};

export function createClient(options) {
  return {
    auth: noopAuth,
  };
}

// Re-export for direct usage
const base44Instance = createClient({});
export { base44Instance as base44 };
