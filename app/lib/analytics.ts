// Analytics and performance tracking
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    // Google Analytics 4
    if ("gtag" in window) {
      ;(window as any).gtag("event", eventName, properties)
    }

    // Custom analytics
    console.log("Event tracked:", eventName, properties)
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined") {
    if ("gtag" in window) {
      ;(window as any).gtag("config", "GA_MEASUREMENT_ID", {
        page_path: url,
      })
    }
  }
}

export const trackPerformance = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming

    const metrics = {
      dns: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcp: navigation.connectEnd - navigation.connectStart,
      ttfb: navigation.responseStart - navigation.requestStart,
      download: navigation.responseEnd - navigation.responseStart,
      domInteractive: navigation.domInteractive - navigation.navigationStart,
      domComplete: navigation.domComplete - navigation.navigationStart,
      loadComplete: navigation.loadEventEnd - navigation.navigationStart,
    }

    console.log("Performance metrics:", metrics)
    return metrics
  }
}
