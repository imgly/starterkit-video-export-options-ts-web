/**
 * CE.SDK Video Export Options Starterkit - Main Entry Point
 *
 * A video editor with custom export options panel for selecting
 * resolution (SD, HD, FHD, 2K, 4K, Custom) and FPS (24, 30, 60, 120).
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initVideoExportOptionsEditor } from './imgly';
import { resolveAssetPath } from './resolveAssetPath';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-video-export-options-user',

  // Local assets for development

};

// ============================================================================
// Initialize Video Editor with Export Options
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as unknown as { cesdk: CreativeEditorSDK }).cesdk = cesdk;

    await initVideoExportOptionsEditor(cesdk);
    // ============================================================================
    // Scene Loading
    // ============================================================================

    await cesdk.loadFromURL(
      resolveAssetPath('/assets/example-video-motion.scene')
    );

    // Open panel
    cesdk.ui.openPanel('//ly.img.panel/video-export');
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
