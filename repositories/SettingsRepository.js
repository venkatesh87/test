import Repository, {baseUrl} from './Repository';

class SettingsRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getContentTemplates() {
    try {
      const response = await Repository.get(
        `${baseUrl}/thehouseoffa/data/settings`
      );
      if (response && response.data) {
        if (
          response.data.templates &&
          response.data.templates.length > 0 &&
          response.data.templates[0].data
        ) {
          return response.data.templates[0].data;
        }
      }
      return [];
    } catch (error) {
      console.log('error:', error);
      return [];
    }
  }

  async getNewArrivalsWidgetDetails(widgetId) {
    try {
      const response = await Repository.get(
        `${baseUrl}/thehouseoffa/products?widgetId=${widgetId}`
      );
      if (response && response.data) {
        return response.data;
      }
      return [];
    } catch (error) {
      console.log('error:', error);
      return [];
    }
  }
}

export default new SettingsRepository();
