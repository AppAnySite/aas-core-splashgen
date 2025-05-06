/**
 * Interface for WebViewComponentCreator.
 * @interface
 */
class IWebViewComponentCreator {
  /**
   * Creates a WebView component.
   * @param {string} url - The URL to be used in the WebView component.
   */
  createWebViewComponent(url) {
    throw new Error('Method not implemented');
  }
}

export default IWebViewComponentCreator;
