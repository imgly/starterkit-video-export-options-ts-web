/**
 * CE.SDK Video Export Options Starterkit - Main Entry Point
 *
 * A video editor with customizable export options for resolution,
 * format, and quality settings.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initVideoExportOptionsEditor } from './imgly';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-video-export-options-user'

  // Local assets
  // baseURL: `/assets/`,

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',
};

// ============================================================================
// Initialize Video Export Options Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    await initVideoExportOptionsEditor(cesdk);
    // ============================================================================
    // Scene Loading
    // ============================================================================

    await cesdk.loadFromArchiveURL(
      'https://cdn.img.ly/packages/imgly/plugin-marketing-asset-source-web/1.0.0/assets/templates/video-fashion-portfolio.zip'
    );

    // Open panel
    cesdk.ui.openPanel('//ly.img.panel/video-export');
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
