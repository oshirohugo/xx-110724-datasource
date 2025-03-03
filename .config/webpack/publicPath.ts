/*
 * ⚠️⚠️⚠️ THIS FILE WAS SCAFFOLDED BY `@grafana/create-plugin`. DO NOT EDIT THIS FILE DIRECTLY. ⚠️⚠️⚠️
 *
 * This file dynamically sets the public path at runtime based on the location of the plugin's AMD module.
 * It relies on the magic `module` which is defined by the AMD loader.
 * https://github.com/requirejs/requirejs/wiki/Differences-between-the-simplified-CommonJS-wrapper-and-standard-AMD-define#module
 *
 * We fallback to the plugin root so that older versions of Grafana will continue to load the plugin correctly.
 */

// @ts-nocheck
import amdMetaModule from 'amd-module';

__webpack_public_path__ =
  amdMetaModule && amdMetaModule.uri
    ? amdMetaModule.uri.slice(0, amdMetaModule.uri.lastIndexOf('/') + 1)
    : 'public/plugins/xx-110724-datasource/';
